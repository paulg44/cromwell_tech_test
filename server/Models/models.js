import { pool } from "../server.js";

export async function addUser(body) {
  const { name, email, password } = body;

  try {
    const client = await pool.connect();
    const addNewUserQuery = await client.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3)",
      [name, email, password]
    );
    client.release();
    return addNewUserQuery;
  } catch (error) {
    console.error("Error adding new user:", error);
    throw error;
  }
}
