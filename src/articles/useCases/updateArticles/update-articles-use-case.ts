import { inject, injectable } from 'tsyringe';
import { ArticlesRepository } from '../../entities/articles-repository';

@injectable()
export class UpdateArticlesUseCase {
  constructor(
    @inject('ArticlesRepository')
    private articlesRepository: ArticlesRepository
  ) {}

  async execute(id: string, data: unknown) {
    const article = await this.articlesRepository.findById(id);

    if (!article) {
      throw new Error('Article not found');
    }

    await this.articlesRepository.update(id, data);
  }
}
