import React, { useState } from 'react'

const FirstState = () => {

    const [status, setStatus] = useState("Non lu")

    const handleClick = () => {
      setStatus("Lu")
    }
    const initStatus = () => {
        setStatus("Non Lu")
    }


  return (
    <>
        <h1>FirstState</h1>
        <button onClick={()=> handleClick()} >{status}</button>
        <button onClick={()=> initStatus()} >reinitialise</button>

    </>
  )
}

export default FirstState