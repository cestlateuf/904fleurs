import React, { useEffect, useState } from "react";
import cursorSVG from "../../assets/images/mouse.svg";
import "../../styles/CustomCursor.css";

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
  
    useEffect(() => {
      const updatePosition = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };
  
      window.addEventListener("mousemove", updatePosition);
  
      return () => window.removeEventListener("mousemove", updatePosition);
    }, []);
  
    return (
      <img
        src={cursorSVG}
        alt="Custom Cursor"
        className="custom-cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    );
  };
  
  export default CustomCursor;