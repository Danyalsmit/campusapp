import React, { useState, useEffect } from "react";
import axios from "axios";

function Card({ category }) {
  console.log("cardCategory", category);
  const [jobs, setJobs] = useState([]);


  useEffect(() => {
    axios
      .get("http://localhost:8000/api/jobpost/jobs")
      .then((res) => {
        console.log("Fetch successful!");
        console.log("Jobs data:", res.data);

        const data1 = res.data.jobs;
        const filteredJobs = data1.filter((elem) => {
          return elem.Experience === category;
        });

        setJobs(filteredJobs);
      })
      .catch((error) => {
        console.error("Fetch failed:", error);
      });
  }, [category]);
  console.log(jobs, "behtreenData");




  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/api/jobpost/jobs")
  //     .then((res) => {
  //       console.log("Fetch successful!");
  //       console.log("Jobs data:", res.data);

  //       const data1 = res.data.jobs;
  //       data1.map((elem) => {
  //         console.log(elem.Experience, category);
  //         if (elem.Experience == "Junior") {
  //           setJobs((prevJobs) => [...prevJobs, elem]);
  //         } else if (elem.Experience == "Fresher") {
  //           setJobs((prevJobs) => [...prevJobs, elem]);
  //         } else if (elem.Experience == "Senior") {
  //           setJobs((prevJobs) => [...prevJobs, elem]);
  //         } else {
  //           console.log("errfilter");
  //         }
  //       });
  //     })
  //     .catch((error) => {
  //       console.error("Fetch failed:", error);
  //     });
  // }, [category]);
  // console.log(jobs, "behtreenData");

  const [isModalOpen, setModalOpen] = useState(false);


  const openModal = (jobs) => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {jobs.map((item) => {
        return (
          <div id="dk" className="flex  p-8">
            <div   className="flex ">
              
                <div className="bg-white rounded-lg shadow-md p-4">
                  <div className="mb-4">
                    <img
                      src="https://campus-app-1c4b8.web.app/static/media/ApplyImage.f714aab6dc389987e939.png"
                      alt=""
                      className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-xl font-bold text-center">Company:{item.Experience}</h3>
                  </div>
                  <div className="flex justify-center space-x-4">
                    <button
                      onClick={openModal}
                      className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 focus:outline-none focus:ring focus:border-gray-300"
                    >
                      Job Detail
                    </button>
                    <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
        );
      })}

      {isModalOpen && (
        <div className="fixed inset-1 flex items-center justify-center z-50">
          <div
            className="modal-background fixed inset-0 bg-black opacity-10"
            onClick={closeModal}
          ></div>
          <div className="modal-content bg-white p-8 rounded shadow-md">
            <h2 className="text-xl font-bold mb-4">Job Details</h2>
            <div className="jobDetail">
              <div className="underText">
                <span className="underIcon">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                  </svg>
                </span>
                <div className="underTwoText">
                  <div className="underIcon font-bold">
                    Company Name: <span>Raheem khanC</span>
                  </div>
                </div>
              </div>
              <div>
                <span>
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0-1.11.89 2 2 2h16c1.11 0-2-.9 2-2V8c0-1.11-.89-2-2-2zm-4 0h-4V4h4v2z"></path>
                  </svg>
                </span>
                <div className="underTwoText">
                  <div className="underIcon font-bold">
                    Job Category: <span>mhgv</span>{" "}
                  </div>
                </div>
              </div>
              <div className="underText">
                <span className="underIcon">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0-1.1.9-2 2 2h14c1.1 0-2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 6h-4v2h4v2h-4v2h4v2H9V7h6v2z"></path>
                  </svg>
                </span>
                <div className="underTwoText">
                  <div className="underIcon font-bold">
                    Required Experience: <span>hb</span>
                  </div>
                </div>
              </div>
              <div className="underText">
                <span className="underIcon">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
                  </svg>
                </span>
                <div className="underTwoText">
                  <div className="underIcon font-bold">
                    Address: <span>bjk</span>
                  </div>
                </div>
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
