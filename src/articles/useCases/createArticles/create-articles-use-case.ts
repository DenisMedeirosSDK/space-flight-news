import { inject, injectable } from 'tsyringe';
import { ArticlesRepository } from '../../entities/articles-repository';

@injectable()
export class CreateArticlesUseCase {
  constructor(
    @inject('ArticlesRepository')
    private articlesRepository: ArticlesRepository
  ) {}
  async execute(data: unknown) {
    await this.articlesRepository.create(data);
  }
}
