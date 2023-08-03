import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';


const Navbar = () => {


  const [menu, setmenu] = useState(true);

  const [toggleOn, settoggleOn] = useState(true)

  useEffect(() => {
    settoggleOn(false); // Asegurarse de que el menú esté oculto al cargar la página

    window.scrollTo({
      top: 0,
      behavior: 'auto', // Esto agrega el efecto suave al desplazamiento
    });


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
    <li className="nav-item" onClick={handleScroll}> <NavLink  exact to="/j-designer/" activeclassname="active" >  Home</NavLink></li>
         <li className="nav-item" onClick={handleScroll}> <NavLink exact to="/j-designer/services" activeclassname="active"   >  Servicios</NavLink></li>
         <li className="nav-item" onClick={handleScroll}> <NavLink exact to="/j-designer/portafolio" activeclassname="active"   >  Portafolio</NavLink></li>
         <li className="nav-item" onClick={handleScroll}> <NavLink  exact to="/j-designer/about" activeclassname="active" >  Nosotros</NavLink></li>
         <li className="nav-item" onClick={handleScroll}> <NavLink exact to="/j-designer/contact" activeclassname="active"  >  Contacto</NavLink></li>


       </ul>

     

       <div className="logo"></div>




     </nav>



{/* other device */}


<div className="devices">



<div className="logo"></div>



    <ul className="">
    <li className="nav-item" onClick={handleScroll}> <NavLink  exact to="/j-designer/" activeclassname="active" >  Home</NavLink></li>
         <li className="nav-item" onClick={handleScroll}> <NavLink exact to="/j-designer/services" activeclassname="active"   >  Servicios</NavLink></li>
         <li className="nav-item" onClick={handleScroll}> <NavLink exact to="/j-designer/portafolio" activeclassname="active"   >  Portafolio</NavLink></li>
         <li className="nav-item" onClick={handleScroll}> <NavLink  exact to="/j-designer/about" activeclassname="active" >  Nosotros</NavLink></li>
         <li className="nav-item" onClick={handleScroll}> <NavLink exact to="/j-designer/contact" activeclassname="active"  >  Contacto</NavLink></li>

       </ul>



     </div>




    </>

    )
}

export default Navbar