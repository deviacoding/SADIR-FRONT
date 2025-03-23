import React, { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

const SimpleCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // console.log("Mon component a changé");
    // console.log(document.title, typeof(document.title));
    document.title = `Vous avez cliqué ${count} fois`;
 
  }, [count]);

  const increment = () => {
    // je rajoute un a mon compteur
    setCount(count + 1);
  };
  const decrement = () => {
    // retirer un a mon compteur
    setCount(count - 1);
  };
  const reset = () => {
    // remettre mon compteur a zero
    setCount(0);
  };

  const codeString = `

  import React, { useState } from "react";
    const SimpleCounter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
      setCount(count - 1)
    }
    const reset = () => {
      setCount(0)
    }
    

  return (
    <div>

     <h1>SimpleCounter {count}</h1>   
     <button onClick={()=> increment()} >+</button>
     <button onClick={()=> decrement()}>-</button>
     <button onClick={()=> reset()}>init</button>
        
    </div>
  )
}

export default SimpleCounter `;

  return (
    <div className="container">

      <h1>SimpleCounter {count}</h1>

      <SyntaxHighlighter language="javascript" style={dark}>
        {codeString}
      </SyntaxHighlighter>

      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button>
      <button onClick={() => reset()}>init</button>
    </div>
  );
};

export default SimpleCounter;
