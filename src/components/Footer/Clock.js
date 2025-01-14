import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Nettoyer l'intervalle quand le composant est démonté
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString(); // Formate l'heure au format local
  };

  return (
    <div>
      <p>{formatTime(time)}</p>
    </div>
  );
};

export default Clock;