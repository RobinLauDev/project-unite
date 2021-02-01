import React from "react";
import { useStepState } from "../../hooks/useStepState";
import { InputElementWithDescription } from "../molecules/InputElementWithDescription";
import { useValidateAndDispatch } from "../../hooks/useValidateAndDispatch";
import { inputClickHandler } from "../../utils/states/inputClickHandler";
import { motion } from "framer-motion";

export function Step1(props) {
  //STATE LOGIC___________________________________________________________________________
  //Custom hook that returns a state object of input fields that are defined in the stepsInputStates object
  const [stepState, setstepState] = useStepState(props.name);

  //DISPATCH LOGIC___________________________________________________________________________
  useValidateAndDispatch(stepState, setstepState, props);

  return (
    <motion.div
    key={props.name}
    initial={{opacity: 0}}
    animate={{opacity:1}}
    exit={{opacity: 0}}
    transition={{
        ease: "easeInOut",
        duration: 0.3
      }}>
      {stepState !== null && (
        <>
          <InputElementWithDescription
            description="Project title"
            // noHr={true}
            error={stepState.title.error}
          >
            <div className="input">
              <input
                type="text"
                onChange={(e) =>
                  inputClickHandler(e, setstepState, "title", "Textfield")
                }
                value={stepState.title.value}
              />
            </div>
          </InputElementWithDescription>

          <InputElementWithDescription
            description="Project beschrijving"
            // noHr={true}
            error={stepState.projectBeschrijving.error}
          >
            <div className="input">
              <input
                type="text"
                onChange={(e) =>
                    inputClickHandler(e, setstepState, "projectBeschrijving", "Textfield")
                  }                
                value={stepState.projectBeschrijving.value}
              />
            </div>
          </InputElementWithDescription>

          <InputElementWithDescription
            description="Taken beschrijving"
            // noHr={true}
            error={stepState.takenBeschrijving.error}
          >
            <div className="input">
              <input
                type="text"
                onChange={(e) =>
                    inputClickHandler(e, setstepState, "takenBeschrijving", "Textfield")
                  }                
                value={stepState.takenBeschrijving.value}
              />
            </div>
          </InputElementWithDescription>
        </>
      )}
    </motion.div>
  );
}
