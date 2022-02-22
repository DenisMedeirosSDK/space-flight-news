import { Articles } from '../../entities/Articles';
import { inject, injectable } from 'tsyringe';
import { ArticlesRepository } from '../../entities/articles-repository';

@injectable()
export class CreateArticlesUseCase {
  constructor(
    @inject('ArticlesRepository')
    private articlesRepository: ArticlesRepository
  ) {}
  async execute(data: unknown): Promise<Articles> {
    const articles = await this.articlesRepository.create(data);

    return articles;
  }
}
