import React from 'react'
import about from '../assets/about.jpg';
import Header from '../components/Header/Header';
import LiMenu from '../components/LiMenu/LiMenu';
import PrincingPlan from '../components/PrincingPlan/PrincingPlan';
import Services from '../components/Services/Services';
import Quote from '../components/Quote/Quote';

const Website = () => {
    const [countCart, setCountCart] = React.useState(0);
    const [arguChoose] = React.useState(["Best In Industry", "Emergency Services", "24/7 Customer Support" ]);


    const updateCart = (number) => {
        setCountCart(countCart + number)
    }

  return (
    <div className="">

    <Header countCart={countCart} />

    <section className="menu">

        <div className="nav">


            <svg className="truck" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"/></svg>

            <h1 className="faster">
                FASTER
            </h1>
        * <div>
                <ul className="navigation-menu">
                    <LiMenu link={"/home"} name={"Home"} css={"a"} />
                    <LiMenu  link={"/About"} name={"About"} css={"a"} />
                    <LiMenu  link={"/Service"} name={"Service"} css={"a"} />
                    <LiMenu  link={"/Price"} name={"Price"} css={"a"} />
                    <LiMenu  link={"/Pages"} name={"Pages"} css={"a"} />
                    <LiMenu  link={"/Contact"} name={"Contact"} css={"a"} />
                </ul>
            </div> 

            <button className="button-menu">
                Get A <br/> Quote
            </button>

        </div>

    </section>

    <section className="recherche">

    <h2 className="safe-faster">
        Safe & Faster
    </h2>

    <h1 className="logistics">
        Logistics Services
    </h1>

    <form action="tracking">

        <label htmlFor="Tracking"></label>
        <input className="tracking" type="text" id="Tracking" name="Tracking" placeholder="Tracking Id"/>

        <input className="bouton" type="submit" value="Track & Trace"/>

    </form>

    </section>

    <section className="about-us">

        <div className="img-about">

            <img className="camion" src={about} alt=""/>

            <p className="p-about">25+ years experience</p>

        </div>

        <div className="info-about">

            <h3 className="titre-info">
                ABOUT US
            </h3>
                
            <h2 className="trusted-info">
                Trusted & Faster Logistic Service Provider    
            </h2>

            <p>Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo</p>

            <div className="play">

                <div className="shadow">

                    <div className="icon">

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style={{height: "15px", width: "30px"}}><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>

                    </div>

                </div>

                <h3 className="play-video">Play video</h3>

            </div>

        </div>

    </section>

    <Quote />

    <section className="services">

        <div className="titre-services">

            <h3 className="our-services">
                OUR SERVICES
            </h3>

            <h2 className="best">
                Best Logistic Services
            </h2>

        </div>

    <Services />

    </section>

    <section className="bateau">

    <div className="background">

        <div className="img">

            <img className="img-bateau" src="img/feature.jpg" alt="" />

        </div>

        <div className="info-bateau">

            <div className="titre-bateau">

                <h3>WHY CHOOSE US</h3>

                <h2 className="faster-bateau">
                    Faster, Safe and Trusted Logistics Services
                </h2>

                <p>Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo</p>

                {
                    arguChoose.map((argu, index)=> (
                        <li key={index} className="point-bateau">{argu}</li>  
                    ))
                }

                <button className="button-learn">Learn More</button>

            </div>

        </div>

    </div>

    </section>

    <PrincingPlan updateCart={updateCart} />

</div>
  )
}

export default Website