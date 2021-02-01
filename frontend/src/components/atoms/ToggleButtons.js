import React from "react";
import { inputClickHandler } from "../../utils/states/inputClickHandler";

//
export function ToggleButtons({choiceArray,selectedValueState,setStateFn,inputName,inputType}) {

  const radioArray = choiceArray.map((item) => {
    return (
      <div className={"radio-item radio"} value={item} onClick={(e) => inputClickHandler(e, setStateFn, inputName, inputType)}>
        <span  value={item} className="outerRadioCircle">
          {item == selectedValueState ? (
            <span value={item} class="innerRadioCircle"></span>
          ) : null}
        </span>
        <div value={item} id={item}>{item}</div>
      </div>
    );
  });

  return <div className="radio-container">{radioArray}</div>;
}

