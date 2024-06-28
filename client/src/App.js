import "./App.css";
import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";

function App() {
  // New user registration function
  async function addNewUserRegistration(name, email, password) {
    const newUser = {
      name: name,
      email: email,
      password: password,
    };

    try {
      const response = await fetch("user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      if (response.ok) {
        console.log("Successfully added new user:", newUser);
      }
    } catch (error) {
      console.error("Error adding new user");
    }
  }

  // Log In user function
  async function loginUserToSystem(email, password) {
    const user = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch("/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (response.ok) {
        console.log("Successfully signed in as:", user);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Register registerUser={addNewUserRegistration} />}
        />
        <Route path="/login" element={<Login login={loginUserToSystem} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
