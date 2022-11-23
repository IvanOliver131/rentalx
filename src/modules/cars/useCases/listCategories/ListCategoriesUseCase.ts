/* eslint-disable prettier/prettier */
import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../../interfaces/ICategoriesRepository";

class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute(): Category[] {
    const categories = this.categoriesRepository.list();

    return categories;
  }
}

export { ListCategoriesUseCase };
