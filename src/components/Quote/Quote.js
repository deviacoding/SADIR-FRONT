import React,  {useState} from 'react'
import SearchQuote from './SearchQuote'

const Quote = () => {

    const [threeQuote] = useState([
        {number: 225, title : "SKilled Experts"}
        , 
        {number: 1050, title : "Happy Clients"}
        , 
        {number: 2500, title : "Complete Projects"}])

    const [state, setState] = useState({
        step: 1,
        nameButton1: "Continue",
        nameButton2: "Finaliser",
    })

    

  return (
    <section className="quote">

        <div className="get">

            <div className="info-quote">

                <h3 className="titre-quote">
                    GET A QUOTE
                </h3>

                <h2 className="request">
                    Request A Free Quote
                </h2>

                <p>Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo</p>

                <div className="resulta">

                    {
                        threeQuote.map((item, index)=> (
                            <div key={index} className="chiffre">
                                <h3 className="titre-225">{item.number}</h3>
                                <h4>{item.title}</h4>
                            </div>
                        ))
                    } 

                </div>

            </div>

            <div className="recherche-quote">

                <SearchQuote />        

            </div>
            
        </div>

    </section>
  )
}

export default Quote