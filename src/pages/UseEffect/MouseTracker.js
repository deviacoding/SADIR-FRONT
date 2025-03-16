import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

const MouseTracker = () => {
    const [position, setPosition] = useState({x: 0, y: 0})
    
    useEffect(() => {
        const handleMouseMove = (event) => {
          console.log("Position de la souris de mon utilisateur", {x: event.clientX, y: event.clientY })
          setPosition({x: event.clientX, y: event.clientY })
        }
        window.addEventListener("mousemove", handleMouseMove )

        return () => {
            console.log("Le useEffect a demonter mon componenent")
            window.removeEventListener("mousemove", handleMouseMove )
        }
        
    }, []);

    
  return (
    <div>
        <Link to="/">
        Vers la page Home /
        </Link>

        <h1> MouseTracker</h1>
        <p>Position de la souris</p>
        <p>X: {position.x}, Y: {position.y}</p>
       
    </div>
  )
}

export default MouseTracker