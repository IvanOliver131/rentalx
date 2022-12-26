/* eslint-disable prettier/prettier */
import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../../interfaces/ICategoriesRepository";

class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.list();

    return categories;
  }
}

export { ListCategoriesUseCase };
