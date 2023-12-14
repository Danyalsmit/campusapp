import React from 'react';
import {AdminTableHeader} from "../../../Components/table/components/helper/index";
import AdminTable from '../../../Components/table/components/AdminTable';


function Table({ companies }) {
  console.log("companies",companies)
  return (
    <div className="p-8">
      <div className="bg-white rounded shadow-md">
        <div className="overflow-x-auto">
        <AdminTable
              tbodyData={companies}
              theadData={AdminTableHeader}
            />
          
        </div>
      </div>
    </div>
  );
}

export default Table;
