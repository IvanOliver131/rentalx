import express from "express";

const app = express();

// configurando o prettier e eslint
app.get("/", (request, response) => {
  return response.json({ message: "Hello World!" });
});

app.listen(3333, () => console.log("Server is running! 🔥🚀"));
