import React, { useState } from 'react'
import Scrollspy from '../helpers/Scrollspy'
import { useInView } from 'react-intersection-observer';
import { InView } from 'react-intersection-observer';
import { Parallax, Background } from 'react-parallax';
import { useTranslation } from 'react-i18next'; // Importamos useTranslation
import { Link } from 'react-router-dom';

// import es from './18next/es.json';







const Services = () => {

     
     const [effect, seteffect] = useState(false)

     const { t } = useTranslation(); // Obtenemos la función t() para traducir

     const servicesList = t('servicesList', { returnObjects: true });

     const change = (e) => {

        
          if (window.scrollY <= 430) {
               seteffect(false);
        
          } else {
               seteffect(true);
          }

     }        


     window.addEventListener("scroll", change)

     const effectServ = `offserviceH ${effect ? "serviceH" : ""}`


     return (
          <section className={effectServ}>





<div  className="strng" >  &lt;/&gt;
 </div>


<Parallax className="letterParallax"
 strength={-150}
 style={{
  position: 'relative',
  top:"0px"
  
}}>
     
     <Background className="letterServc">{t('services')}</Background>


    </Parallax>

    <InView triggerOnce="false" >
            {({ inView, ref, entry }) => (
    <ul className="servicesList">
        {servicesList.map((service, index) => (
        
              <li  className="cartas">
                <div className="carta2">
                     <div className="code">
                <i className={service.icon}></i>                          
                </div>
                  <h3>{t(service.title)}</h3>
                  <p>{t(service.description)}</p>
                  {service.points.map((point, i) => (
                    <p key={i}>
                      {t(point)} <i className="bi bi-check2"></i>
                    </p>
                  ))}
                  {service.buttonText && <Link className="btnS" to="/j-designer/services">{t(service.buttonText)}</Link>}
                </div>
              </li>
            
        ))}
      </ul>
)}
</InView>


          </section>
     )
}

export default Services