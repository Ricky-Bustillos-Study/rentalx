import { CategoriesRepository } from '../../repositories/CategoriesRepository';
import { GetCategoriesController } from './GetCategoriesController';
import { GetCategoriesUseCase } from './GetCategoriesUseCase';

const categoriesRepository = CategoriesRepository.getInstance();

const getCategoriesUseCase = new GetCategoriesUseCase(categoriesRepository);

const getCategoriesController = new GetCategoriesController(getCategoriesUseCase);

export { getCategoriesController };
