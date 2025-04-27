import React, {useState} from 'react'
import GrandP from './GrandP'

const ArriereGP = () => {

  //1
    const [secret, setSecret] = useState("")

    //2
    const [RecupSouhait, setRecupSouhait] = React.useState()

    const sendSecret = () => {
      setSecret("Il y'a des lingots d'or cacher dans la cave")
    }

    const getMessagePetitPetitfils = (messagePF) => {
      console.log(messagePF)
      setRecupSouhait(messagePF)
    }
    
  return (
    <div>
      <br />
      <button onClick={()=> sendSecret()}>Envoyer le props</button>
        <GrandP 
            secret={secret}
            getMessagePetitPetitfils={getMessagePetitPetitfils}
        />
        <br />
        
        { RecupSouhait && <div>Si souhait je l'afficherais: {RecupSouhait}</div> } 
        
    </div>
  )
}

export default ArriereGP