import React, {useState} from 'react'

const Toogle = () => {
    const [toogle, setToogle] = useState(false)

    // console.log("toogle", toogle)


  return (
    <div>
        <h1>Cliquez pour reveler votre mot de passe</h1>
        <button onClick={()=> setToogle(!toogle)}> { toogle === true ? "Cacher mon mpd" : "Appuiyez pour reveler"   }   </button>

        {
            toogle === true && (
                <p>asas65df46as54f6s54f</p>
            )
        }




    </div>
  )
}

export default Toogle