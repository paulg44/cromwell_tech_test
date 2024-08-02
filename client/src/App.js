import "./App.css";
import { React, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import dotenv from "dotenv";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Landing from "./Pages/Landing/Landing";
import Homepage from "./Pages/Homepage/Homepage";
import Navbar from "./Components/Navbar";

// dotenv.config();

function App() {
  // const [userName, setUserName] = useState("");

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
