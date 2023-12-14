import React from 'react'

function Select({type,className,name,id,autoComplete,val,onChange,...props}) {
  return (
    <select type={type} className={className} name={name} id={id} autoComplete={autoComplete} val={val}  onChange={onChange} {...props}  />
       
  )
}

export default Select