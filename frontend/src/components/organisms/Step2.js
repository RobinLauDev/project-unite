import React, { useState, useEffect } from "react";
import { InputElementWithDescription } from "../molecules/InputElementWithDescription";
import { ToggleButtons } from "../atoms/ToggleButtons";
import { FilterTagsLocation } from "../molecules/FilterTagsLocation";
import { useStepState } from "../../hooks/useStepState";
import { useValidateAndDispatch } from "../../hooks/useValidateAndDispatch";
import { motion } from "framer-motion";

export function Step2(props) {
  //Custom hook that returns a state object of input fields that are defined in the stepsInputStates object
  const [stepState, setstepState] = useStepState(props.name);

  //DISPATCH LOGIC___________________________________________________________________________
  useValidateAndDispatch(stepState, setstepState, props);

  //Locatie keuzes
  const locatieKeuzes = [
    "Bergen op Zoom",
    "Eindhoven",
    "Helmond",
    "Maastricht",
    "Nijmegen",
    "Rotterdam",
    "Sittard",
    "Den Bosch",
    "Tilburg",
    "Utrecht",
    "Venlo",
  ];
  const locatieKeuzesOverig = ["Online", "n.v.t"];
  //REWARDS
  const rewardsOptions = ["Experience", "Payment"];
  //PROEJCTTYPE
  const projectTypeOptions = ["Side project", "Fontys project"];

  return (
    <motion.div
    key={props.name}
    initial={{opacity: 0}}
    animate={{opacity:1}}
    exit={{opacity: 0}}
    transition={{
        ease: "easeInOut",
        duration: 0.3,
      }}>
      {stepState !== null && (
        <>
          <InputElementWithDescription description="Werklocaties voor dit project" error={stepState.location.error}>
            <FilterTagsLocation
              optionsArray={locatieKeuzesOverig}
              selectedTagsArray={stepState.location.value}
              setStateFn={setstepState}
              inputName="location"
              inputType={stepState.location.inputType}
            />

            <FilterTagsLocation
              optionsArray={locatieKeuzes}
              selectedTagsArray={stepState.location.value}
              setStateFn={setstepState}
              inputName="location"
              inputType={stepState.location.inputType}
              //   onClickHandler={handleTagClickIntoArrayState}
            />
          </InputElementWithDescription>

          <InputElementWithDescription description="Project type" error={stepState.type.error}>
            <ToggleButtons
              choiceArray={projectTypeOptions}
              selectedValueState={stepState.type.value}
              setStateFn={setstepState}
              inputName="type"
              inputType={stepState.rewards.inputType}
            />
          </InputElementWithDescription>

          <InputElementWithDescription description="Project rewards" error={stepState.rewards.error}>
            <ToggleButtons
              choiceArray={rewardsOptions}
              selectedValueState={stepState.rewards.value}
              setStateFn={setstepState}
              inputName="rewards"
              inputType={stepState.rewards.inputType}
            />
          </InputElementWithDescription>
        </>
      )}

      {/* {errorStates.location != "" && stepState.length == 0 && (
        <span>{errorStates.location}</span>
      )} */}
    </motion.div>

  );
}
