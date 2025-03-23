import React from 'react'

const TextAreaComponent = (props) => {
    // console.log("TextAreaComponent props", props)
  return (
    <div>
        <h1>TextAreaComponent</h1>
              <div>
        <label for=""></label>
        <input
          className="input-quote"
          type=""
          name=""
          id=""
          placeholder="Your Name"
        />
      </div>

      <br />

      <div>
        <label for="Email"></label>
        <input
          className="input-quote"
          type="email"
          name=""
          id=""
          placeholder="Your Email"
        />
      </div>

      <br />

      <div className="select">
        <select id="" name="service" required="">
          <option value="" disabled="" selected="">
            Select A Service
          </option>
          <option value="">Je sais pas</option>
          <option value="">Toujours pas</option>
        </select>
      </div>

      <br />

      <div className="bouton-quote">
        <button className="bouton-input my-1" onClick={()=> props.upStateStep() } >Etape Suivante</button>
        <button className="bouton-input my-1" onClick={()=> props.downStateStep() } >Etape Precedente</button>
      </div>
    </div>
  )
}

export default TextAreaComponent