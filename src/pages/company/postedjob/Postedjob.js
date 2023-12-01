import React, { useEffect, useState } from "react";
import Layout from "../../../layout/Layout";

function Postedjob() {
  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    // Retrieve all jobs from localStorage
    const storedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
    setJobData(storedJobs);
  }, []);

  return (
    <Layout>
      <div className="p-8">
        <div className="bg-white rounded shadow-md">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-black text-white">
                <tr>
                  <th className="px-4 py-2 text-left">#</th>
                  <th className="px-4 py-2 text-left">Company Name</th>
                  <th className="px-4 py-2 text-left">Education</th>
                  <th className="px-4 py-2 text-left">Job Category</th>
                  <th className="px-4 py-2 text-left">Experience</th>
                  <th className="px-4 py-2 text-left"></th>
                </tr>
              </thead>
              <tbody>
                {jobData.map((job, index) => (
                  <tr key={index} className="bg-white text-black border-t">
                    <td className="px-4 py-2">{index + 1}</td>
                    {/* Display job details in respective columns */}
                    <td className="px-4 py-2">company</td>
                    <td className="px-4 py-2">{job.Education}</td>
                    <td className="px-4 py-2">{job.JobCategory}</td>
                    <td className="px-4 py-2">{job.Experience}</td>
                    <td className="px-4 py-2">Posted</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Postedjob;
