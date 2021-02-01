import React from "react";

export const Tag = ({ item, color, style, tagHoverable, onClick, onMouseEnter, onMouseLeave }) => {
  return (
    <>
      <span
        value={item}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={`${style} ${color} ${tagHoverable}`}
        key={item}
      >
        {item}
      </span>
    </>
  );
};
