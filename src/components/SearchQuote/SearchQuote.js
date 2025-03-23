import React, {useState} from "react";
// import MainComponent from "./MainComponent";
// import TextAreaComponent from "./TextAreaComponent";
import FinalComponent from "./FinalComponent";
import axios from "axios"


const SearchQuote = () => {

    const [GlobalState, setGlobalState] = useState({
        step: 1,
        inputName : "",
        inputEmail : "", 
        inputPhone: "",
        inputService: "",
        inputTextarea: "", 
        messageFinal : "Merci pour votre Devis, vous obtiendrez une reponse dans 24H"
    });

    const upStateStep = () => {

      const dataForAxios = {
        "name": GlobalState.inputName,
        "email": GlobalState.inputEmail,
        "phone": GlobalState.inputPhone,
        "service":GlobalState.inputService    
      }

      axios.post('http://localhost:8000/quotes', dataForAxios)
      .then(function (response) {
        console.log(response);
        setGlobalState((prevState)=>({...prevState, step : GlobalState.step+1 }))        
      })
      .catch(function (error) {
        console.log(error);
      });

    }

    const downStateStep = () => {
        setGlobalState((prevState)=>({...prevState, step : GlobalState.step-1 }))
    }

    const handleInputName = (e) => {
      console.log("e.target", e.target)
      setGlobalState((prevState)=> {
        console.log("prevState", prevState)
        return ({
          ...prevState, 
          inputName : e.target.value
        })
      })
    }

    const handleChange = (e) => {
      console.log(e.target)
      const {name, value } = e.target
      setGlobalState((prevState)=> ({
        ...prevState,
        [name] : value
      }))
      console.log(GlobalState)
      
    }

  return (
    <div className="recherche-quote"   >
        {/* <button onClick={()=>upStateStep() }>UpState</button> */}
        { GlobalState.step === 1 && (
             <>
             <div>
               <label htmlFor="name"></label>
               <input
                 className="input-quote"
                 type="text"
                 name="inputName"
                 id="name"
                 placeholder="Your Name"
                 value={GlobalState.inputName}
                 onChange={handleInputName}
               />
             </div>
       
             <br />
       
             <div>
               <label htmlFor="Email"></label>
               <input
                 className="input-quote"
                 type="email"
                 name="inputEmail"
                 id="Email"
                 placeholder="Your Email"
                 onChange={handleChange}
                 value={GlobalState.inputEmail}
               />
             </div>
             
             <br />

             <div>
               <label htmlFor="Phone"></label>
               <input
                 className="input-quote"
                 type="tel"
                 name="inputPhone"
                 id=""
                 placeholder="Your Phone Number"
                 onChange={handleChange}
                 value={GlobalState.inputPhone}
               />
             </div>
       
             <br />
       
             <div className="select">
               <select id="" 
               name="inputService"
               required
               value={GlobalState.inputService}
               onChange={handleChange}
               
               >
                 <option value="" disabled="" selected="">
                   Select A Service
                 </option>
                 <option value="Paquebot">Paquebot</option>
                 <option value="Container Maritime">Container Maritime</option>
               </select>
             </div>
       
             <br />
       
             <div className="bouton-quote">
               <button className="bouton-input" onClick={()=> upStateStep()} >Envoyer</button>
             </div>
       
       
           </>
           ) 
        }

        { GlobalState.step === 2 && (
             <FinalComponent
                messageFinal={GlobalState.messageFinal}
             />
           ) 
        }


        {/* { GlobalState.step === 2 && (
             <TextAreaComponent
             upStateStep={upStateStep}
             downStateStep={downStateStep}
             />
           ) 
        } */}



    </div>
  );
};

export default SearchQuote;
