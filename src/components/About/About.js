import React from "react";
import "../../styles/About.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AboutContent from "./AboutContent";

export default function About() {
    return (
        <div className="container-about">
            <Header />
            <AboutContent />
            <Footer />
        </div>
    );
}