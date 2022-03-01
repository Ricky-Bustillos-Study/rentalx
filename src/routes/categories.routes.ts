import { Request, Response, Router } from 'express';

import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { createCategoryController } from '../modules/cars/useCases/createCategory';

const categoriesRoutes: Router = Router();
const categoriesRepository: CategoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => createCategoryController.handle(request, response));

categoriesRoutes.get('/', (request, response) => {
  const categories = categoriesRepository.getAll();

  return response.status(200).json(categories);
});

export { categoriesRoutes };
