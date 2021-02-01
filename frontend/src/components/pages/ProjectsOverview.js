import React, { useState, useEffect, useRef, useContext } from "react";
import {
  DisplayedProjectsContextProvider,
  DisplayedProjectsContext,
} from "../../contextReducers/displayedProjectsContext";
import { SearchFilter } from "../organisms/SearchFilter";
import { ProjectCont } from "../organisms/projectsList";
import { getDisplayedItems, getPagesAmount } from "../../utils/pagination";
import { FilterTags } from "../molecules/FilterTags";
import { Tag } from "../atoms/Tag";

const { REACT_APP_API_URL } = process.env;

function ProjectsPage() {
  const [selectedTags, setselectedTags] = useState([]);
  const [allSuggestedItems, setallProjects] = useState([]);
  const [filteredProjects, setfilteredProjects] = useState([]);
  const [hoveredTag, sethoveredTag] = useState("");

  //ALL SKILLS FROM PROJECTS___________________________________________________________________________
  const [allSkills, setallSkills] = useState([]);

  //Paginanation and the amount and current projects
  const {
    projectsPerPage,
    selectedStep,
    setamountAllFilteredProjects,
    setpagesAmount,
    setselectedStep,
  } = useContext(DisplayedProjectsContext);

  //Fetch all projects en set pagination en project objecten array states
  useEffect(() => {
    fetch(`${REACT_APP_API_URL}/projects/`)
      .then((response) => response.json())
      .then((data) => {
        setamountAllFilteredProjects(data.length);
        setallProjects(data);

        //Set array of skills
        setallSkills(projectsToAllSkills(data));
      });
  }, []);

  const projectsToAllSkills = (data) => {
    //Set all skills for searchfilter
    const allSkills = data.reduce((acc, item) => {
      return [
        ...acc,
        //Filter the item values for if they are already included in acc array so we dont get multiple of the same skills
        ...Object.values(item.skills).filter((item) =>
          acc.includes(item) ? false : true
        ),
      ];
    }, []);

    return allSkills;
  };

  //Hook bij verandring selectedTags
  //Push alle projecten die dezelfde skills bezitten als TagArray in filterProjects Array
  //Loop door projecten
  useEffect(() => {
    let $filteredProjects = [];

    const setProjectPageStates = (array, projectsPerPage, selectedStep) => {
      setpagesAmount(getPagesAmount(array, projectsPerPage));
      setamountAllFilteredProjects(array.length);
      setfilteredProjects(
        getDisplayedItems(array, projectsPerPage, selectedStep)
      );
    };

    //Check of er selectedTags zijn en aan de hand daarvan worden er een projectsPerPage aantal projecten
    if (Array.isArray(selectedTags) && !selectedTags.length) {
      setProjectPageStates(allSuggestedItems, projectsPerPage, selectedStep);
      return;
    }

    //Indien wel filters zijn geselecteerd, vergelijk dan
    for (const item in allSuggestedItems) {
      for (const skillItem in allSuggestedItems[item]["skills"]) {
        if (
          selectedTags.includes(allSuggestedItems[item]["skills"][skillItem])
        ) {
          $filteredProjects.push(allSuggestedItems[item]);
          break;
        }
      }
    }
    setProjectPageStates($filteredProjects, projectsPerPage, selectedStep);
  }, [selectedTags, allSuggestedItems, selectedStep]);

  useEffect(() => {
    //Set currentpage to 1 at every change in search results
    setselectedStep(1);
  }, [selectedTags]);

  const removeAddTagFromSelection = (e, setState) => {
    const value = e.target.value || e.target.getAttribute("value");

    const removeFromArray = (value) => {
      setState((prev) => {
         //Check if clicked tag is already in state array and then add or remove it
         if (!prev.includes(value)){                    
            return [...prev, value]
        }

        //Create new array without the clicked value and set state with it
        const arrayWithoutTargetValue = prev.filter((item) => item !== value);
        return arrayWithoutTargetValue;
      });
    };
    removeFromArray(value);
  };

  return (
    <div className="projectspage">
      {/* Feed array of searchable skills and selected skills + set */}
      <SearchFilter
        allSuggestedItems={allSkills}
        selectedTags={selectedTags}
        setselectedTags={setselectedTags}
        hoveredTag={hoveredTag}
        autoCompleteClickHandler={(e)=>removeAddTagFromSelection(e, setselectedTags)}
      >
        <FilterTags
          selectedTags={selectedTags}
          setselectedTags={setselectedTags}
          inputName="skills"
          inputType="Tags"
          tagClickHandler={(e) => removeAddTagFromSelection(e, setselectedTags)}
        >
          {hoveredTag !== undefined && !hoveredTag == "" && (
            <Tag style="smallDottedTag" item={`${hoveredTag} +`} />
          )}
        </FilterTags>
      </SearchFilter>
      <ProjectCont
        selectedTags={selectedTags}
        setselectedTags={setselectedTags}
        filteredProjects={filteredProjects}
        sethoveredTag={sethoveredTag}
      />
    </div>
  );
}

export const ProjectsOverview = () => {
  return (
    <DisplayedProjectsContextProvider>
      <ProjectsPage />
    </DisplayedProjectsContextProvider>
  );
};
