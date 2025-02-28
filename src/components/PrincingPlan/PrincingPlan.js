import React from 'react'
import Cart from './Cart'

const PrincingPlan = (props) => {
  return (
    <section className="price container py-5">

    <div className="titre-price my-5">

        <h3>PRICING PLAN</h3>
        <h2 className="affordable">Affordable Pricing Packages</h2>

    </div>

    <div className="abonnement row justify-content-around">

        <div className="basic col-3  shadow-lg rounded p-3">

            <div className="le-prix">
                49
            </div>

            <div className="titre-basic">
                Basic
            </div>

            <button onClick={()=> props.updateCart(1)} className="button-learn rounded">Add to cart +</button>

        </div>

        <Cart 
            amount={99}
            title={"Preminum"}
            functionAddingCart={props.updateCart}
        />

        <Cart 
            amount={149}
            title={"Business"}
            functionAddingCart={props.updateCart}
        />


    </div>

</section>
  )
}

export default PrincingPlan