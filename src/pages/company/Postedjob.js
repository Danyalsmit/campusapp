import React from "react";
import Layout from "./layout/Layout";

function Postedjob() {
  return (
    <>
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
              <tr className="bg-white text-black border-t">
                <td className="px-4 py-2">1</td>
                <td className="px-4 py-2">Raheem Khan</td>
                <td className="px-4 py-2">Matric</td>
                <td className="px-4 py-2">Hard Work</td>
                <td className="px-4 py-2">Fresher</td>
                <td className="px-4 py-2">Applied</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </Layout>

    </>
  );
}

export default Postedjob;
