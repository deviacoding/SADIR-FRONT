import React, { useState } from 'react'

const SimpleCounter = () => {
    const [count, setCount] = useState(0);
    
    const increment = () => {
        setCount(count+1)
    }
    const decrement = () => {
        setCount(count-1) 
    }
    const reset = () => {
        setCount(0)
    }

    

  return (
    <>
    <h1>Compteur {count}</h1>
    <button onClick={()=> increment() } >Ajouter +</button>
    <button onClick={()=> decrement() } >Soustraire -</button>
    <button onClick={()=> reset() } >Init </button>
    </>
  )
}

export default SimpleCounter