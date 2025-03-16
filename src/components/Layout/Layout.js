import React from 'react'
import NavBarB from '../NavbarB/NavbarB'
import Footer from '../Footer/Footer'

const Layout = (props) => {
    console.log(props, "props")
  return (
    <>
        <NavBarB />
        {props.children}
        <Footer />
    </>
  )
}

export default Layout