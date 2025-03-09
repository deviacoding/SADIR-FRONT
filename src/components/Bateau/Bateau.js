import React, {useState} from "react";
import featureImg from "../../assets/feature.jpg"

const Bateau = () => {

    const [listArg, setlistArg] = useState(["Best In Industry","Emergency Services","24/7 Customer Support"]);

    const handleListArg = () => {
        setlistArg(["Best In Industry","Best In Industry","Best In Industry"])
    }

  return (
    <section className="bateau" onClick={()=>handleListArg() }>
      <div className="background">
        <div className="img">
          <img className="img-bateau" src={featureImg} alt="" />
        </div>

        <div className="info-bateau">
          <div className="titre-bateau">
            <h3>WHY CHOOSE US</h3>

            <h2 className="faster-bateau">
              Faster, Safe and Trusted Logistics Services
            </h2>

            <p>
              Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore
              sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet
              dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed
              diam duo
            </p>

            { listArg.map((argument, index)=> (
                    <li key={index} className="point-bateau">{argument}</li>
                ))
            }

            {/* <li className="point-bateau">Best In Industry</li>
            <li className="point-bateau">Emergency Services</li>
            <li className="point-bateau">24/7 Customer Support</li> */}

            <button className="button-learn">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bateau;
