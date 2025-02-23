import React, {useState} from 'react'

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

export default SimpleCounter