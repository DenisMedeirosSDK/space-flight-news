import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { DeleteArticlesUseCase } from './delete-articles-use-case';

export class DeleteArticlesController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const deleteArticlesUseCase = container.resolve(DeleteArticlesUseCase);

    const article = await deleteArticlesUseCase.execute(id);

    return response.status(200).json(article);
  }
}
