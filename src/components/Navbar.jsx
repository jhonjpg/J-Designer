import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';


const Navbar = () => {


  const [menu, setmenu] = useState(true);

  const [toggleOn, settoggleOn] = useState(true)

  useEffect(() => {
    settoggleOn(false); // Asegurarse de que el menú esté oculto al cargar la página
  }, []);



const change = (e) => {
  if (window.scrollY >= 200) {

  setmenu(false)
} else {
  setmenu(true)

}

}

window.addEventListener("scroll", change)




const toggleMenu = () => {

  settoggleOn(!toggleOn)

}


const handleScroll = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'auto' // Scroll instantáneo, sin suavizado
  });
}



const toggle = `togglingOff ${toggleOn ? "togglingMenu" : ""}`

  return (


    <>

    {/* phone Nav */}
    <nav className={menu ? "nav " : "nav activated"}  >

<div className="menu" onClick={toggleMenu}> 
{toggleOn ?  <i className="bi bi-x-lg"></i> : <i className="bi bi-list"></i>}
</div>

    <ul onClick={toggleMenu} className={toggle}>
    <li className="nav-item" onClick={handleScroll}> <NavLink exact="true" to="/j-designer/" activeclassname="active" >  Home</NavLink></li>
         <li className="nav-item" onClick={handleScroll}> <NavLink to="/j-designer/services"  >  Servicios</NavLink></li>
         <li className="nav-item" onClick={handleScroll}> <NavLink to="/j-designer/portafolio"  >  Portafolio</NavLink></li>
         <li className="nav-item" onClick={handleScroll}> <NavLink to="/j-designer/about" >  Nosotros</NavLink></li>
         <li className="nav-item" onClick={handleScroll}> <NavLink to="/j-designer/contact" >  Contacto</NavLink></li>


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