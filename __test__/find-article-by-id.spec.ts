import { ArticlesInMemoryRepository } from '../src/articles/infra/inMemory/repositories/articles-in-memory-repository';
import { FindArticlesByIdUseCase } from '../src/articles/useCases/findArticlesById/find-articles-by-id-use-case';
import { CreateArticlesUseCase } from '../src/articles/useCases/createArticles/create-articles-use-case';

let findArticlesByIdUseCase: FindArticlesByIdUseCase;
let createArticlesUseCase: CreateArticlesUseCase;
let articlesRepository: ArticlesInMemoryRepository;

describe('Create Articles', () => {
  beforeAll(() => {
    articlesRepository = new ArticlesInMemoryRepository();
    findArticlesByIdUseCase = new FindArticlesByIdUseCase(articlesRepository);
    createArticlesUseCase = new CreateArticlesUseCase(articlesRepository);
  });
  it('should be able to list article', async () => {
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

    const articles = await findArticlesByIdUseCase.execute(article._id);

    expect(articles).toEqual(articles);
  });
  it('should be ot able to list article', async () => {
    expect(findArticlesByIdUseCase.execute('fake_id')).rejects.toBeInstanceOf(
      Error
    );
  });
});
