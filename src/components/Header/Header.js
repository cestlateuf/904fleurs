import React, { useState } from "react";
import "../../styles/Header.css";
import { Squeeze } from "hamburger-react";

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="header">
      {/* Logo ou titre du site */}
      <div className="header-left">
        <a href="/accueil" className="tab-name" aria-label="Retour à l'accueil">
          904fleurs
        </a>
      </div>

      {/* Menu hamburger pour mobile */}
      <div className="hamburger">
        <Squeeze
          toggled={isOpen}
          toggle={setOpen}
          label="Afficher ou masquer le menu"
          hideOutline={false} // Laisser l'outline visible pour l'accessibilité
        />
      </div>

      {/* Menu de navigation */}
      <nav
        className={`header-right ${isOpen ? "open" : ""}`}
        aria-label="Navigation principale"
      >
        <ul className="nav-list" aria-hidden={!isOpen}>
          <li>
            <a href="/projets" className="nav" aria-label="Accéder à la page des projets">
              Projets
            </a>
          </li>
          <li>
            <a href="/a-propos" className="nav" aria-label="Accéder à la page À propos">
              À propos
            </a>
          </li>
          <li>
            <a href="/contact" className="nav" aria-label="Accéder à la page de contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}