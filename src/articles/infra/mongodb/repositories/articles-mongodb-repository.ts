import { Articles } from 'articles/entities/Articles';
import {
  ArticlesRepository,
  Pagination,
} from 'articles/entities/articles-repository';
import { Document, ObjectId } from 'mongodb';
import { client as MongoClient } from '../../../../infra/database/mongodb/index';

export class ArticlesMongodbRepository implements ArticlesRepository {
  async create(data: unknown): Promise<Articles> {
    const articles = await MongoClient.db('coodesh')
      .collection('articles')
      .insertOne(data as Document);

    const article = (await MongoClient.db('coodesh')
      .collection('articles')
      .findOne(articles.insertedId)) as Document;

    if (!article) {
      throw new Error('Article not found');
    }

    return article as Articles;
  }

  async findAll({ limit, page }: Pagination): Promise<Articles[]> {
    const articles: unknown = await MongoClient.db('coodesh')
      .collection('articles')
      .find()
      .skip(limit > 0 ? (page - 1) * limit : 0)
      .limit(limit)
      .toArray();

    return articles as Articles[];
  }

  async findById(_id: string): Promise<Articles> {
    const article = (await MongoClient.db('coodesh')
      .collection('articles')
      .findOne({ _id: new ObjectId(_id) })) as Document;

    return article as Articles;
  }

  async delete(_id: string): Promise<void> {
    await MongoClient.db('coodesh')
      .collection('articles')
      .findOneAndDelete({ _id: new ObjectId(_id) });
  }

  async update(_id: string, data: unknown): Promise<void> {
    await MongoClient.db('coodesh')
      .collection('articles')
      .updateOne({ _id: new ObjectId(_id) }, { $set: data });
  }
}
