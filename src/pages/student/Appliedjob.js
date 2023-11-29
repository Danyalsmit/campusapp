import Out2 from "../student/layout2/Out2";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Appliedjob() {
  const [userCateg, setUserCateg] = useState([]);
  console.log("userCateg",userCateg)


  useEffect(() => {
    const jobid = JSON.parse(localStorage.getItem("UserId"));

    axios
      .get(`https://fair-cyan-abalone-gown.cyclic.app/api/apply/apply/${jobid}`)
      .then((res) => {
        console.log("first,res",res)
        console.log("Fetch successful!");
        setUserCateg(res.data.user);

      })
      .catch((error) => {
        console.error("Fetch failed:", error);
      });
  }, []);

  return (
    <Out2>
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
                {userCateg.map((item, index) => (
                  <tr key={index} className="bg-white text-black border-t">
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">Company</td>
                    <td className="px-4 py-2">{item.education}</td>
                    <td className="px-4 py-2">{item.category}</td>
                    <td className="px-4 py-2">{item.experience}</td>
                    <td className="px-4 py-2">Applied</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Out2>
  );
}

export default Appliedjob;
