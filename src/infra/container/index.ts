import { container } from 'tsyringe';
import { ArticlesRepository } from '../../articles/entities/articles-repository';
import { ArticlesMongodbRepository } from '../../articles/infra/mongodb/repositories/articles-mongodb-repository';

container.registerSingleton<ArticlesRepository>(
  'ArticlesRepository',
  ArticlesMongodbRepository
);
