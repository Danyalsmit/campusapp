import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Layout from "../../../layout/Layout";
import Button from "../../../Components/button/Button";
import Input from "../../../Components/input/Input";
import Select from "../../../Components/select/Select";

function Jobpost() {
  const [jobTitle, setJobTitle] = useState("");
  const [experience, setExperience] = useState("");
  const [education, setEducation] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();
  const jobid = JSON.parse(localStorage.getItem("UserId"));

  const jobSubmit = () => {
    const newjob = {
      userId: jobid,
      JobCategory: jobTitle,
      Experience: experience,
      Education: education,
      StreetAddress: address,
    };

    const existingJobs = JSON.parse(localStorage.getItem("jobs")) || [];

    const updatedJobs = [...existingJobs, newjob];

    localStorage.setItem("jobs", JSON.stringify(updatedJobs));

    console.log("newjob", newjob);

    axios
      .post("https://fair-cyan-abalone-gown.cyclic.app/api/jobpost/job", newjob)
      .then((res) => {
        console.log("Job post successful!");
        console.log("Response data:", res.data);
        navigate("/postedjob");
      })
      .catch((error) => {
        console.log("Job post failed:", error);
      });
  };

  return (
    <>
      <Layout>
        <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">
                Job Post
              </h2>
            </div>
            <div className="mt-8 space-y-6">
              <div>
                <label
                  htmlFor="Job Title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Job Title
                </label>
                <div className="mt-1">
                  <Input
                    type={"text"}
                    name={"Job Title"}
                    id={"Job Title"}
                    autoComplete={"given-name"}
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    className={"py-2 px-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 focus:ring focus:ring-opacity-50 placeholder-gray-400 sm:text-sm"}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="Education"
                  className="block text-sm font-medium text-gray-700"
                >
                  Education
                </label>
                <div className="mt-1">
                  <Select
                    id={"Education"}
                    name={"Education"}
                    autoComplete={"country-name"}
                    value={education}
                    onChange={(e) => setEducation(e.target.value)}
                    className={"py-2 px-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 focus:ring focus:ring-opacity-50 placeholder-gray-400 sm:text-sm"}
                    >
                    <option></option>
                    <option>Matric</option>
                    <option>Enter</option>
                    <option>Graduations</option>
                    <option>Masters</option>"
                     
                  </Select>
                </div>
              </div>
              <div>
                <label
                  htmlFor="Experience"
                  className="block text-sm font-medium text-gray-700"
                >
                  Experience
                </label>
                <div className="mt-1">
                  <Select
                    id={"Experience"}
                    name={"Experience"}
                    autoComplete={"country-name"}
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    className={"py-2 px-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 focus:ring focus:ring-opacity-50 placeholder-gray-400 sm:text-sm"}
                  >
                    <option></option>
                    <option>Fresher</option>
                    <option>Junior</option>
                    <option>Senior</option>
                  </Select>
                </div>
              </div>
              <div>
                <label
                  htmlFor="Street Address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Street Address
                </label>
                <div className="mt-1">
                  <Input
                    type={"text"}
                    name={"Street Address"}
                    id={"Street Address"}
                    autoComplete={"street-address"}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className={"py-2 px-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 focus:ring focus:ring-opacity-50 placeholder-gray-400 sm:text-sm"}
                  />
                </div>
              </div>
              <div>
                <Button
                  onClick={jobSubmit}
                  className={
                    "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  }
                  value="Post"
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Jobpost;
