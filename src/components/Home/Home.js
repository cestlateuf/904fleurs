import React from "react";
import "../../styles/Home.css";
import { Helmet } from "react-helmet";
import PhotoGrid from "../PhotoGrid/PhotoGrid";
import ReactLenis from "lenis/react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo_gif.gif";

export default function Home() {
  return (
    <ReactLenis root options={{ lerp: 0.1, smoothWheel: true }}>
      <Helmet>
        <title>904fleurs - Accueil</title>
        <meta
          name="description"
          content="904fleurs est une agence créative de production de contenu visuel."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="904fleurs - Accueil" />
        <meta
          property="og:description"
          content="904fleurs est une agence créative de production de contenu visuel."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://904fleurs.ramsford.fr/accueil" />
        <meta property="og:image" content="../../assets/images/logo_gif.gif" />
      </Helmet>
      <div className="container-home">
        <div className="intro">
          <img src={logo} alt="logo 904fleurs" className="logo" />
          <div className="title-header">
            <h1>904fleurs</h1>
          </div>
          <div className="content-intro">
            <p>Bienvenue sur le site de 904fleurs. Scrollez vers le bas pour voir un aperçu de nos projets.</p>
          </div>
        </div>

        <PhotoGrid />

        <div className="outro">
          <nav aria-label="Menu principal">
            <ul className="menu">
              <li>
                <Link
                  to="/projets"
                  className="link"
                  aria-label="Accéder à la page des projets"
                >
                  Projets
                </Link>
              </li>
              <li>
                <Link
                  to="/a-propos"
                  className="link"
                  aria-label="Accéder à la page À propos"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="link"
                  aria-label="Accéder à la page de contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="title-outro">
            <h1>904fleurs</h1>
          </div>
        </div>

        <div className="footer">
          <p>© 2024 904fleurs. Tous droits réservés.</p>
        </div>
      </div>
    </ReactLenis>
  );
}