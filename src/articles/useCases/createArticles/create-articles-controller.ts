import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateArticlesUseCase } from './create-articles-use-case';

export class CreateArticlesController {
  async handle(request: Request, response: Response) {
    const data = request.body;

    const createArticles = container.resolve(CreateArticlesUseCase);

    await createArticles.execute(data);

    return response.status(200).json({ message: 'Create success' });
  }
}
