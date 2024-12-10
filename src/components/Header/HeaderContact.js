import React, { useState } from "react";
import "../../styles/HeaderContact.css";
import { Squeeze } from "hamburger-react";

export default function HeaderContact() {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="header-contact">
      <div className="header-left-contact">
        <a href="/accueil" className="tab-name-contact" aria-label="Retour à l'accueil">
          904fleurs
        </a>
      </div>
      <div className="hamburger-contact">
        <Squeeze
          toggled={isOpen}
          toggle={setOpen}
          label="Afficher ou masquer le menu"
        />
      </div>
      <nav aria-label="Navigation principale">
        <ul className={`header-right-contact ${isOpen ? "open-contact" : ""}`}>
          <li>
            <a href="/projets" className="nav-contact">Projets</a>
          </li>
          <li>
            <a href="/a-propos" className="nav-contact">À propos</a>
          </li>
          <li>
            <a href="/contact" className="nav-contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}