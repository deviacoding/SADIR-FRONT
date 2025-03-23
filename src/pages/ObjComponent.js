import React, { useState } from "react";

const ObjComponent = () => {
  const [state, setState] = useState({
    id: 1,
    metier: "Fullstack developper",
    niveau: "en formation",
    errorMsg: "le serveur ne repond pas", 
    idClient: "5sd6fs45d"
  });

  // const handleClickJunior = () => {
  //   console.log("je suis cliquE");

  //   setState((prevState) => {
  //     console.log("prevState", prevState);
  //     return { ...prevState, niveau: "Junior", id: 3 };
  //   });
  // };

  const handleClickJunior = () => {
    console.log("je suis cliquE")
    setState((prevState)=> ({...prevState, niveau: "Junior", id: 3}))
  }

  const handleClickIntermediaire = () => {
    // ici avec ...prevState on garde l'object tel qu'il etait
    //avec >>> niveau: "Intermediaire", on modifiera uniquement la cle niveau
    setState((prevState) => ({ ...prevState, niveau: "Intermediaire" }));
  };

  const handleClickSenior = () => {
    setState((prevState) => ({ ...prevState, niveau: "Senior" }));
  };

  // const handleJunior = () => {
  //   console.log("handleJunior ouvert")
  //   setState((prevS)=> {
  //     console.log("prevS", prevS)
  //     return { ...prevS, niveau: "Junior" };

  //   } )
  //   // on veut que le button change le state , de : En formation pour devenir : Junior

  // }

  return (
    <div>
      <h1>ObjComponent</h1>
      <p>
        Je suis {state.metier} {state.niveau} 
      </p>
      {/* <button onClick={()=> handleJunior()}>Changer le state pour devenir Junior</button> */}
      <button onClick={() => handleClickJunior()}>
        Dans trois mois je serais
      </button>
      <button onClick={() => handleClickIntermediaire()}>
        Dans 2 ans je serais
      </button>
      <button onClick={() => handleClickSenior()}>Dans 5 ans je serais</button>
    </div>
  );
};

export default ObjComponent;
