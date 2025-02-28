import React, {useState} from 'react'

const Toogle = () => {

    const [toogle, setToogle] = useState(false)
  return (

    <div>
        <h1 className="">Revelez votre votre mot de passe ? </h1>
        <button onClick={()=> setToogle(!toogle)} >  {toogle ? "Cacher" : "Appuiyez pour reveler"}      </button>

        {
            toogle && 
                <div>
                    <p>Ekdlkjsd45sdf54ewe</p>    
                </div>
            
        }

    </div>
    
  )
}

export default Toogle