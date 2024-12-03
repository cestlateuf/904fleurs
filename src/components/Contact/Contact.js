import React, {useState} from "react";
import "../../styles/Contact.css";
import video from "../../assets/videos/contact_video.mp4";
import logo from "../../assets/images/logo_904fleurs.gif";
import ContactForm from "./ContactForm";
import HeaderContact from "../Header/HeaderContact";

export default function Contact() {
    return(
        <div className="container-contact">
            <HeaderContact />
            <div className="video">
                <video src={video} autoPlay loop muted playsInline />
            </div>
            <div className="contact-content">
                <div className="logo-contact">
                    <img src={logo} alt="logo 904fleurs" height="150px" width="150px" />
                </div>
                <ContactForm />
            </div>
            
        </div>
    );
}