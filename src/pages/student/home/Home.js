import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../card/Card";
import Out2 from "../layout2/Out2";

export function Home() {
  const [userCateg, setUserCateg] = useState();

  useEffect(() => {
    const id1 = JSON.parse(localStorage.getItem("UserId"));
    axios
      .get(`https://fair-cyan-abalone-gown.cyclic.app/api/users/login/${id1}`)
      .then((res) => {
        console.log("Fetch successful!");
        setUserCateg(res.data.user[0].category);
      })
      .catch((error) => {
        console.error("Fetch failed:", error);
      });
  }, []);


  return (
    <>
      <Out2>
        <Card category={userCateg} />
      </Out2>
    </>
  );
}
export default Home;
