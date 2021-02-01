import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import {
  AddProjectContextProvider,
  useGlobalProjectContext,
} from "../../contextReducers/addProjectContext";
import { StepsProgress } from "../organisms/StepsProgress";
import { SubmitButton } from "../atoms/SubmitButton";
import { stepsInputStates } from "../../stepsInputStates";
import { WizardButtons } from "../molecules/WizardButtons";
import { createReactElementsFromComponentsArray } from "../../utils/createReactElementsDynamically/createReactElementsFromComponentsArray";
import { AnimatePresence, motion } from "framer-motion";
import { Hr } from "../molecules/Hr";
import { Succes } from "../organisms/Succes";
const { REACT_APP_API_URL } = process.env;

const AddProjectWizardContextless = () => {
  //Index of current mounted wizard step
  const [selectedStep, setselectedStep] = useState(0);

  //This will trigger a transition to the next step when there are no errors after validating inputs from mounted step
  const [noErrors, setnoErrors] = useState(false);

  //Bool that triggers the validation function in the mounted step component after a click on the wizard next button
  const [triggerValidationClick, settriggerValidationClick] = useState(false);

  //Submit component loading indicator state
  const [loadingSubmit, setloadingSubmit] = useState(false);

  //Triggers wizard completion succes screen
  const [uploadComplete, setuploadComplete] = useState(false);

  //Gets triggered when noErrors gets changed from within the validation function
  useEffect(() => {
    //If the error object from the mounted step doesnt contain errors, after disptaching the input values to the global reducer, noErrors will be set to true and the next step will be mounted
    const checkErrorSetPage = () => {
      if (noErrors) {
        setselectedStep((prevState) => prevState + 1);
      }
    };
    checkErrorSetPage();

    return () => {
      setnoErrors(false);
    };
  }, [noErrors]);

  //DYNAMIC STEP ELEMENT CREATION ______________________________________________________
  //Shared propertie for dynamically created step components
  const stepProps = {
    triggerValidationClick: triggerValidationClick,
    settriggerValidationClick: settriggerValidationClick,
    noErrors: noErrors,
    setnoErrors: setnoErrors,
  };

  //Creating an array with the format [[componentname, component], [componentname, component]]
  const componentsArray = Object.keys(stepsInputStates).reduce(
    (acc, item) => [...acc, [item, stepsInputStates[item]["component"]]],
    []
  );

  //Create react elements from array and add props
  const stepElements = createReactElementsFromComponentsArray(
    componentsArray,
    stepProps
  );

  //WIZARD CURRENT AND TOTAL STEPS LOGIC_______________________________________________________
  //Count total steps for progress bar component
  const totalSteps = Object.keys(stepsInputStates).length;

  //   const [activePage, setActivePage] = useState(1)
  const handleStepButtonClick = (nextprev) => {
    if (nextprev == "next") {
      settriggerValidationClick(true);
      return;
    }
    setselectedStep((prevState) => prevState - 1);
  };

  //SUBMIT THE PROJECT INPUT VALUES FROM GLOBAL REDUCER_______________________________________________________
  //Get global reducer state with project values
  const { addProjectState } = useGlobalProjectContext();

  const submitForm = () => {
    //MongoDB expects objects, so check if a value in the object is an array and convert to object if so
    const convertArraysToObjects = (stateWithArrays) => {
      const addProjectStateObject = Object.keys(stateWithArrays).reduce(
        (acc, key) => {
          if (Array.isArray(stateWithArrays[key])) {
            return { ...acc, [key]: { ...stateWithArrays[key] } };
          }
          return { ...acc, [key]: stateWithArrays[key] };
        },
        {}
      );

      return addProjectStateObject;
    };

    const addProjectStateObject = convertArraysToObjects(addProjectState);

    //Set the loading indicator state
    setloadingSubmit(true);

    //Post global reducer state with project data
    axios
      .post(`${REACT_APP_API_URL}/projects/add`, addProjectStateObject)
      .then((res) => {
        console.log(res);

        //Not needed setTimeout to emulate some server response time for loading spinner to show
        setTimeout(() => {
          setselectedStep((prevState) => prevState + 1);
          setloadingSubmit(false);
          setuploadComplete(true);
        }, 1500);
      })
      .catch(function (error) {
        //Display error message from here
        console.log(error);
        setloadingSubmit(false);
      });
  };

  return (
    <Container className="pageContainer">
      <AnimatePresence>
        {!uploadComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            key={"1"}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              ease: "easeInOut",
              duration: 1.2,
              delay: 0.2,
            }}
          >
            <div className="progressCont">
              <StepsProgress
                stepNameArray={Object.keys(stepsInputStates)
                  .filter((item) =>
                    stepsInputStates[item].hasOwnProperty("inputs")
                  )
                  .map((item) => stepsInputStates[item].description)}
                selectedStep={selectedStep}
              />
            </div>
          </motion.div>
        )}

        {!uploadComplete && <Hr animated={true} key={"hr1"} />}

        {!uploadComplete && (
          <motion.div
            style={{ minHeight: 0, overflowY: "scroll", flex: 1 }}
            key={"3"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: {
                ease: "easeInOut",
                duration: 1.5,
                delay: 1.8,
            } }}
            exit={
              { opacity: 0,
                transition: { ease: "easeInOut", duration: 0.5 } 
                }}
          >
            <div className="stepCont">
              <AnimatePresence>{stepElements[selectedStep]}</AnimatePresence>
            </div>
          </motion.div>
        )}

        {!uploadComplete && <Hr animated={true} key={"hr2"} />}

        {!uploadComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            key={"4"}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              ease: "easeInOut",
              duration: 0.9,
              delay: 0.9,
            }}
          >
            <WizardButtons
              selectedStep={selectedStep}
              totalSteps={totalSteps - 1}
              handleBack={() => handleStepButtonClick("prev")}
              handleNext={() => handleStepButtonClick("next")}
              submitButton={() => (
                <SubmitButton onClick={submitForm} loading={loadingSubmit} />
              )}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {uploadComplete && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 2,
            delay: 1.4,
          }}
        >
          <Succes
            noErrors={noErrors}
            setnoErrors={setnoErrors}
            addProjectState={addProjectState}
          />
        </motion.div>
      )}
    </Container>
  );
};

export const AddProjectWizard = () => {
  return (
    <AddProjectContextProvider>
      <AddProjectWizardContextless />
    </AddProjectContextProvider>
  );
};

