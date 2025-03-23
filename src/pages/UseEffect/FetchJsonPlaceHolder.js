import React, { useState, useEffect } from "react";
import axios from "axios";

const FetchJsonPlaceHolder = () => {
  const [data, setData] = useState([]); // 1 ) initialiser son state
  const [error, setError] = useState();

  useEffect(() => {
    // creer un useEffect pour qu'une fois que le component est monter, je fais une action
    console.log("Mon component est monté"); // pour m'assurer que tout fonctionne bien
    axios
      .get("https://jsonplaceholder.typicode.com/posts") // pour aller chercher dans un serveur externe une data
      .then((response) => {
        // quand tout se passe bien
        console.log(response.data); // j'affiche ma data recu pour savoir ce que je recois
        setData(response.data); // je stock ma data pour pouvoir plus tard l'afficher
      })
      .catch((error) => {
        console.log(error);
        setError("une erreur est survenu");
      }); // quand il y'a une erreur
  }, []);

//   console.log(error);

  return (
    <div className="container">
      <h1>FetchJsonPlaceHolder</h1>
      <div>
        {data?.map(
          (
            item // .map pour qu'a chaque object contenu dans ma data soit afficher en suivant le model ci dessous
          ) => (
            <div
              className="border border-dark rounded shadow-lg m-2 p-2"
              key={item.id}
            >
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </div>
          )
        )}
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

export default FetchJsonPlaceHolder;
