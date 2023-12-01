import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "../pages/register/signup/Signup.js";
import Login from "../pages/register/login/Login.js";
import Home from "../pages/student/Home.js";
import NoTFound from "../pages/register/notfound/NotFound.js";
import Camp from "../pages/company/camp/Camp.js";
import Jobpost from "../pages/company/jobpost/Jobpost.js";
import Postedjob from "../pages/company/postedjob/Postedjob.js";
import Appliedjob from "../pages/student/Appliedjob.js";
import ProfileModal from "../Components/profile/Profile.js";
import Admin from "../pages/admin/admiin/Admin.js";

function Routess() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/jobpost" element={<Jobpost />} />
          <Route path="/postedjob" element={<Postedjob />} />

          <Route path="/camp" element={<Camp />} />
          <Route path="/profile" element={<ProfileModal />} />

          <Route path="/admin" element={<Admin />} />

          <Route path="/student" element={<Home />} />

          <Route path="/appliedjob" element={<Appliedjob />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/*" element={<NoTFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default Routess;
