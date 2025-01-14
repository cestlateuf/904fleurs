import React from "react";
import "../../styles/Contact.css";
import video from "../../assets/videos/contact_video.mp4";
import ContactForm from "./ContactForm";
import HeaderContact from "../Header/HeaderContact";
import { Helmet } from "react-helmet";

export default function Contact() {
    return (
        <div className="container-contact">
            <Helmet>
                <title>904fleurs - Contact</title>
                <meta
                    name="description"
                    content="904fleurs est une agence créative de production de contenu visuel. Ceci est la page de contact."
                />
                <meta property='og:image' content='../../assets/images/logo_gif.gif' />
            </Helmet>
            <HeaderContact />
            <div className="video">
                <video src={video} autoPlay loop muted playsInline />
            </div>
            <div className="contact-content">
                <ContactForm />
            </div>

        </div>
    );
}