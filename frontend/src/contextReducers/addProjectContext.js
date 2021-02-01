import React, { useContext, useReducer} from 'react'

const projectData = {
    title: "fsdfsdfsdf",
    location: ["Bergen op Zoom"],
    skills: ["Frontend development"],
    type: ["Side project"],
    rewards: ["Experience"],
    projectBeschrijving: "fsdfsdfsdf",
    takenBeschrijving: "fsdfsdfsdf"
  } 
  
const addProjectWizardReducer = (firstState, action) => {
    switch(action.step){
      case "Step1": 
        return { 
          ...firstState,
          title: action.payload.title.value,
          projectBeschrijving: action.payload.projectBeschrijving.value,
          takenBeschrijving: action.payload.takenBeschrijving.value
        }
      case "Step2": 
        return { 
          ...firstState,
          location: action.payload.location.value,
          type: action.payload.type.value,
          rewards: action.payload.rewards.value 
        }
      case "Step3": 
        return { 
          ...firstState,
          skills: action.payload.skills.value
        }
      default:
        throw new Error();
    }
  }

const AddProjectContext = React.createContext()

const AddProjectContextProvider = ({children}) => {
  const [addProjectState, addProjectDispatch] = useReducer(addProjectWizardReducer, projectData)
  
  return (
    <AddProjectContext.Provider value={{addProjectState, addProjectDispatch}}>
      {children}
    </AddProjectContext.Provider>
  )
}

const useGlobalProjectContext = () => {
      return useContext(AddProjectContext)
} 

export { AddProjectContextProvider, useGlobalProjectContext }