import { Router } from 'express';

import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { getCategoriesController } from '../modules/cars/useCases/getCategories';

const categoriesRoutes: Router = Router();

categoriesRoutes.post('/', (request, response) => createCategoryController.handle(request, response));

categoriesRoutes.get('/', (request, response) => getCategoriesController.handle(request, response));

export { categoriesRoutes };
