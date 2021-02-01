import React from "react";

// Creating an array of react alements from an array with format [[componentname, component], [componentname, component]] and a props object to add to the elements
export const createReactElementsFromComponentsArray = ( componentsArray, props ) => {
  const elementsArray = componentsArray.map((item) => {
    const [name, component] = item;

    //Creating element and adding an extra "component name" prop
    const element = React.createElement(component, { ...props, name: name });

    return element;
  });

  return elementsArray;
}
