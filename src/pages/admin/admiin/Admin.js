import React, { useState, useEffect } from "react";
import Table from "../table/Table";
import Dashboard from "../dashboard/Dashboard";
import Way from "../wayout/Wayout";
import axios from "axios";

function Admin() {
  const [userCateg, setUserCateg] = useState([]);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fair-cyan-abalone-gown.cyclic.app/api/users/admin`)
      .then((res) => {
        console.log("Fetch successful!");
        console.log("User data:", res.data.users);

        const use = res.data.users;

        const filteredCompanies = use.filter((elem) => {
          return elem.option === "Company";
        });

        setJobs(filteredCompanies);

        const filteredStudents = use.filter((elem) => {
          return elem.option === "Student";
        });

        setUserCateg(filteredStudents);
      })
      .catch((error) => {
        console.error("Fetch failed:", error);
      });
  }, []);

  return (
    <>
      <Way />
      <Dashboard student={userCateg} />
      
      <Table companies={jobs} />
      
    </>
  );
}

export default Admin;
