import { inject, injectable } from 'tsyringe';
import { Articles } from '../../entities/Articles';
import { ArticlesRepository } from '../../entities/articles-repository';

@injectable()
export class FindAllArticlesUseCase {
  constructor(
    @inject('ArticlesRepository')
    private articlesRepository: ArticlesRepository
  ) {}

  async execute(): Promise<Articles[]> {
    return await this.articlesRepository.findAll();
  }
}
