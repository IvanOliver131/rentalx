import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "docker",
  password: "docker_password",
  database: "rentx",
  synchronize: false,
  // logging: true,
  entities: ["src/models/*.ts"],
  // subscribers: [],
  migrations: ["src/database/migrations/*.ts"],
});
