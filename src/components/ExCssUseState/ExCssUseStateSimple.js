import React, {useState} from 'react'
import "./ExCssUseState.css"

const ExCssUseState = () => {

    const [colorBg, setColorBg] = useState("bleu");

  return (
    <div className=" " style={{height: "100vh"}} >
        <h1 className={`bg-${colorBg}`} >Exemple css useState</h1>
        <button onClick={ ()=>setColorBg("noir")   } >Changer la couleur</button>
    </div>
  )
}

export default ExCssUseState