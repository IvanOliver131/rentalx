import { AppError } from "../../../../errors/AppError";
import { CategoriesRepositoryInMemory } from "../../repositories/in-memory/CategoriesRepositoryInMemory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

describe("Create category - Use Case", () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(
      categoriesRepositoryInMemory
    );
  });

  it("should be able to create a new category", async () => {
    const category = {
      name: "Category Test",
      description: "Category description Test",
    };

    await createCategoryUseCase.execute(category);

    const categoryCreated = await categoriesRepositoryInMemory.findByName(
      category.name
    );

    expect(categoryCreated).toHaveProperty("id");
    expect(categoryCreated).toHaveProperty("description");
    expect(categoryCreated).toHaveProperty("name");
  });

  it("should not be able to create a new category with name exists", async () => {
    expect(async () => {
      const category = {
        name: "Category Test",
        description: "Category description Test",
      };

      // Crio a primeira vez
      await createCategoryUseCase.execute(category);
      // A segunda deve retornar erro
      await createCategoryUseCase.execute(category);
    }).rejects.toBeInstanceOf(AppError);
  });

  // Testes para exemplo
  // it("I wait that 2 + 2 to be 4", () => {
  //   const soma = 2 + 2;
  //   const resultado = 4;
  //   expect(soma).toBe(resultado);
  // });
  // it("I wait that 2 + 2 not to be 5", () => {
  //   const soma = 2 + 2;
  //   const resultado = 5;
  //   expect(soma).not.toBe(resultado);
  // });
});
