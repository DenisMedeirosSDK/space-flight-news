import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdateArticlesUseCase } from './update-articles-use-case';

export class UpdateArticlesController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const data = request.body as unknown;
    const updateArticlesUseCase = container.resolve(UpdateArticlesUseCase);

    await updateArticlesUseCase.execute(id, data);

    return response.status(200).json({ message: 'Article updated' });
  }
}
