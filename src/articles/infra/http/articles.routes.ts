import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

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

articlesRoutes.post(
  '/articles',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      id: Joi.number().required(),
      featured: Joi.boolean().required(),
      title: Joi.string().required(),
      url: Joi.string().required(),
      imageUrl: Joi.string().required(),
      newsSite: Joi.string().required(),
      summary: Joi.string().required(),
      publishedAt: Joi.string().required(),
      launches: Joi.array().items({
        id: Joi.string().required(),
        provider: Joi.string().required(),
      }),
      events: Joi.array().items({
        id: Joi.string().required(),
        provider: Joi.string().required(),
      }),
    }),
  }),
  createArticlesController.handle
);
articlesRoutes.get(
  '/articles',
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number().default(1).required(),
      limit: Joi.number().default(20).required(),
    }),
  }),
  findAllArticlesController.handle
);
articlesRoutes.get(
  '/articles/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().required(),
    }),
  }),
  findArticlesByIdController.handle
);
articlesRoutes.delete(
  '/articles/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().required(),
    }),
  }),
  deleteArticlesController.handle
);
articlesRoutes.put(
  '/articles/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      id: Joi.number().required(),
      featured: Joi.boolean().required(),
      title: Joi.string().required(),
      url: Joi.string().required(),
      imageUrl: Joi.string().required(),
      newsSite: Joi.string().required(),
      summary: Joi.string().required(),
      publishedAt: Joi.string().required(),
      launches: Joi.array().items({
        id: Joi.string().required(),
        provider: Joi.string().required(),
      }),
      events: Joi.array().items({
        id: Joi.string().required(),
        provider: Joi.string().required(),
      }),
    }),
  }),
  updateArticlesController.handle
);

export { articlesRoutes };
