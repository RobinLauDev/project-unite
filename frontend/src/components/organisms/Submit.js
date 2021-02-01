import React from "react";
import { useGlobalProjectContext } from "../../contextReducers/addProjectContext";
import { InputElementWithDescription } from "../molecules/InputElementWithDescription";

//
export function Submit() {
  const { addProjectState } = useGlobalProjectContext();

  const array = [];

  for (const [key, value] of Object.entries(addProjectState)) {
    array.push(<CheckDataComponent field={key} value={value} />);
  }

  return <div className="stepContSubmit">{array}</div>;
}

function CheckDataComponent({ field, value }) {
  return (
    <InputElementWithDescription description={field}>
      {Array.isArray(value) ? (
        Object.values(value).map((value) => (
          <span className={"submit-span"}>{value}</span>
        ))
      ) : (
        <div className="contentWrapper">{value}</div>
      )}
    </InputElementWithDescription>
  );
}
