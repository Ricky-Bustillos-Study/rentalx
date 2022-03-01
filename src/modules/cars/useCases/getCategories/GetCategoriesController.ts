import { Request, Response } from 'express';

import { GetCategoriesUseCase } from './GetCategoriesUseCase';

export class GetCategoriesController {
  constructor(private getCategoriesUseCase: GetCategoriesUseCase) {}

  handle(request: Request, response: Response): Response {
    const categories = this.getCategoriesUseCase.execute();

    return response.json(categories);
  }
}
