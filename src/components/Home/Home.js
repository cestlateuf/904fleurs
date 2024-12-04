import React from "react";
import "../../styles/Home.css";
import { Canvas } from '@react-three/fiber'
import { Cloud } from "../Cloud/Cloud";
import PhotoGrid from "../PhotoGrid/PhotoGrid";
import ReactLenis from "lenis/react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo_png.png";
import logo2 from "../../assets/images/gif_904fleurs.gif";

export default function Home() {
  return (
    <ReactLenis root options={{ lerp: 0.1, smoothWheel: true }}>
      <div className="container-home">
        <div className="intro">
            <img src={logo2} alt="logo 904fleurs" className="logo" />
          <div className="title-header">
            <h1>904fleurs</h1>
          </div>
          <div className="content-intro">
            <p>Bienvenue sur le site de 904fleurs. Scrollez vers le bas pour voir un aperçu de nos projets.</p>
          </div>
        </div>
        <PhotoGrid />
        <div className="outro">
          <div className="menu">
            <Link to="/projets" className="link">Projets</Link>
            <Link to="/a-propos" className="link">À propos</Link>
            <Link to="/contact" className="link">Contact</Link>
          </div>
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