import React, { useEffect, useState } from "react";
import Layout from "../../../layout/Layout";
import axios from "axios";
import {StudentTableHeader} from "../../../Components/table/components/helper/index";
import CompanyTable from "../../../Components/table/components/CompanyTable";


function Postedjob() {
  const [jobData, setJobData] = useState([]);
  console.log(jobData,"jobDatajobDatavv")

  useEffect(() => {
    const jobid = JSON.parse(localStorage.getItem("UserId"));

    axios
      .get(`https://fair-cyan-abalone-gown.cyclic.app/api/jobpost/job/${jobid}`)
      .then((res) => {
        console.log("first,res",res)
        console.log("Fetch successful!");
        setJobData(res.data.user);

      })
      .catch((error) => {
        console.error("Fetch failed:", error);
      });
  }, []);


  return (
    <Layout>
      <div className="p-8">
        <div className="bg-white rounded shadow-md">
          <div className="overflow-x-auto">
          <CompanyTable
              tbodyData={jobData}
              theadData={StudentTableHeader}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Postedjob;
