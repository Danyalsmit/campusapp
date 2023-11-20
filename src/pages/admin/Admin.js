import React, { useState, useEffect } from "react";
import Table from "./Table";
import Dashboard from "./Dashboard";
import Way from "./Wayout";
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

  
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/api/jobpost/jobs")
  //     .then((res) => {
  //       console.log("Fetch successful!");
  //       console.log("Jobs data:", res.data);

  //       const data1 = res.data.jobs;

  //       setJobs(data1);
  //     })
  //     .catch((error) => {
  //       console.error("Fetch failed:", error);
  //     });
  // }, []);

  return (
    <>
      <Way />
      <Table companies={jobs} />
      <Dashboard student={userCateg} />
    </>
  );
}

export default Admin;
