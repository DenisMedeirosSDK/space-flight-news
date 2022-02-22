import { ArticlesRepository } from '../../entities/articles-repository';
import { Articles } from '../../entities/Articles';
import { inject, injectable } from 'tsyringe';

@injectable()
export class FindArticlesByIdUseCase {
  constructor(
    @inject('ArticlesRepository')
    private articlesRepository: ArticlesRepository
  ) {}

  async execute(id: string): Promise<Articles> {
    const article = await this.articlesRepository.findById(id);

    if (!article) {
      throw new Error('Article not found');
    }

    return article;
  }
}
