import React from "react";

export const TagsIterator = (props) => {
  return (
    <>
      {props.array.map((item) => {
        return (
            <>
                {props.renderFunction(item)}
            </>
        )
      })}
    </>
  );
};
