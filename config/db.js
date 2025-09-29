import { configDotenv } from "dotenv";
configDotenv();
import { Pool } from "pg";

const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: process.env.POSTGRES_PASSWORD,
  database: "test_db",
});

export default pool;
