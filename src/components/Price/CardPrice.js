import React from "react";

const CardPrice = (props) => {
     console.log("props CardPrice", props)
  return (
    <div className="basic col-3 border border-dark rounded p-3 shadow-lg">
      <div className="le-prix">{props.amount}</div>

      <div className="titre-basic">{props.title}</div>

      <button className="button-learn" onClick={()=> props.countCart(props.amount)}  >Ajouter panier</button>
    </div>
  );
};

export default CardPrice;
