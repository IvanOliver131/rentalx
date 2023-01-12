import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "docker",
  password: "docker_password",
  database: "rentx",
  synchronize: false,
  // logging: true, // log
  entities: ["src/modules/**/entities/*.ts"], // falta criar
  // subscribers: [],
  migrations: ["src/database/migrations/*.ts"],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized succesfully! ✨");
  })
  .catch((error) => console.log(error));
