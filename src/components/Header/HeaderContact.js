import React, { useState } from "react";
import "../../styles/HeaderContact.css";
import { Squeeze } from "hamburger-react";

export default function HeaderContact() {
    const [isOpen, setOpen] = useState(false);
    return (
        <header className="header-contact">
            <div className="header-left-contact">
                <a href="/accueil" className="tab-name-contact">904fleurs</a>
            </div>
            <div className="hamburger-contact">
                <Squeeze toggled={isOpen} toggle={setOpen} label="afficher le menu" hideOutline={true} />
            </div>
            <div className={`header-right-contact ${isOpen ? 'open-contact' : ''}`}>
                <a href="/projets" className="nav-contact">Projets</a>
                <a href="/a-propos" className="nav-contact">À propos</a>
                <a href="/contact" className="nav-contact">Contact</a>
            </div>
        </header>
    );
}