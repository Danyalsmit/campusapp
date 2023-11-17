import React, { useState, useEffect } from "react";
import axios from "axios";

function Card({ category }) {
  const [jobs, setJobs] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/jobpost/jobs")
      .then((res) => {
        console.log("Fetch successful!");

        const data = res.data.jobs;
        const filteredJobs = data.filter(
          (elem) => elem.Experience === category
        );
        setJobs(filteredJobs);
      })
      .catch((error) => {
        console.error("Fetch failed:", error);
      });
  }, [category]);

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
        {jobs.map((item, index) => (
          <div key={index} className="flex flex-col mb-4">
            <div className="bg-white rounded-lg shadow-md p-4">
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
               
                className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              >
                Apply
              </button>
            </div>
          </div>
        ))}
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
