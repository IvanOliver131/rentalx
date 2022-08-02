/* eslint-disable prettier/prettier */
import { ICategoriesRepository } from "../../interfaces/ICategoriesRepository";
import { Category } from "../../model/Category";

class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) { }

  execute(): Category[] {
    const categories = this.categoriesRepository.list();

    return categories;
  }
}

export { ListCategoriesUseCase };
