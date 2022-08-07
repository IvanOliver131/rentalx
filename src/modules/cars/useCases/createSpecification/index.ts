import { SpecificationsRepository } from "../../repositories/SpecificationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationsRespository = new SpecificationsRepository();
const createSpecificationUseCase = new CreateSpecificationUseCase(
  specificationsRespository
);
const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase
);

export { createSpecificationController, createSpecificationUseCase };
