import React, { useState, useEffect } from "react";
import "../../styles/Header.css";
import logo from "../../assets/images/logo_4.svg";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  return (
    <>
      <header className={`header ${isOpen ? "hidden-header" : ""}`}>
        <Link to="/accueil" aria-label="Retour à l'accueil" className="header-logo">
          <img src={logo} alt="Logo de 904fleurs" className="header-logo" />
        </Link>
        <button
          className="header-right"
          onClick={toggleMenu}
          aria-controls="MobileNavDrawer"
          title="Ouvrir le menu"
        >
          MENU
        </button>
      </header>

      {isOpen && (
        <nav className="menu">
          <button
            className="close-menu"
            onClick={toggleMenu}
            aria-label="Fermer le menu"
          >
            FERMER
          </button>
          <ul>
            <li><Link to="/a-propos">À propos</Link></li>
            <li><Link to="/projets">Projets</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/events">Événements</Link> <span>Coming Soon</span></li>
            <li><Link to="/shop">Boutique</Link> <span>Coming Soon</span></li>
          </ul>
        </nav>
      )}
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </>
  );
}