import React from "react";
import { AddProjectWizard } from "./components/pages/AddProjectWizard";
import { ProjectDetails } from "./components/pages/ProjectDetails";
import { ProjectsOverview } from "./components/pages/ProjectsOverview";


export const routeMap = [
    {
        component: <ProjectsOverview/>,
        url: "/",
        name: "Search Projects",
        isMenuItem: true,
        parent: "",
        hasNested: false,       
    },
    {
        component: <AddProjectWizard/>,
        url: "/add",
        name: "Add Unite projects",
        isMenuItem: true,
        parent: "",
        hasNested: false,
    },
    {
        component: <ProjectDetails/>,
        url: "/:_id",
        name: "Project details",
        isMenuItem: false,
        parent: "",
        hasNested: false,
    },
]