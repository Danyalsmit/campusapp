import React from 'react'

function Input({type,className,name,id,autoComplete,value,onChange,...props}) {
  return (
    <input type={type} className={className} name={name} id={id} autoComplete={autoComplete}  onChange={onChange} {...props} />
  )
}

export default Input