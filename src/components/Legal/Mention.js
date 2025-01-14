import React from "react";
import "../../styles/Mention.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Mention() {
  return (
    <div className="container-mention">
      <Header />
      <div className="mention-content">
        <h1 className="mention-title">Mentions légales</h1>
        <section>
          <h2 className="section-title">Éditeur du site</h2>
          <p>
            Le site 904fleurs.com est édité par l’association 904fleurs, une association suisse dont le siège social est situé à :
          </p>
          <p>Ch. de la Joliette 5, 1006 Lausanne, Vaud, Suisse.</p>
          <ul>
            <li>Inès Gharbi</li>
            <li>Shaddy M’Baye</li>
          </ul>
        </section>
        <section>
          <h2 className="section-title">Conception et réalisation du site</h2>
          <p>
            Le site a été réalisé par :
          </p>
          <ul>
            <li>Ramsford Sheamang, dirigeant de l’entreprise DEMNA (SIRET : 91334211900017)</li>
            <li>Nicolas Marie-Angélique (SIRET : 91212005200028) </li>
          </ul>
        </section>
        <section>
          <h2 className="section-title">Hébergement du site</h2>
          <p>
            Le site est hébergé par OVH, une société domiciliée en France :
          </p>
          <ul>
            <li>Siège social : 2 rue Kellermann, 59100 Roubaix, France</li>
            <li>Site internet : www.ovh.com</li>
          </ul>
        </section>
      </div>
      <Footer />
    </div>
  );
}