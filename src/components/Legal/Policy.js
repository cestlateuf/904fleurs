import React from "react";
import "../../styles/Policy.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Policy() {
  return (
    <div className="container-policy">
      <Header />
      <main className="policy-content">
        <h1 className="policy-title">Politique de confidentialité</h1>
        <section>
          <h2 className="section-title">Responsable du traitement des données</h2>
          <p>
            L’association 904fleurs est responsable du traitement des données personnelles collectées sur le site 904fleurs.com.
          </p>
          <p>Siège social : Ch. de la Joliette 5, 1006 Lausanne, Vaud, Suisse</p>
          <p>Contact : contact@904fleurs.com</p>
        </section>
        <section>
          <h2 className="section-title">Données collectées</h2>
          <p>
            Dans le cadre de l’utilisation du formulaire de contact, les données suivantes sont collectées :
          </p>
          <ul>
            <li>Nom</li>
            <li>Adresse e-mail</li>
            <li>Message envoyé</li>
          </ul>
        </section>
        <section>
          <h2 className="section-title">Utilisation des données</h2>
          <p>Les données collectées sont utilisées uniquement pour :</p>
          <ul>
            <li>Répondre aux demandes transmises via le formulaire de contact</li>
            <li>Améliorer l’expérience utilisateur grâce à l’utilisation des cookies linguistiques</li>
          </ul>
        </section>
        <section>
          <h2 className="section-title">Hébergement des données</h2>
          <p>Les données sont hébergées sur les serveurs d’OVH, situés en France.</p>
        </section>
        <section>
          <h2 className="section-title">Droits des utilisateurs</h2>
          <p>
            Conformément au RGPD et aux lois suisses, les utilisateurs disposent des droits suivants :
          </p>
          <ul>
            <li>Droit d’accès</li>
            <li>Droit de rectification</li>
            <li>Droit à l’effacement</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit d’opposition</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}