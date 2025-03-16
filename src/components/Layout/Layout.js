import React from "react";
import NavbarBootstrap from "../Navbar/NavbarBootstrap";
import Footer from "../Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = (props) => {
  // console.log("Layout", props.navbar, props.footer);

//   d-flex: Applique le modèle de boîte flexible (flexbox) à l'élément.
//  flex-column: Dispose les enfants de l'élément en colonne.
//  min-vh-100: Définit la hauteur minimale de l'élément à 100% de la hauteur de la fenêtre.
//  flex-grow-1: Permet à l'élément main de croître pour occuper l'espace disponible.


  return (
    <div className="d-flex flex-column min-vh-100">
      {props.navbar && <NavbarBootstrap />}
      <main className="flex-grow-1">
        {props.children}
      </main>
      {props.footer && <Footer />}
    </div>
  );
};

export default Layout;