import { Articles } from '../../../entities/Articles';
import { ArticlesRepository } from '../../../entities/articles-repository';

export class ArticlesInMemoryRepository implements ArticlesRepository {
  articles: Articles[] = [];
  async update(_id: string, data: unknown): Promise<void> {
    const index = this.articles.findIndex(article => article._id === _id);

    Object.assign(this.articles[index], data);
  }
  async delete(_id: string): Promise<void> {
    const index = this.articles.findIndex(article => article._id === _id);

    this.articles.splice(index, 1);
  }
  async findById(_id: string): Promise<Articles> {
    return this.articles.find(article => article._id === _id) as Articles;
  }

  async findAll(): Promise<Articles[]> {
    return this.articles;
  }

  async create(data: unknown): Promise<Articles> {
    const articles = new Articles();

    Object.assign(articles, data);

    this.articles.push(articles);

    return articles;
  }
}
