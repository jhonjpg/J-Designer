import React, { useState } from 'react'
import { Parallax, Background } from 'react-parallax';
import ContactForm from '../components/ContactForm';
import { useTranslation } from 'react-i18next'; // Importamos useTranslation



const Services = () => {

  const { t } = useTranslation(); // Obtenemos la función t() para traducir



        const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
        const [isDescriptionOpen2, setIsDescriptionOpen2] = useState(false);
        const [isDescriptionOpen3, setIsDescriptionOpen3] = useState(false);


        const handleDescriptionToggle = () => {
          setIsDescriptionOpen(!isDescriptionOpen);
        };


        const handleDescriptionToggle2 = () => {
                setIsDescriptionOpen2(!isDescriptionOpen2);
              };

              

        const handleDescriptionToggle3 = () => {
                setIsDescriptionOpen3(!isDescriptionOpen3);
              };
      

        
  return (

    <>


<section id="services">

<div className="servicesFront">



        <h2>{t('services')}</h2>


    <Parallax
      className="float"
      strength={-2200}
      style={{
        position: 'absolute',
       botom:"0px"
      }}
     >



<Background className="spancell">  <img src="https://cdn.pixabay.com/photo/2016/10/05/17/11/smartphone-1717163_1280.png" alt=""  />
</Background>






    </Parallax>



    <Parallax
      className="float"
      strength={2200}
      style={{
        position: 'absolute',
       botom:"0px"
      }}
     >



<Background className="spantablet">  <img src="https://cdn.pixabay.com/photo/2016/10/05/17/17/tablet-1717178_1280.png" alt=""  />
</Background>





    </Parallax>






</div>


<strong className="kindOf">Tipo de Servicios</strong>

<ul   className="servicesListServ">





   

<li className={`cartasServ ${isDescriptionOpen ? 'cartasServOpen' : ''}`}>
            <div className="carta2">
              <div className="code">
                <i className="bi bi-braces"></i>
              </div>
              <h3> Diseño y Desarrollo Web</h3>
              <button onClick={handleDescriptionToggle}>
                {isDescriptionOpen ? 'ver menos' : 'ver mas'}
              </button>
              {isDescriptionOpen && (
                <div className="description">
                  <div className="descLetter">
                    Como diseñador web, soy un profesional altamente creativo y versátil que combina habilidades en diseño gráfico, programación y usabilidad para conceptualizar, planificar y construir sitios web visualmente cautivadores, intuitivos y efectivos que satisfacen las necesidades y objetivos únicos de tus clientes, brindando una experiencia de usuario excepcional y una presencia en línea impactante. Tu capacidad para fusionar estética, funcionalidad y tecnología te permite traducir ideas en interfaces digitales coherentes y atractivas, empleando una variedad de herramientas y lenguajes de programación, y siempre manteniéndote al tanto de las últimas tendencias y avances en diseño y desarrollo web para ofrecer soluciones innovadoras que impulsen el éxito en el mundo digital.
                  </div>
                  <div className="descimg"></div>
                </div>
              )}
            </div>
          </li>


          <li   className="cartasServ">
                         <div className="carta2">

                              <div className="code">
                                <i className="bi bi-activity"></i>                         
                               </div>
                               <h3> Optimización para Motores de Búsqueda (SEO)</h3>
                              <p>Ayudar a mejorar el posicionamiento de los sitios web en los motores de búsqueda mediante prácticas de SEO y optimización de contenido
                              </p>
                              <p>Impulsar la clasificación de Google
 <i className="bi bi-check2"></i></p>
                              <p>Optimización de velocidad de página
 <i className="bi bi-check2"></i></p>
                                                     
                             
</div>
                    </li>





                    <li className={`cartasServ ${isDescriptionOpen2 ? 'cartasServOpen' : ''}`}>

                         <div className="carta2">

                         <div className="code">
                         <i className="bi bi-phone"></i>
                               </div>
                              <h3> Diseño Responsivo</h3>
                              <button onClick={handleDescriptionToggle2}>
                {isDescriptionOpen2 ? 'ver menos' : 'ver mas'}
              </button>

              {isDescriptionOpen2 && (
                <div className="description">
                  <div className="descLetter">
                  Como diseñador web especializado en diseño responsivo, tu trabajo destaca por tu habilidad para crear sitios web que se adaptan perfectamente a diferentes dispositivos y tamaños de pantalla. Tu enfoque en la experiencia del usuario te ha permitido diseñar interfaces intuitivas y visualmente atractivas que garantizan una navegación fluida y una interacción cómoda en computadoras de escritorio, tabletas y teléfonos móviles.                  </div>
                  <div className="descimg">



                  </div>
                </div>
              )}
            </div>
                    </li>



                    <li   className="cartasServ">
                         <div className="carta2">

                         <div className="code">
                                  <i className="bi bi-crop"></i>                  
                               </div>
                              <h3> UI/UX Diseno</h3>
                              <p>Disenamos y Desarrollamos poderosos y modernos sitios web para todo tipo de negocios
                              </p>
                              <p>Diseno de Escritorio <i className="bi bi-check2"></i></p>
                              <p>Diseno de telefono <i className="bi bi-check2"></i></p>
                              <p>Diseno de tablet <i className="bi bi-check2"></i></p>
                             
            </div>
                    </li>






                    <li className={`cartasServ ${isDescriptionOpen3 ? 'cartasServOpen' : ''}`}>

<div className="carta2">

<div className="code">
<i className="bi bi-people"></i>                               </div>
     <h3> Consultoría y Asesoramiento</h3>
     <button onClick={handleDescriptionToggle3}>
{isDescriptionOpen3 ? 'ver menos' : 'ver mas'}
</button>

{isDescriptionOpen3 && (
<div className="description">
<div className="descLetter">
Como consultor y asesor de páginas web, tu trabajo se destaca por brindar una guía experta y estratégica a tus clientes, ayudándoles a maximizar el potencial de sus sitios web y lograr resultados significativos en el mundo digital. Tu enfoque va más allá del diseño y desarrollo, ya que te centras en entender las necesidades y objetivos únicos de cada cliente para ofrecer soluciones personalizadas que impulsen su presencia en línea.                  </div>
<div className="descimg2"></div>
</div>
)}
</div>
</li>





                    <li   className="cartasServ">



                         <div className="carta2">

                         <div className="code">
                         <i className="bi bi-arrow-clockwise"></i>                               </div>
                              <h3> Mantenimiento y Actualización de Sitios Web</h3>
                              <button>ver mas</button>

                         </div>  </li>











               </ul>






<ContactForm/>




</section>



</>    
  )
}

export default Services