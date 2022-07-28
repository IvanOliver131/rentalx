import { Request, Response, Router } from "express";
import { v4 as uuidV4 } from "uuid";

const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post("/categories", (request: Request, response: Response) => {
  const { name, description } = request.body;

  categories.push({
    name,
    description,
  });

  return response.status(201).json(categories);
});

export { categoriesRoutes };
