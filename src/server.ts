import express from "express";
import swaggerUi from "swagger-ui-express";

import { router } from "./routes";
// colocar resolveJsonModule como true no tsconfig
import swaggerFile from "./swagger.json";

const app = express();

// Utilizamos isso para aceitar o JSON
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.listen(3333, () => console.log("Server is running in port 3333! 🔥🚀"));
