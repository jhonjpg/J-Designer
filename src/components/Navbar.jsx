import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from '../18n';




const Navbar = () => {


  const [menu, setmenu] = useState(true);

  const [toggleOn, settoggleOn] = useState(true)

    const [currentLanguage, setCurrentLanguage] = useState('es');

  

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

const { t } = useTranslation();

   // Función para cambiar el idioma
   const changeToEnglish = () => {
    i18n.changeLanguage('en');
    setCurrentLanguage('en');
  };


  const changeToSpanish = () => {
    i18n.changeLanguage('es');
    setCurrentLanguage('es');
  };

  const buttonText = currentLanguage === 'es' ? 'English' : ' Español';





const toggle = `togglingOff ${toggleOn ? "togglingMenu" : ""}`

  return (


    <>

    {/* phone Nav */}
    <nav className={menu ? "nav " : "nav activated"}  >

<div className="menu" onClick={toggleMenu}> 
{toggleOn ?  <i className="bi bi-x-lg"></i> : <i className="bi bi-list"></i>}
</div>

    <ul onClick={toggleMenu} className={toggle}>
    <li className="nav-item" > <NavLink  exact="true" to="/j-designer/" activeclassname="active" >  {t('home')}</NavLink></li>
         <li className="nav-item" > <NavLink  to="/j-designer/services" activeclassname="active"   >  {t('services')}</NavLink></li>
         <li className="nav-item" > <NavLink  to="/j-designer/portafolio" activeclassname="active"   >  {t('portfolio')}</NavLink></li>
         <li className="nav-item" > <NavLink   to="/j-designer/about" activeclassname="active" >  {t('about')}</NavLink></li>
         <li className="nav-item" > <NavLink  to="/j-designer/contact" activeclassname="active"  >  {t('contact')}</NavLink></li>


         <button onClick={currentLanguage === 'es' ? changeToEnglish : changeToSpanish}>

            {buttonText}
          </button>
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

<button onClick={currentLanguage === 'es' ? changeToEnglish : changeToSpanish}>
Idioma:

            {buttonText}
          </button>

    <ul className="">
    <li className="nav-item" > <NavLink  exact="true" to="/j-designer/" activeclassname="active" >  {t('home')}</NavLink></li>
         <li className="nav-item" > <NavLink  to="/j-designer/services" activeclassname="active"   >  {t('services')}</NavLink></li>
         <li className="nav-item" > <NavLink  to="/j-designer/portafolio" activeclassname="active"   >  {t('portfolio')}</NavLink></li>
         <li className="nav-item" > <NavLink   to="/j-designer/about" activeclassname="active" >  {t('about')}</NavLink></li>
         <li className="nav-item" > <NavLink  to="/j-designer/contact" activeclassname="active"  >  {t('contact')}</NavLink></li>


       </ul>



     </div>




    </>

    )
}

export default Navbar