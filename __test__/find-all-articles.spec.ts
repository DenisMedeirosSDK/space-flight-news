import { ArticlesInMemoryRepository } from '../src/articles/infra/inMemory/repositories/articles-in-memory-repository';
import { FindAllArticlesUseCase } from '../src/articles/useCases/findAllArticles/find-all-articles-use-case';
import { CreateArticlesUseCase } from '../src/articles/useCases/createArticles/create-articles-use-case';

let findAllArticlesUseCase: FindAllArticlesUseCase;
let createArticlesUseCase: CreateArticlesUseCase;
let articlesRepository: ArticlesInMemoryRepository;

describe('Create Articles', () => {
  beforeAll(() => {
    articlesRepository = new ArticlesInMemoryRepository();
    findAllArticlesUseCase = new FindAllArticlesUseCase(articlesRepository);
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

    await createArticlesUseCase.execute(data);

    const articles = await findAllArticlesUseCase.execute();

    expect(articles).toEqual(articles);
  });
});
