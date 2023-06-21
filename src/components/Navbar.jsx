import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';


const Navbar = () => {


  const [toggleOn, settoggleOn] = useState(false)


const toggleMenu = () => {

  settoggleOn(!toggleOn)

}

const toggle = `togglingOff ${toggleOn ? "togglingMenu" : ""}`

  return (


    <>

    {/* phone Nav */}
<nav>

<div className="menu" onClick={toggleMenu}> 
{toggleOn ?  <i className="bi bi-x-lg"></i> : <i className="bi bi-list"></i>}
</div>

    <ul className={toggle}>
    <li className="nav-item"> <NavLink exact="true" to="/j-designer/" activeclassname="active" >  Home</NavLink></li>
         <li className="nav-item"> <NavLink to="/j-designer/services"  >  Servicios</NavLink></li>
         <li className="nav-item"> <NavLink to="/j-designer/portafolio"  >  Portafolio</NavLink></li>
         <li className="nav-item"> <NavLink to="/j-designer/about" >  Nosotros</NavLink></li>
         <li className="nav-item"> <NavLink to="/j-designer/contact" >  Contacto</NavLink></li>


       </ul>

     

       <div className="logo"></div>




     </nav>



{/* other device */}


<div className="devices">



<div className="logo"></div>



    <ul className="">
    <li className="nav-item"> <NavLink exact="true" to="/j-designer/" activeclassname="active" >  Home</NavLink></li>
         <li className="nav-item"> <NavLink to="/j-designer/services"  >  Servicios</NavLink></li>
         <li className="nav-item"> <NavLink to="/j-designer/portafolio"  >  Portafolio</NavLink></li>
         <li className="nav-item"> <NavLink to="/j-designer/about" >  Nosotros</NavLink></li>
         <li className="nav-item"> <NavLink to="/j-designer/contact" >  Contacto</NavLink></li>

       </ul>



     </div>




    </>

    )
}

export default Navbar