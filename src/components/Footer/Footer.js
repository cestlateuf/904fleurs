import React from "react";
import "../../styles/Footer.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo_4.svg";
import Clock from "./Clock";

export default function Footer() {
  const ig1 = "https://www.instagram.com/904fleurs/";
  const igNass = "https://www.instagram.com/n_a_s_s___/";
  const igShady = "https://www.instagram.com/ogshaddy7/";

  return (
    <footer className="footer">
      <div className="footer-logo-container">
        <Link to="/accueil" aria-label="Retour à l'accueil">
          <img src={logo} alt="Logo de 904fleurs" className="footer-logo" />
        </Link>
      </div>
      <div className="footer-legal">
        <p>© 2025 904fleurs</p>
      </div>
      <div className="footer-screen-size">
        <p>{window.innerWidth} x {window.innerHeight}</p>
      </div>
      <div className="footer-time">
        <Clock />
      </div>
      <ul className="footer-socials">
        <li>Nos Instagram</li>
        <li><a href={ig1}>904fleurs</a></li>
        <li><a href={igNass}>Nass</a></li>
        <li><a href={igShady}>Shady</a></li>
      </ul>
      <ul className="footer-menu">
        <li><Link to="/accueil">Accueil</Link></li>
        <li><Link to="/a-propos">À propos</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/projets">Projets</Link></li>
        <li>Events (coming soon)</li>
        <li>Boutique (coming soon)</li>
      </ul>
      <ul className="footer-policies">
        <li><Link to="/mentions-legales">Mentions légales</Link></li>
        <li><Link to="/politique-de-confidentialite">Politique de confidentialité</Link></li>
      </ul>
    </footer>
  );
}