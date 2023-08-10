import React from 'react'
import { Parallax, Background } from 'react-parallax';
import { useTranslation } from 'react-i18next'; // Importamos useTranslation


export const AboutParallax = () => {

  const { t } = useTranslation(); // Obtenemos la función t() para traducir

  const start = () => {
    // Realizar el desplazamiento suave hasta 1000 píxeles desde la parte superior del documento.
    window.scrollTo({
      top: 600,
      behavior: 'auto', // Esto agrega el efecto suave al desplazamiento
    });
  };

  
  return (


    <div className="out">

  

    <Parallax
      className="floate"
      strength={-600}
      style={{
        position: 'absolute',
       bottom:"0px"
      }}
     >



<Background className="span1"> 
<img src="skills/techno.jpg" alt=""  /></Background>






    </Parallax>


   
         <strong >{t('aboutMe.about')}</strong>

       <div className="aboutimg">

         <img src="img/about/me.jpg" alt="" />


       </div>


       <p>{t('aboutMe.description0')}</p>

     <button onClick={start} className="know">{t('aboutMe.toggleButtonKnowMore')}</button>
     
      </div>

        )
}
