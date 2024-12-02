import React from "react";
import "../../styles/ProjectList.css";
import projects from "../../projects.json";

export default function ProjectList() {
    return (
        <div className="projects-list">
            {projects.map((project, index) => (
                <div className="project-item" key={index}>
                    <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
                    <span className="project-name">
                        <a href={project.url} style={{textDecoration:"none"}} target="_blank" rel="noreferrer">
                            {project.title}
                        </a>
                    </span>
                </div>
            ))}
        </div>
    );
}