import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MouseTracker = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
      console.log('Postion de la souris : ', { x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <Link to="/">
        <button className="btn btn-danger">Retour</button>
      </Link>
      <p>Position de la souris :</p>
      <p>X: {position.x}, Y: {position.y}</p>
    </div>
  );
};

export default MouseTracker;
