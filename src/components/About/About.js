import React from "react";
import "../../styles/About.css";
import Header from "../Header/Header";

export default function About() {
    return(
        <div className="container-about">
            <Header />
            <div className="page-title">
                <h1>À propos</h1>
            </div>
        </div>
    );
}