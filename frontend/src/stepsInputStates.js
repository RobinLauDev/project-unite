import { Step1 } from "./components/organisms/Step1";
import { Step2 } from "./components/organisms/Step2";
import { Step3 } from "./components/organisms/Step3";
import { Submit } from "./components/organisms/Submit";

//These obects will get translated into useStates containing values, error messages and validation rules for every input in that step.
//The order of the validation rules in the array determine the order of error messages shown when there are multiple. IsEmpty should therefor always be the last rule
export const stepsInputStates = {
    Step1: {    
        component: Step1,
        description: "Description",
        inputs: {
            title: {
                value: "",
                error: "",
                inputType: "Textfield",
                validationRules: ["isEmpty"],        
            },
            projectBeschrijving: {
                value: "",
                error: "",
                inputType: "Textfield",
                validationRules: ["isEmpty"],        
            },
            takenBeschrijving: {
                value: "",
                error: "",
                inputType: "Textfield",
                validationRules: ["min5Characters", "isEmpty"],        
            }
        }
    },
    Step2: {    
        component: Step2,
        description: "Tags",
        inputs: {
            location: {
                value: [],
                error: "",
                inputType: "Tags",
                validationRules: ["isSelected"],            
            },
            type: {
                value: ["Side Project"],
                error: "",
                inputType: "Radio",
                validationRules: [],        
            },
            rewards: {
                value: ["Experience"],
                error: "",
                inputType: "Radio",
                validationRules: [],        
            }
        }
    },
    Step3: {    
        component: Step3,
        description: "Skills",
        inputs: {
            skills: {
                value: [],
                error: "",
                inputType: "Tags",
                validationRules: ["isSelected"],            
            }
        }
    },
    Submit: {    
        component: Submit,
        description: "Submit"
    }
}
