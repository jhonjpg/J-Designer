import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';


const Navbar = () => {


  const [menu, setmenu] = useState(true);

  const [toggleOn, settoggleOn] = useState(true)

    // Estado para controlar el tema o color del proyecto
    const [theme, setTheme] = useState(true);

  

  useEffect(() => {
    settoggleOn(false); // Asegurarse de que el menú esté oculto al cargar la página

    window.scrollTo({
      top: 0,
      behavior: 'auto', // Esto agrega el efecto suave al desplazamiento
    });


  }, []);



  const toggleTheme = () => {

    setTheme(!theme);

    const root = document.querySelector(':root');
    if (theme) {
      root.style.setProperty('--dark-color', 'rgb(1, 1, 1)');
      root.style.setProperty('--social-media', 'white');
      root.style.setProperty('--letter-dark', 'white');
      root.style.setProperty('--shadow-color', 'rgba(25, 25, 25, 0.212)');
      root.style.setProperty('--text-color', 'black');

    } else {
      root.style.setProperty('--dark-color', 'rgb(230, 230, 230)');
      root.style.setProperty('--social-media', 'rgb(29, 29, 29)');
      root.style.setProperty('--letter-dark', 'rgb(31, 31, 31)');
      root.style.setProperty('--shadow-color', 'rgba(235, 233, 233, 0.212)');
      root.style.setProperty('--text-color', 'black');

    }
    

    console.log(theme)

  };

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




const toggle = `togglingOff ${toggleOn ? "togglingMenu" : ""}`

  return (


    <>

    {/* phone Nav */}
    <nav className={menu ? "nav " : "nav activated"}  >

<div className="menu" onClick={toggleMenu}> 
{toggleOn ?  <i className="bi bi-x-lg"></i> : <i className="bi bi-list"></i>}
</div>

    <ul onClick={toggleMenu} className={toggle}>
    <li className="nav-item" > <NavLink  exact="true" to="/j-designer/" activeclassname="active" >  Home</NavLink></li>
         <li className="nav-item" > <NavLink  to="/j-designer/services" activeclassname="active"   >  Servicios</NavLink></li>
         <li className="nav-item" > <NavLink  to="/j-designer/portafolio" activeclassname="active"   >  Portafolio</NavLink></li>
         <li className="nav-item" > <NavLink   to="/j-designer/about" activeclassname="active" >  Nosotros</NavLink></li>
         <li className="nav-item" > <NavLink  to="/j-designer/contact" activeclassname="active"  >  Contacto</NavLink></li>


    
       </ul>

       {/* <label onClick={toggleTheme}  className="switch">
    <input type="checkbox"/>
    <span className="slider"></span>
</label> */}

       <div className="logo"></div>




     </nav>



{/* other device */}


<div className="devices">



<div className="logo"></div>



    <ul className="">
    <li className="nav-item" > <NavLink  exact="true" to="/j-designer/" activeclassname="active" >  Home</NavLink></li>
         <li className="nav-item" > <NavLink  to="/j-designer/services" activeclassname="active"   >  Servicios</NavLink></li>
         <li className="nav-item" > <NavLink  to="/j-designer/portafolio" activeclassname="active"   >  Portafolio</NavLink></li>
         <li className="nav-item" > <NavLink   to="/j-designer/about" activeclassname="active" >  Nosotros</NavLink></li>
         <li className="nav-item" > <NavLink  to="/j-designer/contact" activeclassname="active"  >  Contacto</NavLink></li>


       </ul>



     </div>




    </>

    )
}

export default Navbar