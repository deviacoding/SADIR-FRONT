import React, { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'

const FirstState = () => {
    const [status, setStatus] = useState("Non lu")
    const handleClick = () => {
      setStatus("Lu")
    }
    const reInitState = () => {
      setStatus("Non lu")
    }

    const codeString = `
    const [status, setStatus] = useState("Non lu")
    const handleClick = () => {
      setStatus("Lu")
    }
    const reInitState = () => {
      setStatus("Non lu")
    }
    `

    return (
      <div className="container">
        <button className="btn btn-primary" onClick={() => handleClick()}>{status}</button>
        <button onClick={() => reInitState()}>marquer come non lu</button>
        <SyntaxHighlighter language="javascript" style={dark}>
          {codeString}
        </SyntaxHighlighter>
      </div>
    )
}

export default FirstState