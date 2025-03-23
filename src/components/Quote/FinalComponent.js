import React from "react";

const FinalComponent = (props) => {
    console.log(props)
  return (
    <div>
        <h1>FinalComponent</h1>
        <p>{props.messageFinal}</p>
    </div>
  );
};

export default FinalComponent;
