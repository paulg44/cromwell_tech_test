import * as userModel from "../Models/models.js";

export async function addNewUserController(req, res) {
  try {
    const data = req.body;
    const addNewUser = await userModel.addUser(data);
    console.log(`Success, payload ${addNewUser.rows}`);
    res.json(addNewUser.rows).status(200);
  } catch (error) {
    res.status(500).json({ error: "Add new user failed" });
  }
}

export async function loginUserController(req, res) {
  try {
    const data = req.body;
    const user = await userModel.loginUser(data);
    console.log(`Success logging in as ${user.rows}`);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Error signing in" });
  }
}
