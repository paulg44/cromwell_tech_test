import "./App.css";
import { React, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Landing from "./Pages/Landing/Landing";
import Homepage from "./Pages/Homepage/Homepage";
import Navbar from "./Components/Navbar";

function App() {
  const [userId, setUserId] = useState(null);
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
      const response = await fetch("user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (response.ok) {
        const userData = await response.json();
        setUserId(userData.id);
        console.log("Successfully signed in as:", user);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  }
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/register"
          element={<Register registerUser={addNewUserRegistration} />}
        />
        <Route path="/login" element={<Login login={loginUserToSystem} />} />
        <Route path="/landing" element={<Landing userId={userId} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
