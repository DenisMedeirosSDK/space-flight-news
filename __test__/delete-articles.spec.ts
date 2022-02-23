import { ArticlesInMemoryRepository } from '../src/articles/infra/inMemory/repositories/articles-in-memory-repository';
import { DeleteArticlesUseCase } from '../src/articles/useCases/deleteArticles/delete-articles-use-case';
import { CreateArticlesUseCase } from '../src/articles/useCases/createArticles/create-articles-use-case';

let deleteArticlesUseCase: DeleteArticlesUseCase;
let createArticlesUseCase: CreateArticlesUseCase;
let articlesRepository: ArticlesInMemoryRepository;

describe('Create Articles', () => {
  beforeAll(() => {
    articlesRepository = new ArticlesInMemoryRepository();
    deleteArticlesUseCase = new DeleteArticlesUseCase(articlesRepository);
    createArticlesUseCase = new CreateArticlesUseCase(articlesRepository);
  });
  it('should be able to delete a article', async () => {
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

    const articles = await deleteArticlesUseCase.execute(article._id);

    expect(articles).toEqual(articles);
  });
  it('should be not able to delete article', async () => {
    expect(deleteArticlesUseCase.execute('fake_id')).rejects.toBeInstanceOf(
      Error
    );
  });
});
