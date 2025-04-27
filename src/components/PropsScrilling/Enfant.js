import React from "react";

const Enfant = (props) => {
  return (
    <div>
      Enfant dit " papy m'a dit que : {props.secret} ""
      <br />
      <br />
      <br />
      <button onClick={() => props.getMessagePetitPetitfils("Combien on peut avoir de bonbons avec tes lingots")}>
        Prendre le secret du petit fils
      </button>
    </div>
  );
};

export default Enfant;
