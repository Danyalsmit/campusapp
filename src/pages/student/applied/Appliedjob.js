import Out2 from "../layout2/Out2";
import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentTable from "../../../Components/table/components/StudentTable";
import {StudentTableHeader} from "../../../Components/table/components/helper/index";


function Appliedjob() {
  const [userCateg, setUserCateg] = useState([]);
  console.log("userCateg", userCateg);

  useEffect(() => {
    const jobid = JSON.parse(localStorage.getItem("UserId"));

    axios
      .get(`https://fair-cyan-abalone-gown.cyclic.app/api/apply/apply/${jobid}`)
      .then((res) => {
        console.log("first,res", res);
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
            <StudentTable
              tbodyData={userCateg}
              theadData={StudentTableHeader}
            />
          </div>
        </div>
      </div>
    </Out2>
  );
}

export default Appliedjob;
