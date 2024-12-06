import React, { useState, useEffect } from "react";
import "../../styles/ProjectList.css";
import projects from "../../projects.json";


export default function ProjectList() {
  const [showGif, setShowGif] = useState(false);
  const [currentGif, setCurrentGif] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches
    );
  }, []);

  return (
    <div
      className="projects-list"
      onMouseMove={e => setMousePosition({ x: e.clientX, y: e.clientY })}
    >
      {projects.map((project, index) => (
        <div className="project-item" key={index}>
          <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
          <span className="project-name">
            <a
              href={project.url}
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => {
                if (isDesktop) {
                  setShowGif(true);
                  setCurrentGif(project.gif);
                }
              }}
              onMouseLeave={() => {
                if (isDesktop) {
                  setShowGif(false);
                  setCurrentGif("");
                }
              }}
            >
              {project.title}
            </a>
          </span>
        </div>
      ))}
      {showGif && (
        <img
          src={currentGif}
          alt=""
          style={{
            position: 'fixed',
            top: mousePosition.y + 10,
            left: mousePosition.x + 10,
            pointerEvents: 'none',
            zIndex: 9999,
            width: '150px'
          }}
        />
      )}
    </div>
  );
}
// import React, { useState, useEffect } from "react";
// import "../../styles/ProjectList.css";
// // Au lieu d'utiliser le JSON, on importe un GIF directement
// import testGif from "../../assets/images/1.gif";

// export default function ProjectList() {
//   const [showGif, setShowGif] = useState(false);
//   const [currentGif, setCurrentGif] = useState("");
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isDesktop, setIsDesktop] = useState(false);

//   // On simule un tableau de projets avec un seul projet
//   const projects = [
//     {
//       title: "Mon projet de test",
//       url: "https://example.com",
//       gif: testGif
//     }
//   ];

//   useEffect(() => {
//     setIsDesktop(
//       typeof window !== "undefined" &&
//       window.matchMedia &&
//       window.matchMedia("(hover: hover) and (pointer: fine)").matches
//     );
//   }, []);

//   return (
//     <div
//       className="projects-list"
//       onMouseMove={e => setMousePosition({ x: e.clientX, y: e.clientY })}
//     >
//       {projects.map((project, index) => (
//         <div className="project-item" key={index}>
//           <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
//           <span className="project-name">
//             <a
//               href={project.url}
//               style={{ textDecoration: "none" }}
//               target="_blank"
//               rel="noreferrer"
//               onMouseEnter={() => {
//                 if (isDesktop) {
//                   setShowGif(true);
//                   setCurrentGif(project.gif);
//                 }
//               }}
//               onMouseLeave={() => {
//                 if (isDesktop) {
//                   setShowGif(false);
//                   setCurrentGif("");
//                 }
//               }}
//             >
//               {project.title}
//             </a>
//           </span>
//         </div>
//       ))}
//       {showGif && (
//         <img
//           src={currentGif}
//           alt=""
//           style={{
//             position: 'fixed',
//             top: mousePosition.y + 10,
//             left: mousePosition.x + 10,
//             pointerEvents: 'none',
//             zIndex: 9999,
//             width: '150px'
//           }}
//         />
//       )}
//     </div>
//   );
// }