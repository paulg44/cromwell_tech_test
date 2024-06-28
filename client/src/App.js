import "./App.css";
import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";

function App() {
  async function addNewUserRegistration(name, email, password) {
    const newUser = {
      name: name,
      email: email,
      password: password,
    };
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Register registerUser={addNewUserRegistration} />}
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
