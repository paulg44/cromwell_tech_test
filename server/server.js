import express from "express";
import dotenv from "dotenv";
import pkg from "pg";
import cors from "cors";

import { userRoutes } from "./Routes/routes.js";

dotenv.config();

const { Pool } = pkg;

const app = express();

const PORT = process.env.REACT_APP_PORT;
const connectionString = process.env.REACT_APP_DB_STRING;

export const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

app.use(express.json());
app.use(cors());

app.use("/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
