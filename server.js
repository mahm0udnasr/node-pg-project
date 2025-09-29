import express from "express";
import pool from "./config/db.";

const app = express();
const port = 4001;

app.listen(port, () => {
  console.log(`server running on http:localhost:${port}`);
});
