import React from 'react'
import TableWrapper from '../TableWrapper';
function AdminTab({ theader,tbodie }) {
    return (
        <TableWrapper>
          <thead className="bg-black text-white " >
            {theader.map((item) => {
              return <th className="px-4 py-2 text-left">{item}</th>;
              
            })}
          </thead>
    
          <tbody>
              {tbodie.map((item, index) => (
                <tr key={index} className="bg-white text-black border-t" >
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{item.option}</td>
                  <td className="px-4 py-2">{item.name}</td>
                  <td className="px-4 py-2">{item.email}</td>
                  <td className="px-4 py-2">Applied</td>

                </tr>
              ))}
            </tbody>
        </TableWrapper>
      );
}

export default AdminTab