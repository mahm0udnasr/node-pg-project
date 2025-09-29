import { Pool } from "pg";

const pool = new Pool({
  host: "db",
  port: 5432,
  user: "postgres",
  password: "",
  database: "test_db",
});

export default pool;
