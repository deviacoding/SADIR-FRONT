import React from "react";
import CardPrice from "./CardPrice";

const Price = (props) => {
  console.log("Price props", props);
  return (
    <section className="price">
      <div className="titre-price">
        <h3>PRICING PLAN</h3>
        <h2 className="affordable">Affordable Pricing Packages</h2>
      </div>

      <div className="abonnement row justify-content-around">
        <CardPrice 
          countCart={props.updateCart} 
          amount={49} 
          title={"Basic"}
        />
        
        <CardPrice
          countCart={props.updateCart}
          amount={99}
          title={"Preminum"}
        />
        <CardPrice
          countCart={props.updateCart}
          amount={149}
          title={"Business"}
        />
      </div>
    </section>
  );
};

export default Price;
