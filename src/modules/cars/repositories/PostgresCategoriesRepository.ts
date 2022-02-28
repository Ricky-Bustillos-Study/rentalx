import { Category } from '../models/Category';
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from './ICategoriesRepository';

export class PostgresCategoriesRepository implements ICategoriesRepository {
  findByName(name: string): Category {
    throw new Error('Method not implemented.');
  }
  getAll(): Category[] {
    throw new Error('Method not implemented.');
  }
  create({ description, name }: ICreateCategoryDTO): void {
    throw new Error('Method not implemented.');
  }
}
