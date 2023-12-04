import React from 'react'
import Bar from "../bar/Bar"

function Out2({ children }) {
  return (
    
    <>
      <Bar/>
      
      <div className="content">
        {children}
      </div>
     
  </>
  )
}

export default Out2;