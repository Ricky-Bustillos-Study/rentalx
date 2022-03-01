import { Router } from 'express';
import multer from 'multer';

import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { getCategoriesController } from '../modules/cars/useCases/getCategories';
import { importCategoryController } from '../modules/cars/useCases/importCategory';

const categoriesRoutes: Router = Router();

const multerOptions: multer.Options = {
  dest: './tmp',
};
const upload = multer(multerOptions);

categoriesRoutes.post('/', (request, response) => createCategoryController.handle(request, response));

categoriesRoutes.get('/', (request, response) => getCategoriesController.handle(request, response));

categoriesRoutes.post('/import', upload.single('file'), (request, response) => importCategoryController.handle(request, response));

export { categoriesRoutes };
