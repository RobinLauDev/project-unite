  //Set value in local state and reset error message
  export const setLocalStateValueAndRemoveError = ( setStateFn, inputName, value, inputType ) => {
    const inputTypesSetStates = {
        Tags: function(){
            setStateFn((prevState) => {
                //Check if clicked tag is already in state array and then add or remove it
                if (!prevState[inputName]["value"].includes(value)){                                     
                    return {
                        ...prevState,
                        [inputName]: {
                            ...prevState[inputName],
                            value: [...prevState[inputName]["value"], value],
                            error: "",
                        }
                    };
                }
                
                //Create new array without the clicked value and set state with it
                const arrayWithoutTargetValue= prevState[inputName]["value"].filter(item=>item !== value)
                
                return {
                    ...prevState,
                    [inputName]: {
                        ...prevState[inputName],
                        value: arrayWithoutTargetValue,
                        error: "",
                    }
                };
            });
        },
        Textfield: function(){
            setStateFn((prevState) => {
                return {
                    ...prevState,
                    [inputName]: {
                        ...prevState[inputName],
                        value: value,
                        error: "",
                    },
                };
            });
        },
        Radio: function(){
            setStateFn((prevState) => {
                return {
                    ...prevState,
                    [inputName]: {
                        ...prevState[inputName],
                        value: [value],
                        error: "",
                    },
                };
            });
        },
    }

    inputTypesSetStates[inputType]()
}