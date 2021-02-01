import React, { useState} from 'react'

export const DisplayedProjectsContext = React.createContext(null)

export const DisplayedProjectsContextProvider = props => {
    const [projectsPerPage, setprojectsPerPage] = useState(4)
    const [selectedStep, setselectedStep] = useState(1)
    const [amountAllFilteredProjects, setamountAllFilteredProjects] = useState(0)   
    const [pagesAmount, setpagesAmount] = useState([])   

	const contextValue = {
		projectsPerPage,
		setprojectsPerPage,
		selectedStep,
		setselectedStep,
		amountAllFilteredProjects,
		setamountAllFilteredProjects,
		pagesAmount,
		setpagesAmount
	}  


  return (
    <DisplayedProjectsContext.Provider value={contextValue}>
   		{props.children}
    </DisplayedProjectsContext.Provider>
  )
}

