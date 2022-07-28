import express from "express";

const app = express();

// Utilizamos isso para aceitar o JSON
app.use(express.json());

app.listen(3333, () => console.log("Server is running in port 3333! 🔥🚀"));
