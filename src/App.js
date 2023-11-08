import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup"
import Login from "./pages/Login";
import Home from "./pages/Home";
import NoTFound from './pages/NotFound';
import Camp from "./pages/company/Camp.js"
import Jobpost from "./pages/company/Jobpost.js"
import Postedjob from "./pages/company/Postedjob"
import Appliedjob from "./pages/Appliedjob.js"
import Model from "./pages/Model.js"


function App() {
  return (
    <>
      
      <Router>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/jobpost" element={< Jobpost/>} />
        <Route path="/postedjob" element={< Postedjob/>} />

        <Route path="/camp" element={<Camp />} />

        <Route path="/student" element={<Home />} />
        <Route path="/model" element={<Model />} />

        


        <Route path="/appliedjob" element={<Appliedjob />} />


        <Route path="/signup" element={<Signup />} />
        <Route path="/*" element={<NoTFound/>} />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
