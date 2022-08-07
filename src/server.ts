import express from "express";

import { router } from "./routes";

const app = express();

// Utilizamos isso para aceitar o JSON
app.use(express.json());

app.use(router);

app.listen(3333, () => console.log("Server is running in port 3333! 🔥🚀"));
