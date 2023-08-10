import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import SliderReview from '../components/SliderReview'
import ContactForm from '../components/ContactForm';
import { AboutParallax } from '../helpers/AboutParallax';
import { useTranslation } from 'react-i18next'; // Importamos useTranslation
import { Parallax, Background } from 'react-parallax';







const About = () => {


  const { t } = useTranslation(); // Obtenemos la función t() para traducir

      
  const [letra, setLetra] = useState("Quien Soy");

  const [isDescriptionA, setisDescriptionA] = useState(false);


  const handleDescriptionToggleA = () => {
    setisDescriptionA(!isDescriptionA);
  };






  useEffect(() => {
   
    const interval = setInterval(() => {
      setLetra(letra => {
        const letras = [t('aboutMe.heading'), 'JP Designer'];
        const letraIndex = letras.indexOf(letra); // obtiene el indice de la letra actual
        return letras[(letraIndex + 1) % letras.length]; // retorna la siguiente letra en el arreglo
      });

    }, 3000); // cambia cada 4 segundos

    return () => clearInterval(interval); // limpiar el intervalo
  }, []);

  return (

    
    <>


      <section id="about">
      <div className="aboutFront">
     



<AboutParallax/>
   
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


      </div>


    
        <div className="aboutFrontDiv ">

    
    <div className="separate">
          <h1>   <span>{letra}</span> </h1>

          <br />

         
          <p className="me">{t('aboutMe.description1')}</p>

<p className="me">{t('aboutMe.description2')}</p>

<p>{t('aboutMe.description3')}</p>

              {isDescriptionA && (

                
                <div className="description">

<p>{t('aboutMe.additionalDescription1')}</p> 
                <p>{t('aboutMe.additionalDescription2')}</p>
                 
                </div>
              )}


<button className="mb-3 p-2 " onClick={handleDescriptionToggleA}>
              {isDescriptionA
                ? t('aboutMe.toggleButtonShowLess')
                : t('aboutMe.toggleButtonShowMore')}
            </button>

              </div>

          <ul className="experience">


          
            <li className="hability">
            
            <h3>{t('aboutMe.skillsHeading')}</h3>

              <span>HTML <div className=""> <img src="skills/html.jpg" alt="" /></div></span>
              <span>CSS <div className=""><img src="skills/csss.jpg" alt="" /></div></span>
              <span>JAVASCRIPT <div className=""><img src="skills/javascript.jpg" alt="" /></div></span>
              <span>J-QUERTY <div className=""><img src="skills/jquery.jpg" alt="" /></div></span>
              <span>REACT JS <div className=""><img src="skills/reactjs.jpg" alt="" /></div></span>
              <span>NODE JS <div className=""><img src="skills/nodejs.jpg" alt="" /></div></span>
              <span>MONGO DB <div className=""><img src="skills/mongodb.jpg" alt="" /></div></span>
              <span>GITHUB <div className=""><img src="skills/github.jpg" alt="" /></div></span>
              <span>BOOSTRAP <div className=""><img src="skills/boostrap.jpg" alt="" /></div></span>
              <span>TAILWIND <div className=""><img src="skills/tailwind.jpg" alt="" /></div></span>



            </li>
      


          </ul>




     
          <div className="reviewDiv" >


         
<SliderReview/>


</div>


        </div>  

        <ContactForm/>


      </section>
     

    </>
    
    
    
    )
}

export default About