import React from 'react'

const Cart = (props) => {

   // console.log("props", props)

    // amount={99}
    // title={"Preminum"}
    // functionAddingCart={props.updateCart}
  return (
    <div className="preminum col-3 col-3  shadow-lg rounded p-3">

    <div className="le-prix">
        {props.amount}
    </div>

    <div className="titre-preminum">
    {props.title}
    </div>

    <button onClick={()=> props.functionAddingCart(2)} className="button-learn rounded">Add to cart +</button>

</div>
  )
}

export default Cart