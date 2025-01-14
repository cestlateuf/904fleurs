import React from "react";
import { Link } from "react-router-dom";
import "../../styles/404.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import logo from "../../assets/images/404.svg";

export default function NotFound() {
    return (
        <div className="container-404">
            <Header />
            <div className="logo">
                <img src={logo} alt="404" className="logo" />
            </div>
            <div className="message-container">
                <h2 className="message">La page que vous cherchez n'existe pas.</h2>
            </div>
            <Footer />
        </div>
    );
}