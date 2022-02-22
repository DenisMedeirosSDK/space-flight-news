import { ArticlesInMemoryRepository } from '../src/articles/infra/inMemory/repositories/articles-in-memory-repository';
import { CreateArticlesUseCase } from '../src/articles/useCases/createArticles/create-articles-use-case';

let createArticlesUseCase: CreateArticlesUseCase;
let articlesRepository: ArticlesInMemoryRepository;

describe('Create Articles', () => {
  beforeAll(() => {
    articlesRepository = new ArticlesInMemoryRepository();
    createArticlesUseCase = new CreateArticlesUseCase(articlesRepository);
  });
  it('should be able to create a new article', async () => {
    const data = {
      id: 123456,
      featured: false,
      title: 'string',
      url: 'string',
      imageUrl: 'string',
      newsSite: 'string',
      summary: 'string',
      publishedAt: 'string',
      launches: [
        {
          id: 'string',
          provider: 'string',
        },
      ],
      events: [
        {
          id: 'string',
          provider: 'string',
        },
      ],
    };

    const article = await createArticlesUseCase.execute(data);

    expect(article).toHaveProperty('_id');
  });
});
