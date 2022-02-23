import { inject, injectable } from 'tsyringe';
import { Articles } from '../../entities/Articles';
import { ArticlesRepository } from '../../entities/articles-repository';

type Request = {
  page: number;
  limit: number;
};

@injectable()
export class FindAllArticlesUseCase {
  constructor(
    @inject('ArticlesRepository')
    private articlesRepository: ArticlesRepository
  ) {}

  async execute({ limit, page }: Request): Promise<Articles[]> {
    return await this.articlesRepository.findAll({ limit, page });
  }
}
