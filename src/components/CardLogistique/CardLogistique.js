import React from 'react'

const CardLogistique = (props) => {
    // console.log("props", props)
  return (


          <div className="contenu-services">

                <div className="svg" style={{borderRadius : "20px"}}>
                    {props.svg}
                    <h4 className="Air">
                        {props.title}
                    </h4>
                </div>

                <p>{props.p}</p>
                <a className="a-avion" href={props.href}>Read More</a>

            </div>



  )
}

export default CardLogistique