import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Card({ category }) {
  const [jobs, setJobs] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://fair-cyan-abalone-gown.cyclic.app/api/jobpost/jobs")
      .then((res) => {
        console.log("Fetch successful!");

        const data = res.data.jobs;
        const filteredJobs = data.filter(
          (elem) => elem.Experience === category
        );
        setJobs(filteredJobs);
        const appliedJobsFromStorage = JSON.parse(localStorage.getItem("appliedJobs")) || [];
        setAppliedJobs(appliedJobsFromStorage);
      })
      .catch((error) => {
        console.error("Fetch failed:", error);
      });
  }, [category]);

  const handleApply = (item) => {
    const userId = JSON.parse(localStorage.getItem("UserId"));
    localStorage.setItem("jobId", JSON.stringify(item._id));
    
    const newAppliedJobs = [...appliedJobs, item._id];
    setAppliedJobs(newAppliedJobs);

    localStorage.setItem("appliedJobs", JSON.stringify(newAppliedJobs));


    const jobData = {
      userId: userId,
      id: item._id,
      category: item.JobCategory,
      education: item.Education,
      experience: item.Experience,
      streetAddress: item.StreetAddress,
    };

    axios
      .post("http://localhost:8000/api/apply/apply", jobData)
      .then((res) => {
        console.log("Applied successful!");
        navigate("/appliedjob");
      })
      .catch((error) => {
        console.log("applied failed:", error);
      });

    Swal.fire({
      title: "You have successfully applied for this job!",
      text: "Your application has been submitted.",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  const openModal = (job) => {
    setSelectedJob(job);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedJob(null);
    setModalOpen(false);
  };

  return (
    <>
      <div className="flex flex-wrap justify-around">
        {jobs.map((item, index) => {
          return (
            <div key={index} className="flex flex-col mb-4">
              <div className="bg-white rounded-lg shadow-md mt-8 p-4">
                <img
                  src="https://campus-app-1c4b8.web.app/static/media/ApplyImage.f714aab6dc389987e939.png"
                  alt=""
                  className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-center">
                  Experience: {item.Experience}
                </h3>
              </div>
              <div className="flex justify-center space-x-4 mt-2">
                <button
                  onClick={() => openModal(item)}
                  className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 focus:outline-none focus:ring focus:border-gray-300"
                >
                  Job Detail
                </button>

                <button
                onClick={() => handleApply(item)}
                className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                disabled={appliedJobs.includes(item._id)}
              >
                {appliedJobs.includes(item._id) ? "Applied" : "Apply"}
              </button>
              </div>
            </div>
          );
        })}
      </div>

      {isModalOpen && selectedJob && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="modal-background fixed inset-0 bg-black opacity-10"
            onClick={closeModal}
          ></div>
          <div className="modal-content bg-white p-8 rounded shadow-md">
            <h2 className="text-xl font-bold mb-4">Job Details</h2>
            <div className="jobDetail">
              <div className="underText">
                <span className="underIcon">Company Name:</span>
                <span className="underTwoText font-bold">
                  {selectedJob.JobCategory}
                </span>
              </div>
              <div className="underText">
                <span className="underIcon">Job Category:</span>
                <span className="underTwoText font-bold">
                  {selectedJob.JobCategory}
                </span>
              </div>
              <div className="underText">
                <span className="underIcon">Required Experience:</span>
                <span className="underTwoText font-bold">
                  {selectedJob.Experience}
                </span>
              </div>
              <div className="underText">
                <span className="underIcon">Address:</span>
                <span className="underTwoText font-bold">
                  {selectedJob.StreetAddress}
                </span>
              </div>
            </div>
            <button
              onClick={closeModal}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
