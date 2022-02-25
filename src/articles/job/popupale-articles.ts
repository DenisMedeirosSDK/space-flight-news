import axios from 'axios';
import { scheduleJob } from 'node-schedule';
import { client } from '../../infra/database/mongodb';

async function execute() {
  try {
    let limit = 1000;
    let start = 0;
    let articles = [];

    const getCountDatabase = await client
      .db('coodesh')
      .collection('articles')
      .estimatedDocumentCount();

    start = getCountDatabase;

    if (start === 0) {
      const response = await axios.get(
        `https://api.spaceflightnewsapi.net/v3/articles`,
        {
          params: {
            _limit: limit,
            _start: start,
            _sort: 'id',
          },
        }
      );
      articles = response.data;

      if (articles.length != 0) {
        await client.db('coodesh').collection('articles').insertMany(articles);
      }
    }

    if (start > 0) {
      const response = await axios.get(
        `https://api.spaceflightnewsapi.net/v3/articles`,
        {
          params: {
            _limit: limit,
            _start: start++,
            _sort: 'id',
          },
        }
      );

      articles = response.data;
      if (articles.length != 0) {
        await client.db('coodesh').collection('articles').insertMany(articles);
      }
    }
  } catch (error) {
    console.log(error);
    throw new Error('Error execute job');
  }
}

export const populateArticles = scheduleJob('*/10 * * * * *', () => {
  execute();
});
