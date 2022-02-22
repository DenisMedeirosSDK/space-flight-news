import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { FindAllArticlesUseCase } from './find-all-articles-use-case';

export class FindAllArticlesController {
  async handle(request: Request, response: Response) {
    const findAllArticlesUseCase = container.resolve(FindAllArticlesUseCase);

    const articles = await findAllArticlesUseCase.execute();

    return response.status(200).json(articles);
  }
}
