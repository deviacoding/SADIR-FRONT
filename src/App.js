import about from './assets/about.jpg';
import Header from './components/Header/Header';
import './App.css';
import LiMenu from './components/LiMenu/LiMenu';

function App() {

    // 1 class devient className
    // 2 un component commence par une Majuscule
    // 3 on referme les balises ( img / br / input )
    // 4 on importe une image comme un fichier js
    // 5 on supprime les commmentaires html
    // 6 style="height: 8px" devient style={{height : "8px"}} // 

  return (
    <div className="">

        <Header />

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

            <label for="Tracking"></label>
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

                        <div className="chiffre">
                            <h3 className="titre-225">225</h3>
                            <h4>SKilled Experts</h4>
                        </div>

                        <div className="chiffre">
                            <h3 className="titre-1050">1050</h3>
                            <h4>Happy Clients</h4>
                        </div>

                        <div className="chiffre">
                            <h3 className="titre-2500">2500</h3>
                            <h4>Complete Projects</h4>
                        </div>

                    </div>

                </div>

                <div className="recherche-quote">

                    <form>

                        <div>
                            <label for=""></label>
                            <input className="input-quote" type="" name="" id="" placeholder="Your Name" />
                        </div>

                        <br/>
                
                        <div>
                            <label for="Email"></label>
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

                            <input className="bouton-input" type="submit" value="Get A Quote"/>

                        </div>
                    
                    </form>

                </div>
                
            </div>

        </section>

        <section className="services">

            <div className="titre-services">

                <h3 className="our-services">
                    OUR SERVICES
                </h3>

                <h2 className="best">
                    Best Logistic Services
                </h2>

            </div>

        <div className="les-services">

            <div className="contenu-services">

                <div className="svg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style={{width: "30px"}}><path d="M480 192H365.7L260.6 8.1A16 16 0 0 0 246.7 0h-65.5c-10.6 0-18.3 10.2-15.4 20.4L214.9 192H112l-43.2-57.6c-3-4-7.8-6.4-12.8-6.4H16C5.6 128-2 137.8 .5 147.9L32 256 .5 364.1C-2 374.2 5.6 384 16 384H56c5 0 9.8-2.4 12.8-6.4L112 320h102.9l-49 171.6c-2.9 10.2 4.8 20.4 15.4 20.4h65.5c5.7 0 11-3.1 13.9-8.1L365.7 320H480c35.4 0 96-28.7 96-64s-60.7-64-96-64z"/></svg>
                    <h4 className="Air">
                        Air Freight
                    </h4>
                </div>

                <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet diam sea est diam</p>
                <a className="a-avion" href="">Read More</a>

            </div>

            <div className="contenu-services">

                <div className="svg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"style={{width: "30px"}}><path d="M496.6 372.6l70-70c16.9-16.9 9.9-45.8-12.8-53.1L512 236.1V96c0-17.7-14.3-32-32-32h-64V24c0-13.3-10.7-24-24-24H248c-13.3 0-24 10.7-24 24v40h-64c-17.7 0-32 14.3-32 32v140.1l-41.8 13.4c-22.8 7.3-29.8 36.2-12.8 53.1l70 70C125.8 416.3 85.6 448 24 448c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24 61 0 107.5-20.6 143.3-59.4C181.7 487.4 216 512 256 512h128c40 0 74.3-24.6 88.7-59.4C508.5 491.4 555 512 616 512c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24-60.8 0-101.5-31-119.4-75.4zM192 128h256v87.5l-118.2-38a32 32 0 0 0 -19.6 0L192 215.5V128z"/></svg>
                    <h4 className="Air">
                        Ocean<br />Freight
                    </h4>
                </div>

                <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet diam sea est diam</p>
                <a className="a-avion" href="">Read More</a>

            </div>

            <div className="contenu-services">

                <div className="svg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"style={{width: "30px"}}><path d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"/></svg>
                    <h4 className="Air">
                        Land<br />Transport
                    </h4>
                </div>

                <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet diam sea est diam</p>
                <a className="a-avion" href="">Read More</a>

            </div>

            <div className="contenu-services">

                <div className="svg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 616 512"style={{width: "30px;"}}><path d="M602 118.6L537.1 15C531.3 5.7 521 0 510 0H106C95 0 84.7 5.7 78.9 15L14 118.6c-33.5 53.5-3.8 127.9 58.8 136.4 4.5 .6 9.1 .9 13.7 .9 29.6 0 55.8-13 73.8-33.1 18 20.1 44.3 33.1 73.8 33.1 29.6 0 55.8-13 73.8-33.1 18 20.1 44.3 33.1 73.8 33.1 29.6 0 55.8-13 73.8-33.1 18.1 20.1 44.3 33.1 73.8 33.1 4.7 0 9.2-.3 13.7-.9 62.8-8.4 92.6-82.8 59-136.4zM529.5 288c-10 0-19.9-1.5-29.5-3.8V384H116v-99.8c-9.6 2.2-19.5 3.8-29.5 3.8-6 0-12.1-.4-18-1.2-5.6-.8-11.1-2.1-16.4-3.6V480c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32V283.2c-5.4 1.6-10.8 2.9-16.4 3.6-6.1 .8-12.1 1.2-18.2 1.2z"/></svg>
                    <h4 className="Air">
                        Cargo<br />Storage
                    </h4>
                </div>

                <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet diam sea est diam</p>
                <a className="a-avion" href="">Read More</a>

            </div>

        </div>

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

                    <li className="point-bateau">Best In Industry</li>
                    <li className="point-bateau">Emergency Services</li>
                    <li className="point-bateau">24/7 Customer Support</li>

                    <button className="button-learn">Learn More</button>

                </div>

            </div>

        </div>

        </section>

        <section className="price">

            <div className="titre-price">

                <h3>PRICING PLAN</h3>
                <h2 className="affordable">Affordable Pricing Packages</h2>

            </div>

            <div className="abonnement">

                <div className="basic">

                    <div className="le-prix">
                        49
                    </div>

                    <div className="titre-basic">
                        Basic
                    </div>

                    <button className="button-learn">Learn More</button>

                </div>

                <div className="preminum">

                    <div className="le-prix">
                        99
                    </div>

                    <div className="titre-preminum">
                        Preminum
                    </div>

                    <button className="button-learn">Learn More</button>

                </div>

                <div className="business">

                    <div className="le-prix">
                        149
                    </div>

                    <div className="titre-business">
                        Business
                    </div>

                    <button className="button-learn">Learn More</button>

                </div>

            </div>

        </section>
        
    </div>
  );
}

export default App;
