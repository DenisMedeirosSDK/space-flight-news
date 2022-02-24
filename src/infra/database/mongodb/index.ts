import { MongoClient } from 'mongodb';

const url = process.env.MONGO_URL as string;

export let client = new MongoClient(url);

export async function run() {
  try {
    await client.connect();
    console.log('Connected correctly to server');
  } catch (error) {
    await client.close();
    console.log('Connection failed');
  }
}
