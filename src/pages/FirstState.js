import React, {useState} from 'react'


const FirstState = () => {
    // const etat = "Non lu"
    const [status, setStatus] = useState("Non lu")
    const handleClick = () => {
      setStatus("Lu")
    }
    const reInitState = () => {
      setStatus("Non lu")
    }
  return (
    <div>
        <button onClick={()=> handleClick()}>{status}</button>
        <button onClick={()=> reInitState()}>marquer come non lu</button>

    </div>
  )
}

export default FirstState