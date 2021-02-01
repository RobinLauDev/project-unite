//HANDLE INPUT CHANGES AND SETSTATES________________________________________________________
import { setLocalStateValueAndRemoveError } from "./setLocalStateValueAndRemoveError";

//Sets input and error state values on change
export const inputClickHandler = (e, setStateFn, inputName, inputType) => {
  const value = e.target.value !== 0 && e.target.value !== undefined
      ? e.target.value
      : e.target.getAttribute("value");

  //Set value state and reset error
  setLocalStateValueAndRemoveError(setStateFn, inputName, value, inputType);
};
