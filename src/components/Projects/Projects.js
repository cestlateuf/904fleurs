import React from "react";
import "../../styles/Projects.css";
import ProjectList from "./ProjectList";
import Header from "../Header/Header";

export default function Projects() {
    return (
        <div className="container-projects">
            <Header />
            <div className="page-title">
                <h1>Projets</h1>
            </div>
            <ProjectList />
        </div>
    );
}