import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Etudiant = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    console.log("Hello je mouvre");
    axios
      .get("http://localhost:8000/articles")

      .then((response) => {
        console.log(response.data);
        setdata(response.data.data);
      })

      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h1>First useEffect</h1>
      {data?.map((articles) => (
        <Link to={`/blog/${articles.id}`}>
          <div className=" m-3 p-2 rounded shadow-lg" key={articles.id}>
            <div>
              <h6>Titre : {articles.titre}</h6>
              <p>{articles.contenu}</p>
              <p>{articles.date_publication}</p>
            </div>
            <br />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Etudiant;
