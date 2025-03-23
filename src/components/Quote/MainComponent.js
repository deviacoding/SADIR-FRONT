import React from "react";

const MainComponent = (props) => {
    // console.log("props", props)
  return (
    <>
      <div>
        <label for=""></label>
        <input
          className="input-quote"
          type=""
          name=""
          id=""
          placeholder="Your Name"
        />
      </div>

      <br />

      <div>
        <label for="Email"></label>
        <input
          className="input-quote"
          type="email"
          name=""
          id=""
          placeholder="Your Email"
        />
      </div>

      <br />

      <div className="select">
        <select id="" name="service" required="">
          <option value="" disabled="" selected="">
            Select A Service
          </option>
          <option value="">Je sais pas</option>
          <option value="">Toujours pas</option>
        </select>
      </div>

      <br />

      <div className="bouton-quote">
        <button className="bouton-input" onClick={()=> props.upStateStep()} >Step Suivant</button>
      </div>


    </>
  );
};

export default MainComponent;
