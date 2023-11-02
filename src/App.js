import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup"
import Login from "./pages/Login";
import Home from "./pages/Home";
import NoTFound from './pages/NotFound';


function App() {
  return (
    <>
      
      <Router>
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/*" element={<NoTFound/>} />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
