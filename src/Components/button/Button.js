import React from "react";

const Button = ({ className, type, value, onClick, disabled, ...props }) => {
  return (
    <button className={className} type={type} onClick={onClick} disabled={disabled} {...props}>
      {value}
    </button>
  );
};

export default Button;
