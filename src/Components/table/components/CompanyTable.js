import React from "react";
import TableWrapper from "../TableWrapper";

function CompanyTable({ theadData,tbodyData }) {
  return(
    <TableWrapper>
      <thead className="bg-black text-white border " >
        {theadData.map((item) => {
          return <th className="px-4 py-2 text-left">{item}</th>;
          
        })}
      </thead>

      <tbody>
                {tbodyData?.map((job, index) => (
                  <tr key={index} className="bg-white text-black border-t">
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">company</td>
                    <td className="px-4 py-2">{job?.Education}</td>
                    <td className="px-4 py-2">{job?.JobCategory}</td>
                    <td className="px-4 py-2">{job?.Experience}</td>
                    <td className="px-4 py-2">Posted</td>
                  </tr>
                ))}
              </tbody>
    </TableWrapper>
  );
}

export default CompanyTable