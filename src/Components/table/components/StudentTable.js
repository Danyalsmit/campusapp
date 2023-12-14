import React from "react";
import TableWrapper from "../TableWrapper";

function StudentTable({ theadData,tbodyData }) {
  return (
    <TableWrapper>
      <thead className="bg-black text-white border " >
        {theadData.map((item) => {
          return <th className="px-4 py-2 text-left">{item}</th>;
          
        })}
      </thead>

      <tbody>
                {tbodyData?.map((item, index) => (
                  <tr key={index} className="bg-white text-black border-t">
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">Company</td>
                    <td className="px-4 py-2">{item?.education}</td>
                    <td className="px-4 py-2">{item?.category}</td>
                    <td className="px-4 py-2">{item?.experience}</td>
                    <td className="px-4 py-2">Applied</td>
                  </tr>
                ))}
              </tbody>
    </TableWrapper>
  );
}

export default StudentTable;
