import React, { useState, useEffect } from "react";
import { useStepState } from "../../hooks/useStepState";
import { useValidateAndDispatch } from "../../hooks/useValidateAndDispatch";
import { inputClickHandler } from "../../utils/states/inputClickHandler";
import { FilterTags } from "../molecules/FilterTags";
import { InputElementWithDescription } from "../molecules/InputElementWithDescription";
import { SearchFilter } from "./SearchFilter";
const { REACT_APP_API_URL } = process.env;

export function Step3(props) {
  //Custom hook that returns a state object of input fields that are defined in the stepsInputStates object
  const [stepState, setstepState] = useStepState(props.name);

  //DISPATCH LOGIC___________________________________________________________________________
  useValidateAndDispatch(stepState, setstepState, props);

  //FETCH ALL SKILLS FROM PROJECTS___________________________________________________________________________
  const [allSkills, setallSkills] = useState([]);

  //FETCH DATA FOR SKILLS
  useEffect(() => {
    fetch(`${REACT_APP_API_URL}/projects/`)
      .then((response) => response.json())
      .then((data) => {
        const allSkills = data.reduce((acc, item) => {
          return [
            ...acc,
            //Filter the item values for if they are already included in acc array so we dont get multiple of the same skills
            ...Object.values(item.skills).filter((item) =>
              acc.includes(item) ? false : true
            ),
          ];
        }, []);
        
        setallSkills(allSkills);
      });
  }, []);



  return (
    <>
    {stepState !== null && (
      <>
          <InputElementWithDescription
            description="Skills voor dit project"
            error={stepState.skills.error}>
        <SearchFilter
            allSuggestedItems={allSkills}
            selectedTags={stepState.skills.value}
            inputName="skills"
            inputType={stepState.skills.inputType}
            autoCompleteClickHandler={(e)=>inputClickHandler(e, setstepState, "skills", "Tags")}/>
            <FilterTags
                selectedTags={stepState.skills.value}
              setselectedTags={setstepState}
              inputName="skills"
              inputType={stepState.skills.inputType}
              tagClickHandler={(e)=>inputClickHandler(e, setstepState, "skills", "Tags")}/>
          </InputElementWithDescription>
      </>
    )}
    </>
  );
}
