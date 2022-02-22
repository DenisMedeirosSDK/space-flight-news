import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { FindArticlesByIdUseCase } from './find-articles-by-id-use-case';

export class FindArticlesByIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const findArticlesByIdUseCase = container.resolve(FindArticlesByIdUseCase);

    const article = await findArticlesByIdUseCase.execute(id);

    return response.status(200).json(article);
  }
}
