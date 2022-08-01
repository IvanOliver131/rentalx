/* eslint-disable prettier/prettier */
import { ICategoriesRepository } from "../../interfaces/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

/**
 * [x] - Definir o tipo de retorno
 * [x] - Alterar o retorno de erro
 * [x] - Acessar o repositório
 * [x] - Retornar algo
 */
class CreateCategoryUseCase {
  // Devemos criar o private para termos acesso dentro do execute
  constructor(private categoriesRepository: ICategoriesRepository) { }

  execute({ name, description }: IRequest) {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Category Already Exists!");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
