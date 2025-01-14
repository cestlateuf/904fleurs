import React from "react";
import "../../styles/ProjectGrid.css";
import { Link } from "react-router-dom";
import vignette1 from "../../assets/images/vignettes/1.jpg";
import vignette2 from "../../assets/images/vignettes/2.jpg";
import vignette3 from "../../assets/images/vignettes/3.jpg";
import vignette4 from "../../assets/images/vignettes/4.jpg";
import vignette5 from "../../assets/images/vignettes/5.jpg";

export default function ProjectGrid() {
  const projects = [
    { id: 1, image: vignette1, title: "Comment devenir un artiste ? | Cinematic vlog", slug: "comment-devenir-un-artiste" },
    { id: 2, image: vignette2, title: "Passer de zéro à héros | Nekketsu épisode 0", slug: "passer-de-zero-a-heros" },
    { id: 3, image: vignette3, title: "Venez on essaye de devenir riche... | Nekketsu 1", slug: "devenir-riche" },
    { id: 4, image: vignette4, title: "À nous, les victimes de la flemme | Nekketsu épisode 2", slug: "victimes-de-la-flemme" },
    { id: 5, image: vignette5, title: "Faire le maximum en 1 nuit | Nekketsu Hors-série #1", slug: "faire-le-maximum" },
  ];

  return (
    <div className="project-grid">
      {projects.map((project) => (
        <div key={project.id} className="project-item">
          <img src={project.image} alt={project.title} className="project-image" />
          <div className="project-info">
            <h3>{project.title}</h3>
            <Link to={`/project/${project.slug}`} className="view-more">
              View More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}