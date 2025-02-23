import React from 'react'

const CounterClassic = () => {

    let count = 0 ;

    let increment = () => {
      count = count + 1
      console.log("count", count)
    }

    let decrement = () => {
      count = count -1 ;
      console.log("count", count)
    }

    const reset = () => {
      count = 0 ;
      console.log("count", count)
    }

  return (
    <div>
        <h1>CounterClassic {count}</h1>

        <button onClick={()=>increment() }>+</button>
        <button onClick={()=>decrement() }>-</button>
        <button onClick={()=>reset() }> Reset</button>

    </div>
    
  )
}

export default CounterClassic