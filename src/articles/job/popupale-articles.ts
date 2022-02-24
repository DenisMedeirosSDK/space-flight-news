import axios from 'axios';
import { scheduleJob } from 'node-schedule';

import { client } from '../../infra/database/mongodb';

async function execute() {
  let limit = 1000;
  let start = 0;
  let running = true;
  let articles = [];
  let page = start++;

  try {
    while (running) {
      const response = await axios.get(
        `https://api.spaceflightnewsapi.net/v3/articles`,
        {
          params: {
            _limit: limit,
            _start: page,
            _sort: 'id',
          },
        }
      );

      articles = response.data;

      client.db('coodesh').collection('articles').insertMany(articles);
    }
  } catch (error) {
    running = false;
  }
}

export const populateArticles = scheduleJob('* * * * * *', () => {
  execute();
});
