import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import Out2 from "./layout2/Out2";

export function Home() {
  const [jobs, setJobs] = useState([]);
  const [userCateg, setUserCateg] = useState();

  useEffect(() => {
    const id1 = JSON.parse(localStorage.getItem("UserId"));
    axios
      .get(`http://localhost:8000/api/users/login/${id1}`)
      .then((res) => {
        console.log("Fetch successful!");
        console.log("User data:", res.data.user[0].category);
        setUserCateg(res.data.user[0].category);
        // setJobs(res.data);
      })
      .catch((error) => {
        console.error("Fetch failed:", error);
      });
  }, []);

  console.log("userCateg", userCateg);

  return (
    <>
      <Out2>
        <Card category={userCateg} />
      </Out2>
    </>
  );
}
export default Home;