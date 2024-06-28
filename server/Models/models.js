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

export async function loginUser(body) {
  const { email, password } = body;

  try {
    const client = await pool.connect();
    const loginUserQuery = await client.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );
    client.release();

    if (loginUserQuery.rows.length === 0) {
      throw new Error("User not found");
    }

    const user = loginUserQuery.rows[0];

    if (user.password !== password) {
      throw new Error("Invalid Password");
    }

    return user;
  } catch (error) {
    console.error("Error logging in user:", error);
    throw error;
  }
}
