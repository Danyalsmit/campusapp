import React from "react";
import Layout from "./layout/Layout";

export function Comp() {
  return (
    <>
    <Layout>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <span className="text-3xl mb-8">Student Applieds Job</span>
        <img
          src="https://campus-app-1c4b8.web.app/static/media/notAvailable.849c1c5632b278367acb.jpg"
          alt="notAvailable"
          className="w-2/3  md:w-1/3  "
        />
      </div>
      </Layout>
    </>
  );
}
export default Comp;
