import React from "react";
import "../../styles/Projects.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ProjectGrid from "./ProjectGrid";
import { Helmet } from "react-helmet";

export default function Projects() {
    return (
        <div className="container-projects">
            <Header />
            <ProjectGrid />
            <Footer />
        </div>
    );
}