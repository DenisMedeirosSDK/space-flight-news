import { container } from 'tsyringe';
import { ArticlesRepository } from '../../articles/entities/articles-repository';
import { ArticlesInMemoryRepository } from '../../articles/infra/inMemory/repositories/articles-in-memory-repository';

container.registerSingleton<ArticlesRepository>(
  'ArticlesRepository',
  ArticlesInMemoryRepository
);
