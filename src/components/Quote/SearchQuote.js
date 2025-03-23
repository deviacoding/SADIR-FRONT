import React, { useState } from "react";
import axios from "axios"; // Import Axios
import FinalComponent from "./FinalComponent";

const SearchQuote = () => {
  const [GlobalState, setGlobalState] = useState({
    step: 1,
    inputName: "",
    inputEmail: "",
    inputPhone: "",
    inputService: "",
    messageFinal: "Merci pour votre Devis, vous obtiendrez une réponse dans 24H",
  });

  const [alert, setAlert] = useState(""); // State to manage the alert message

  const upStateStep = () => {
    setGlobalState((prevState) => ({
      ...prevState,
      step: prevState.step + 1,
    }));
  };

  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setGlobalState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleChangeName = (e) => {
    setGlobalState((prevState) => ({
      ...prevState,
      inputName: e.target.value,
    }));
  };

  const handleSubmit = () => {
    const { inputName, inputEmail, inputPhone, inputService } = GlobalState;

    // Vérifier si l'un des champs est vide
    if (!inputName || !inputEmail || !inputPhone || !inputService) {
      setAlert("Tous les champs sont obligatoires. Veuillez les remplir.");
      return; // Ne pas envoyer la requête si un champ est vide
    }

    // Préparer les données pour l'envoi
    const data = {
      name: inputName,
      email: inputEmail,
      phone: inputPhone,
      service: inputService,
    };

    // Envoyer les données avec Axios
    axios
      .post("http://localhost:8000/quotes", data)
      .then((response) => {
        console.log("Data sent successfully:", response.data);
        setAlert(""); // Réinitialiser l'alerte en cas de succès
        upStateStep(); // Passer à l'étape suivante
      })
      .catch((error) => {
        console.error("There was an error sending the data!", error);
        setAlert("Une erreur est survenue lors de l'envoi des données.");
      });
  };

  return (
    <div className="recherche-quote">
      {alert && (
        <div className="alert alert-danger" role="alert">
          {alert}
        </div>
      )}

      {GlobalState.step === 1 && (
        <>
          <div>
            <label htmlFor="name"></label>
            <input
              className="input-quote"
              type="text"
              // name="inputName" // sert a faire l'association cles et valeur chick chak
              id="name" // sert a faire l'association avec le label htmlFor et le id
              placeholder="Your Name"
              value={GlobalState.inputName}
              onChange={handleChangeName}
            />
          </div>

          <br />

          <div>
            <label htmlFor="email"></label>
            <input
              className="input-quote"
              type="email"
              name="inputEmail"
              id="email"
              placeholder="Your Email"
              value={GlobalState.inputEmail}
              onChange={handleChange}
            />
          </div>

          <br />

          <div>
            <label htmlFor="phone"></label>
            <input
              className="input-quote"
              type="tel"
              name="inputPhone"
              id="phone"
              placeholder="Your Phone"
              value={GlobalState.inputPhone}
              onChange={handleChange}
            />
          </div>

          <br />

          <div className="select">
            <select
              id="service"
              name="inputService"
              required
              value={GlobalState.inputService}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select A Service
              </option>
              <option value="paquebot">Paquebot</option>
              <option value="container">Container</option>
            </select>
          </div>

          <br />

          <div className="bouton-quote">
            <button className="bouton-input" onClick={handleSubmit}>
              Envoyer
            </button>
          </div>
        </>
      )}

      {GlobalState.step === 2 && (
        <FinalComponent messageFinal={GlobalState.messageFinal} />
      )}
    </div>
  );
};

export default SearchQuote;