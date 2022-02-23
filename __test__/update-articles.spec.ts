import { ArticlesInMemoryRepository } from '../src/articles/infra/inMemory/repositories/articles-in-memory-repository';
import { UpdateArticlesUseCase } from '../src/articles/useCases/updateArticles/update-articles-use-case';
import { CreateArticlesUseCase } from '../src/articles/useCases/createArticles/create-articles-use-case';

let updateArticlesUseCase: UpdateArticlesUseCase;
let createArticlesUseCase: CreateArticlesUseCase;
let articlesRepository: ArticlesInMemoryRepository;

describe('Create Articles', () => {
  beforeAll(() => {
    articlesRepository = new ArticlesInMemoryRepository();
    updateArticlesUseCase = new UpdateArticlesUseCase(articlesRepository);
    createArticlesUseCase = new CreateArticlesUseCase(articlesRepository);
  });
  it('should be able to update a article', async () => {
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

    const newData = {
      id: 123456,
      featured: true,
      title: 'string 2',
      url: 'string 2',
      imageUrl: 'string 2',
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

    const articles = await updateArticlesUseCase.execute(article._id, newData);

    expect(articles).toEqual(articles);
  });
  it('should be not to update articles', async () => {
    expect(updateArticlesUseCase.execute('fake_id', {})).rejects.toBeInstanceOf(
      Error
    );
  });
});
