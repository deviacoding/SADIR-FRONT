import React, {useState} from "react";
import MainComponent from "./MainComponent";
import TextAreaComponent from "./TextAreaComponent";
import FinalComponent from "./FinalComponent";


const SearchQuote = () => {

    const [GlobalState, setGlobalState] = useState({
        step: 1,
        inputName : "",
        inputEmail : "", 
        inputTextarea: "", 
        messageFinal : "Merci pour votre Devis, vous obtiendrez une reponse dans 24H"
    });

    const upStateStep = () => {
        setGlobalState((prevState)=>({...prevState, step : GlobalState.step+1 }))
    }

    const downStateStep = () => {
        setGlobalState((prevState)=>({...prevState, step : GlobalState.step-1 }))
    }

  return (
    <div className="recherche-quote"   >
        {/* <button onClick={()=>upStateStep() }>UpState</button> */}
        { GlobalState.step === 1 && (
             <MainComponent
                upStateStep={upStateStep}
             />
           ) 
        }

        { GlobalState.step === 2 && (
             <TextAreaComponent
             upStateStep={upStateStep}
             downStateStep={downStateStep}
             />
           ) 
        }

        { GlobalState.step === 3 && (
             <FinalComponent
                messageFinal={GlobalState.messageFinal}
             />
           ) 
        }

    </div>
  );
};

export default SearchQuote;
