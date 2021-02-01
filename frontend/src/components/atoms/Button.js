import React from "react";

export const Buttoon = ({value, onClick, className}) => {
  return (
    <button onClick={onClick} className={className}>
      <span>↽</span>
    </button>
  )
}

