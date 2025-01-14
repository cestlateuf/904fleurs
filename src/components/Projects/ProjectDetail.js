import React from "react";
import { useParams } from "react-router-dom";
import projects from "./projects.json"; // Si vous utilisez un fichier JSON ou gardez-le en mémoire.

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <p>Projet non trouvé.</p>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <img src={project.image} alt={project.title} />
      <p>Voici les détails de votre projet.</p>
      {/* Ajoutez d'autres informations pertinentes ici */}
    </div>
  );
};

export default ProjectDetail;