/* eslint-disable prettier/prettier */
import { ISpecificationsRepository } from "../../interfaces/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) { }

  execute({ name, description }: IRequest) {
    const specificationAlreadyExists =
      this.specificationsRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error("Specification Already Exists!");
    }

    this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
