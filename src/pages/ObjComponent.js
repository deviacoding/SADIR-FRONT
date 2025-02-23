import React, {useState} from 'react'

const ObjComponent = () => {

    const [state, setState] = useState({
        id : 1 ,
        metier: "Fullstack developper",
        niveau : "en formation",
      })


  return (
    <div>
        <h1>ObjComponent</h1>
        <p>Je suis {state.metier} {state.niveau}</p>
    </div>
  )
}

export default ObjComponent