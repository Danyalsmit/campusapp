import React from 'react';
import {AdminTable} from "../../../Components/table/components/helper/index";
import AdminTab from '../../../Components/table/components/AdminTab';


function Dashboard({ student }) {
  return (
    <div className="p-8">
      <div className="bg-white rounded shadow-md">
        <div className="overflow-x-auto">
          
        <AdminTab
              tbodie={student}
              theader={AdminTable}
            />
            
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
