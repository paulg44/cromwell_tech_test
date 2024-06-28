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
