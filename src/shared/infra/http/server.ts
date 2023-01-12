import "reflect-metadata";

import express, { NextFunction, Request, Response } from "express";
// express-async-errors - Deve ficar depois do express
import "express-async-errors";
import swaggerUi from "swagger-ui-express";

import "../../container";

// colocar resolveJsonModule como true no tsconfig

import { AppError } from "@shared/errors/AppError";

import swaggerFile from "../../../swagger.json";
import { router } from "./routes";

const app = express();

// utilizamos isso para aceitar o JSON
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

app.listen(3333, () => console.log("Server is running in port 3333! 🔥🚀"));
