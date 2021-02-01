  //Returns error object with input name keys and messages values
 export const validateInputs = (stepState) => {
    const errorObject = {};

    const validationRules = {
      isEmpty: function (string, field) {
        if (string.length < 1) {
          return `${field} mag niet leeg zijn`;
        }
      },
      min5Characters: function (string, field) {
        if (string.length < 5) {
          return `${field} moet minstens vijf tekens bevatten`;
        }
      },
      min5Characters: function (string, field) {
        if (string.length < 5) {
          return `${field} moet minstens vijf tekens bevatten`;
        }
      },
      isSelected: function (string, field) {
        if (string.length < 1) {
          return `selecteer minstens één ${field}`;
        }
      },
    };

    //Loop functie over fields die per field kijkt welke validationrule functies moeten worden uitgevoerd op de value
    const loopFields = (stepState, errorObject) => {
      for (const key in stepState) {
        //loop door array van validation rules en voer nodige functie uit op de value van de field key
        stepState[key].validationRules.forEach((rule) => {
          const errorMessage = validationRules[rule](stepState[key].value, key);

          //if weghalen want wanneer validation false i-s dan returned die niet
          if (typeof errorMessage !== "undefined") {
            errorObject = { ...errorObject, [key]: errorMessage };
          }
        });
      }

      return errorObject;
    };
    
    return loopFields(stepState, errorObject);
  };