import React from "react";
import "../../styles/Projects.css";
import ProjectList from "./ProjectList";
import Header from "../Header/Header";
import { Helmet } from "react-helmet";

export default function Projects() {
    return (
        <div className="container-projects">
            <Helmet>
                <title>904fleurs - Projets</title>
                <meta
                    name="description"
                    content="904fleurs est une agence créative de production de contenu visuel. Voici un aperçu de nos projets."
                />
                <meta property='og:image' content='../../assets/images/logo_gif.gif' />
            </Helmet>
            <Header />
            <div className="page-title">
                <h1>Projets</h1>
            </div>
            <ProjectList />
        </div>
    );
}