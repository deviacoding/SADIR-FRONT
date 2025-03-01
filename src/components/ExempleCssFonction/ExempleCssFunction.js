import React from 'react'
import "./ExempleCssFunction.css"

const ExempleCssFunction = () => {

    const ChangeColor = () => {
      const element = document.getElementsByClassName("changeColor")[0]
      console.log(element)
      element.style.backgroundColor = "red"
    }

  return (
    <div>
        <h1 className="changeColor"  >Exemple css dans une fonction</h1>

        <button onClick={()=>ChangeColor()} >Changer de couleur</button>

    </div>
  )
}

export default ExempleCssFunction