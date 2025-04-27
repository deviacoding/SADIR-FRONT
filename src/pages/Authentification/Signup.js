import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  let serverAddress = "http://localhost:8000";

  const handleSignup = () => {
    console.log(email)
    console.log(password)
    // faire une condition pour bloquer si jamais email ou password n'est pas rempli

        axios
          .post(`${serverAddress}/signup`, 
            { email : email, 
                password : password
            }
        )
          .then((response) => {
            console.log(response)
            alert(response.data.message)
          })
          .catch((error) => {
            console.log("error", error.response.data.message);
            alert(error.response.data.message)
          });


  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-6 border    ">
        <h1 className="text-center">S'inscrire</h1>

          <label className="form-label">email:</label>
          <input type="text" className="form-control" value={email} onChange={(e)=> setEmail(e.target.value)} />

          <label className="form-label">Password:</label>
          <input type="password" className="form-control" value={password} onChange={(e)=> setPassword(e.target.value)} />

          <button className="btn btn-info" onClick={()=> handleSignup()} >envoyer</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;