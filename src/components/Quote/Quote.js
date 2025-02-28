import React,  {useState} from 'react'

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

                {  state.step === 1 && (
                        <>
                        <div>
                            <label htmlFor=""></label>
                            <input className="input-quote" type="" name="" id="" placeholder="Your Name" />
                        </div>
    
                        <br/>
                
                        <div>
                            <label htmlFor="Email"></label>
                            <input className="input-quote" type="email" name="" id="" placeholder="Your Email" />
                        </div>
    
                        <br/>
    
                        <div className="select">
    
                            <select id="" name="service" required="">
                                <option value="" disabled="" selected="">Select A Service</option>
                                <option value="">Je sais pas</option>
                                <option value="">Toujours pas</option>
                            </select>
    
                        </div>
    
                        <br/>
                
                        <div className="bouton-quote">
    
                            <button className="bouton-input" onClick={()=> setState((prevState)=> ({...prevState, step: 2  })  ) } >{state.nameButton1}</button>
    
                        </div>
    
                    </>
                    )
                }
                {  state.step === 2 && (
                        <>
                        <div>
                            <label htmlFor=""></label>
                            <textarea className="input-quote" type="" name="" id="" placeholder="Your Message" />
                        </div>
    
                        <br/>
                

    
                        <br/>
                
                        <div className="bouton-quote">
    
                            <button className="bouton-input my-2" onClick={()=> setState((prevState)=> ({...prevState, step: 1  })  ) } >Retourner</button>
                            <br />
                            <button className="bouton-input" onClick={()=> setState((prevState)=> ({...prevState, step: 3  })  ) } >{state.nameButton2}</button>
    
                        </div>
    
                    </>
                    )
                }
                {  state.step === 3 && (
                        <>
                        <h5>Merci d'avoir rempli ce formulaire une reponse vous sera addresser sous 24h</h5>
    
                        <br/>
                

    
                        <br/>

                    </>
                    )
                }

                
        

            </div>
            
        </div>

    </section>
  )
}

export default Quote