import React, { useState } from "react";
import "../../styles/Header.css";
import { Squeeze } from "hamburger-react";

export default function Header() {
    const [isOpen, setOpen] = useState(false);
    return (
        <header className="header">
            <div className="header-left">
                <a href="/accueil" className="tab-name">904fleurs</a>
            </div>
            <div className="hamburger">
                <Squeeze toggled={isOpen} toggle={setOpen} label="afficher le menu" hideOutline={true} />
            </div>
            <div className={`header-right ${isOpen ? 'open' : ''}`}>
                <a href="/projets" className="nav">Projets</a>
                <a href="/a-propos" className="nav">À propos</a>
                <a href="/contact" className="nav">Contact</a>
            </div>
        </header>
    );
}