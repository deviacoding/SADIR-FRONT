import React, {useState} from 'react'


const FirstState = () => {
    const myName = "Elie"
    const [state, setState] = useState(myName)
    const handleClick = () => {
        setState("imposteur")
    }
    const reInitState = () => {
        setState(myName)
    }
  return (
    <div>
        <p>Bonjour je m'appel {state}</p>
        <button onClick={()=> handleClick()}>Button Changeur de State</button>
        <button onClick={()=> reInitState()}>Reinitialise</button>
    </div>
  )
}

export default FirstState