import { Router } from 'express';
import { CreateArticlesController } from '../../useCases/createArticles/create-articles-controller';
import { DeleteArticlesController } from '../../useCases/deleteArticles/delete-articles-controller';
import { FindAllArticlesController } from '../../useCases/findAllArticles/find-all-articles-controller';
import { FindArticlesByIdController } from '../../useCases/findArticlesById/find-articles-by-id-controller';
import { UpdateArticlesController } from '../../useCases/updateArticles/update-articles-controller';

const createArticlesController = new CreateArticlesController();
const findAllArticlesController = new FindAllArticlesController();
const findArticlesByIdController = new FindArticlesByIdController();
const deleteArticlesController = new DeleteArticlesController();
const updateArticlesController = new UpdateArticlesController();

const articlesRoutes = Router();

articlesRoutes.post('/articles', createArticlesController.handle);
articlesRoutes.get('/articles', findAllArticlesController.handle);
articlesRoutes.get('/articles/:id', findArticlesByIdController.handle);
articlesRoutes.delete('/articles/:id', deleteArticlesController.handle);
articlesRoutes.put('/articles/:id', updateArticlesController.handle);

export { articlesRoutes };
