import React, { useState, useRef } from "react";
import "../../styles/AboutContent.css";

export default function AboutContent() {
    const [activeSection, setActiveSection] = useState("studio");
    const sectionRefs = {
        studio: useRef(null),
        mission: useRef(null),
        valeurs: useRef(null),
        services: useRef(null),
        realisations: useRef(null),
        travailler: useRef(null),
        contact: useRef(null),
    };

    const scrollToSection = (section) => {
        setActiveSection(section);
        sectionRefs[section].current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="about-content">
            <div className="titles">
                {Object.keys(sectionRefs).map((section) => (
                    <div
                        key={section}
                        className={`title ${activeSection === section ? "active" : ""}`}
                        onClick={() => scrollToSection(section)}
                    >
                        {section.charAt(0).toUpperCase() + section.slice(1).replace("_", " ")}
                    </div>
                ))}
            </div>

            <div className="content">
                {Object.keys(sectionRefs).map((section) => (
                    <div
                        key={section}
                        ref={sectionRefs[section]}
                        className={`content-section ${
                            activeSection === section ? "visible" : "hidden"
                        }`}
                    >
                        {section === "studio" && (
                            <>
                                <h2>904fleurs Studio</h2>
                                <p>
                                    Créé en 2024 par Shaddy M’Baye et Inès Gharbi, 904fleurs est un studio de production basé à Lausanne, dédié à la création de contenus visuels uniques et captivants. Plus qu’une simple agence, nous sommes une équipe passionnée, animée par l’envie de raconter des histoires fortes, de capturer l’essence des idées et de transformer chaque projet en une œuvre qui inspire.
                                </p>
                            </>
                        )}
                        {section === "mission" && (
                            <>
                                <h2>Notre Mission</h2>
                                <p>
                                    Chez 904fleurs, nous croyons au pouvoir de l’image pour toucher les cœurs et éveiller les esprits. Notre mission est de donner vie à des récits qui résonnent, à travers une approche artistique qui mêle créativité, sincérité et audace. Que ce soit pour des projets personnels ou en collaboration, nous nous efforçons d’apporter une vision originale et percutante.
                                </p>
                            </>
                        )}
                        {section === "valeurs" && (
                            <>
                                <h2>Nos Valeurs</h2>
                                <ul>
                                    <li>Authenticité : Nous cherchons à exprimer des idées qui ont du sens et à travailler avec des personnes partageant nos valeurs.</li>
                                    <li>Créativité : Chaque projet est une occasion de repousser les limites et de réinventer les façons de raconter.</li>
                                    <li>Excellence : La qualité est au cœur de tout ce que nous faisons, du concept initial à la finition.</li>
                                </ul>
                            </>
                        )}
                        {section === "services" && (
                            <>
                                <h2>Nos Services</h2>
                                <ul>
                                    <li>Production Vidéo : Réalisation de vidéos musicales, documentaires, courts et longs métrages, et contenus adaptés aux plateformes numériques.</li>
                                    <li>Post-Production : Montage vidéo, étalonnage des couleurs, animation et effets visuels.</li>
                                    <li>Direction Créative : Développement de concepts, scénarisation, storyboarding et conseils artistiques.</li>
                                    <li>Collaborations Sélectives : Nous aimons travailler sur des projets qui nous inspirent et collaborons volontiers avec des artistes, des marques et des organisations motivées par la création de contenus marquants.</li>
                                </ul>
                            </>
                        )}
                        {section === "realisations" && (
                            <>
                                <h2>Nos Réalisations</h2>
                                <p>
                                    Nous avons eu le plaisir de collaborer avec des créateurs, des artistes, et des organisations variées. Ces expériences nourrissent notre créativité et nous poussent à explorer de nouvelles perspectives, toujours avec l’ambition de produire des contenus qui laissent une empreinte.
                                </p>
                            </>
                        )}
                        {section === "travailler" && (
                            <>
                                <h2>Pourquoi Travailler Avec Nous ?</h2>
                                <ul>
                                    <li>Une Vision Artistique Forte : Chaque projet bénéficie d’une touche unique et réfléchie, adaptée à son essence.</li>
                                    <li>Des Solutions Sur Mesure : Nous adaptons nos services à vos besoins pour garantir un résultat qui vous correspond pleinement.</li>
                                    <li>Une Passion Communicative : Nous vivons chaque projet comme une aventure créative, avec une énergie et un enthousiasme qui transparaissent dans nos réalisations.</li>
                                </ul>
                            </>
                        )}
                        {section === "contact" && (
                            <>
                                <h2>Contactez-nous</h2>
                                <p>
                                    Prêt à raconter votre histoire ou à donner vie à une idée ? Nous sommes là pour transformer vos projets en une expérience visuelle mémorable. Parlons-en !
                                </p>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}