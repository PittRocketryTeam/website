import React from "react";
import {
    Image,
    Accordion
} from "react-bootstrap";
import ProjectMainDesc from "./assets/ProjectMainDesc";
import ProjectCard from "./ProjectCard";
import projects from "./assets/projects";
import "./assets/style_project.css";

function Projects() {
    const path = process.env.PUBLIC_URL + "/img/projects/"
    return (
        <div className="projects">
            <h1> Projects </h1>
            <div className="main">
                <Image
                    src={path + "main.jpg"}
                    className="main-pic"
                />
                <ProjectMainDesc />
            </div>
            <div>
                <Accordion defaultActiveKey="0">
                    {projects["projects"].map((value, index) => {
                        return (
                            <ProjectCard
                                key={index}
                                index={index}
                                attr={value}
                                basename={process.env.PUBLIC_URL}
                            />
                        )
                    })}
                </Accordion>
            </div>
        </div>
    )
}

export default Projects;
