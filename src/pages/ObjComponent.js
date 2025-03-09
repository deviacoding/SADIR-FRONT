import React, { useState } from "react";

const ObjComponent = () => {
  const [state, setState] = useState({
    id: 1,
    metier: "Fullstack developper",
    niveau: "en formation",
  });

  // const handleClickJunior = () => {
  //   console.log("je suis cliquE")
  //   setState((prevState)=> ({...prevState, niveau: "Junior", id: 3}))
  // }

  const handleClickJunior = () => {
    console.log("je suis cliquE");

    setState((prevState) => {
      console.log("prevState", prevState);
      return { ...prevState, niveau: "Junior", id: 3 };
    });
  };

  const handleClickIntermediaire = () => {
    // ici avec ...prevState on garde l'object tel qu'il etait
    //avec >>> niveau: "Intermediaire", on modifiera uniquement la cle niveau
    setState((prevState) => ({ ...prevState, niveau: "Intermediaire" }));
  };

  const handleClickSenior = () => {
    setState((prevState) => ({ ...prevState, niveau: "Senior" }));
  };

  return (
    <div>
      <h1>ObjComponent</h1>
      <p>
        Je suis {state.metier} {state.niveau} 
      </p>
      <button onClick={() => handleClickJunior()}>
        Dans trois mois je serais
      </button>
      <button onClick={() => handleClickIntermediaire()}>
        Dans 2 je serais
      </button>
      <button onClick={() => handleClickSenior()}>Dans 5 je serais</button>
    </div>
  );
};

export default ObjComponent;
