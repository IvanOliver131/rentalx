/* eslint-disable prettier/prettier */
import { ICategoriesRepository } from "../../interfaces/ICategoriesRepository";

class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) { }

  execute() {
    this.categoriesRepository.list();
  }
}

export { ListCategoriesUseCase };
