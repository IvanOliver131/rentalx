import express from "express";
import swaggerUi from "swagger-ui-express";

import { AppDataSource } from "./database/data-source";
import { router } from "./routes";
// colocar resolveJsonModule como true no tsconfig
import swaggerFile from "./swagger.json";

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized succesfully! ✨");
  })
  .catch((error) => console.log(error));

const app = express();

// utilizamos isso para aceitar o JSON
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

// Importamos as rotas
app.use(router);

app.listen(3333, () => console.log("Server is running in port 3333! 🔥🚀"));
