import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { DisplayedProjectsContext } from "../../contextReducers/displayedProjectsContext";
import { Project } from "../molecules/Project";
import { Pagination } from "../molecules/Pagination";

export function ProjectCont(props) {
  const projectElementArray = [];
  const {
    amountAllFilteredProjects,
    pagesAmount,
    setselectedStep,
    selectedStep,
  } = useContext(DisplayedProjectsContext);

  for (const item of props.filteredProjects) {
    projectElementArray.push(
      <Project
        project={item}
        key={item}
        sethoveredTag={props.sethoveredTag}
        setselectedTags={props.setselectedTags}
        selectedTags={props.selectedTags}
      />
    );
  }

  return (
    <Container className="projectCont">
      <div className="pageInfo">
        {Array.isArray(props.selectedTags) && (
          <h5>
            {!props.selectedTags.length && <span>All </span>}
            {amountAllFilteredProjects}
            {amountAllFilteredProjects == 1 ? (
              <span> Project</span>
            ) : (
              <span> Projects</span>
            )}
          </h5>
        )}
        <Pagination
          pagesAmount={pagesAmount}
          setselectedStep={setselectedStep}
          selectedStep={selectedStep}
        />
      </div>
      <hr />
      {projectElementArray}
    </Container>
  );
}
