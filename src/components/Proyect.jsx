import React, { useState } from 'react'
import Proyects from '../helpers/proyects.json';
import { InView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next'; // Importamos useTranslation


const Proyect = () => {


  const { t } = useTranslation(); // Obtener la función t() para traducir

    const [activeComponent, setActiveComponent] = useState("all");

    function handleComponentClick(componentName) {
      setActiveComponent(componentName);
    }



     const [effectCateg, seteffectCateg] = useState(false)

     const change = (e) => {
      const isMobile = window.innerWidth <= 800; // Establece el ancho máximo para considerar como dispositivo móvil (puedes ajustar este valor según tus necesidades).
    
      if (isMobile) {
        // Valores para dispositivos móviles
        if (window.scrollY <= 3500) {
          seteffectCateg(false);
        } else {
          seteffectCateg(true);
        }
      } else {
        // Valores para dispositivos no móviles (escritorio, tabletas grandes, etc.)
        if (window.scrollY <= 1300) {
          seteffectCateg(false);
        } else {
          seteffectCateg(true);
        }
      }
    }

     window.addEventListener("scroll", change)

  
    const effCategory = `offcategorySection ${effectCateg ? "categorySection" : ""}`

  
  return (

    <>
<section className="categorySection">



<InView  triggerOnce="false" >
            {({ inView, ref, entry }) => (

<div ref={ref} className={inView ? 'strng' : 'offstrng'} >  &lt;/&gt;
 </div>

)}
</InView>


<InView triggerOnce="false" >
            {({ inView, ref, entry }) => (

<strong ref={ref} className={inView ? 'strongCategory' : 'offstrongCategory'}>{t("projects")}</strong>

)}
</InView>


<div id="categorys">
<ul>
            <li className="" onClick={() => handleComponentClick('all')}>
              {t('categories.all')}
            </li>
            <li className="" onClick={() => handleComponentClick('beauty')}>
              {t('categories.beauty')}
            </li>
            <li className="" onClick={() => handleComponentClick('foods')}>
              {t('categories.foods')}
            </li>
            <li className="" onClick={() => handleComponentClick('laws')}>
              {t('categories.laws')}
            </li>
            <li className="" onClick={() => handleComponentClick('medical')}>
              {t('categories.medical')}
            </li>
            <li className="" onClick={() => handleComponentClick('media')}>
              {t('categories.media')}
            </li>
       
          </ul>


</div>


<InView triggerOnce="false">
  {({ inView, ref, entry }) => (
    <div ref={ref} className={inView ? 'fullProyects' : 'offCon'}>
      {Proyects.proyectos.map((proyecto, index) => {
        if (activeComponent === 'all' || activeComponent === proyecto.categoria) {
          return (
            <div key={index} className="proyecto">
              <h3>{proyecto.nombre}</h3>
              <p>{proyecto.descripcion}</p>

              <a className="containerProyects" href={proyecto.link} target="_blank">
                <div className="proyects">
                  <img src={proyecto.imagen} alt="" />
                </div>

                <div className="proyectSmall">
                  <img src={proyecto.imagen2} alt="" />
                </div>
              </a>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  )}
</InView>


</section>

</>
)
}

export default Proyect