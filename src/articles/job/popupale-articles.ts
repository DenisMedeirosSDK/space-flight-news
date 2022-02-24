import axios from 'axios';
import { scheduleJob } from 'node-schedule';
import { client } from '../../infra/database/mongodb';

async function execute() {
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
    await client.db('coodesh').collection('articles').insertMany(articles);
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
    await client.db('coodesh').collection('articles').insertMany(articles);
  }
}

export const populateArticles = scheduleJob('*/10 * * * * *', () => {
  execute();
});
