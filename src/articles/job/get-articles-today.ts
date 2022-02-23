import axios from 'axios';
import { scheduleJob } from 'node-schedule';
import { format, subDays } from 'date-fns';

import { client } from '../../infra/database/mongodb';

async function execute() {
  let limit = 20;
  let start = 1;
  let articles = [];
  let newsArticles: any[] = [];

  try {
    const response = await axios.get(
      `https://api.spaceflightnewsapi.net/v3/articles`,
      {
        params: {
          _limit: limit,
          _start: start,
        },
      }
    );

    articles = response.data;

    const todayDate = format(new Date(), 'yyyy-MM-dd');

    articles.map((article: any) => {
      const parsePublishDate = format(
        new Date(article.publishedAt),
        'yyyy-MM-dd'
      );
      if (parsePublishDate === todayDate) {
        newsArticles.push(article);
      } else {
        console.log('not today');
      }
    });

    client.db('coodesh').collection('articles').insertMany(newsArticles);
  } catch (error) {
    console.log(error);
  }
}

export const populateArticlesToday = scheduleJob('0 9 * * *', () => {
  execute();
});
