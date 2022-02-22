import { Router } from 'express';
import { articlesRoutes } from '../articles/infra/http/articles.routes';

const routes = Router();

routes.use(articlesRoutes);

export { routes };
