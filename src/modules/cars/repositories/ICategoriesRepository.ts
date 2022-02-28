import { Category } from '../models/Category';

export interface ICreateCategoryDTO {
  name: string;
  description: string;
}

export interface ICategoriesRepository {
  findByName(name: string): Category;
  getAll(): Category[];
  create(category: ICreateCategoryDTO): void;
}
