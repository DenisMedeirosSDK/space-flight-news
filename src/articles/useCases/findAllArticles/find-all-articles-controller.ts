import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { FindAllArticlesUseCase } from './find-all-articles-use-case';

export class FindAllArticlesController {
  async handle(request: Request, response: Response) {
    const { page, limit } = request.query;
    const findAllArticlesUseCase = container.resolve(FindAllArticlesUseCase);

    const articles = await findAllArticlesUseCase.execute({
      limit: parseInt(limit as string),
      page: parseInt(page as string),
    });

    return response.status(200).json(articles);
  }
}
