import React from "react";
import ProjectItem from "../ProjectItem/ProjectItem";
import maboo from "./maboo.png";
import portfolio from "./portfolio.jpeg";
import budgetmanager from "./budgetmanager.jpeg";

const projects = [
    {
        title: "Maboo",
        description: "E-commerce app dedicated for recent parents",
        image: maboo,
    },
    {
        title: "Budgetmanager",
        description: "A solution for managing personnal expenses",
        image: budgetmanager,
    },
    {
        title: "Portfolio",
        description: "About myself and parts of my most recent achievements",
        image: portfolio,
    },
]

const Projects = React.memo(() => {
    return <div className="d-flex gap-5 justify-content-center">
        {projects.map((project, key) => <ProjectItem key={key} {...project} />)}
    </div>
})

export default Projects;