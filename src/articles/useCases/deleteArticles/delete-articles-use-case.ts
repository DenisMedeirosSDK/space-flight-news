import { ArticlesRepository } from '../../entities/articles-repository';
import { inject, injectable } from 'tsyringe';

@injectable()
export class DeleteArticlesUseCase {
  constructor(
    @inject('ArticlesRepository')
    private articlesRepository: ArticlesRepository
  ) {}

  async execute(_id: string): Promise<void> {
    const article = await this.articlesRepository.findById(_id);

    if (!article) {
      throw new Error('Article not found');
    }

    await this.articlesRepository.delete(_id);
  }
}
