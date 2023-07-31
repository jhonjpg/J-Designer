import React, { useState } from 'react'
import Scrollspy from '../helpers/Scrollspy'
import { useInView } from 'react-intersection-observer';
import { InView } from 'react-intersection-observer';
import { Parallax, Background } from 'react-parallax';





const Services = () => {

     const [effect, seteffect] = useState(false)

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





<ul   className="servicesList">

<div  className="strng" >  &lt;/&gt;
 </div>


<Parallax className="letterParallax"
 strength={-150}
 style={{
  position: 'relative',
  top:"0px"
  
}}>
     
        <Background className="letterServc"  >
Services 
           </Background>


    </Parallax>





    <InView>
{({ inView, ref, entry }) => (

                    <li  ref={ref} className={inView ? 'cartas' : ''}>

                         <div className="carta2">
                         <div className="code">
                              <i className="bi bi-braces"></i>                          
                               </div>
                              <h3> Diseño y Desarrollo Web</h3>
                              <p>Crear sitios web personalizados y funcionales para empresas, emprendedores, instituciones educativas y organizaciones.
                              </p>
                              <p>Diseno de Escritorio <i className="bi bi-check2"></i></p>
                              <p>Diseno de telefono <i className="bi bi-check2"></i></p>
                              <p>Diseno de tablet <i className="bi bi-check2"></i></p>



                              <button>Leer Mas</button>
                         </div>


                    </li>


)}
</InView>




<InView>
{({ inView, ref, entry }) => (

                    <li ref={ref} className={inView ? 'cartas' : ''}>
                         <div className="carta2">

                              <div className="code">
                                <i className="bi bi-activity"></i>                         
                               </div>
                              <h3> Optimización para Motores de Búsqueda (SEO)</h3>
                              <p>Ayudar a mejorar el posicionamiento de los sitios web en los motores de búsqueda mediante prácticas de SEO y optimización de contenido
                              </p>
                              <p>Impulsar la clasificación de Google
 <i className="bi bi-check2"></i></p>
                              <p>Crecimiento de tráfico orgánico <i className="bi bi-check2"></i></p>
                              <p>Optimización de velocidad de página
 <i className="bi bi-check2"></i></p>
                         </div>

                    </li>


)}
</InView>


<InView>
{({ inView, ref, entry }) => (


                    <li ref={ref}  className={inView ? 'cartas' : ''}>
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


)}
</InView>


<InView>
{({ inView, ref, entry }) => (


                    <li ref={ref}  className={inView ? 'cartas gradit' : ''}>
                         <div className="carta2">

                         <div className="code">
                         <i className="bi bi-phone"></i>
                               </div>
                              <h3> Diseño Responsivo</h3>
                              <p>Asegurarse de que los sitios web se vean y funcionen bien en diferentes dispositivos, como computadoras de escritorio, tabletas y teléfonos móviles</p>
                              <p>Diseno de Escritorio <i className="bi bi-check2"></i></p>
                              <p>Diseno de telefono <i className="bi bi-check2"></i></p>
                              <p>Diseno de tablet <i className="bi bi-check2"></i></p>
                         </div>
                    </li>

                    )}
</InView>

<InView>
{({ inView, ref, entry }) => (


                    <li  ref={ref} className={inView ? 'cartas' : ''}>



                         <div className="carta2">

                         <div className="code">
                         <i className="bi bi-arrow-clockwise"></i>                               </div>
                              <h3> Mantenimiento y Actualización de Sitios Web</h3>
                              <p>Ofrecer servicios de mantenimiento y actualización periódica para asegurar que los sitios web estén siempre actualizados y funcionando correctamente </p>
                              <p>Diseno de Escritorio <i className="bi bi-check2"></i></p>
                              <p>Diseno de telefono <i className="bi bi-check2"></i></p>
                              <p>Diseno de tablet <i className="bi bi-check2"></i></p>
                         </div>  </li>


                         )}
</InView>



<InView>
{({ inView, ref, entry }) => (


                    <li ref={ref}  className={inView ? 'cartas' : ''}>

                         <div className="carta2">

                         <div className="code">
                         <i className="bi bi-people"></i>                               </div>
                              <h3> Consultoría y Asesoramiento</h3>
                              <p>Brindar asesoramiento técnico y consultoría sobre las mejores prácticas, tecnologías y estrategias para mejorar la presencia en línea de los clientes. </p>
                              <p>Diseno de Escritorio <i className="bi bi-check2"></i></p>
                              <p>Diseno de telefono <i className="bi bi-check2"></i></p>
                              <p>Diseno de tablet <i className="bi bi-check2"></i></p>
                         </div>
                    </li>

                    )}
</InView>


               </ul>




               <ul   className="servicesListDevice">

<div  className="strng" >  &lt;/&gt;
 </div>


<Parallax className="letterParallax"
 strength={-150}
 style={{
  position: 'relative',
  top:"0px"
  
}}>
     
        <Background className="letterServc"  >
Services 
           </Background>


    </Parallax>




                    <li  className="cartas">

                         <div className="carta2">
                         <div className="code">
                              <i className="bi bi-braces"></i>                          
                               </div>
                              <h3> Diseño y Desarrollo Web</h3>
                              <p>Crear sitios web personalizados y funcionales para empresas, emprendedores, instituciones educativas y organizaciones.
                              </p>
                              <p>Diseno de Escritorio <i className="bi bi-check2"></i></p>
                              <p>Diseno de telefono <i className="bi bi-check2"></i></p>
                              <p>Diseno de tablet <i className="bi bi-check2"></i></p>



                              <button>Leer Mas</button>
                         </div>


                    </li>


                    <li className="cartas">
                         <div className="carta2">

                              <div className="code">
                                <i className="bi bi-activity"></i>                         
                               </div>
                              <h3> Optimización para Motores de Búsqueda (SEO)</h3>
                              <p>Ayudar a mejorar el posicionamiento de los sitios web en los motores de búsqueda mediante prácticas de SEO y optimización de contenido
                              </p>
                              <p>Impulsar la clasificación de Google
 <i className="bi bi-check2"></i></p>
                              <p>Crecimiento de tráfico orgánico <i className="bi bi-check2"></i></p>
                              <p>Optimización de velocidad de página
 <i className="bi bi-check2"></i></p>
                         </div>

                    </li>


                    <li className="cartas">
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



                    <li className="cartas">
                         <div className="carta2">

                         <div className="code">
                         <i className="bi bi-phone"></i>
                               </div>
                              <h3> Diseño Responsivo</h3>
                              <p>Asegurarse de que los sitios web se vean y funcionen bien en diferentes dispositivos, como computadoras de escritorio, tabletas y teléfonos móviles</p>
                              <p>Diseno de Escritorio <i className="bi bi-check2"></i></p>
                              <p>Diseno de telefono <i className="bi bi-check2"></i></p>
                              <p>Diseno de tablet <i className="bi bi-check2"></i></p>
                         </div>
                    </li>

   
                    <li  className="cartas">



                         <div className="carta2">

                         <div className="code">
                         <i className="bi bi-arrow-clockwise"></i>                               </div>
                              <h3> Mantenimiento y Actualización de Sitios Web</h3>
                              <p>Ofrecer servicios de mantenimiento y actualización periódica para asegurar que los sitios web estén siempre actualizados y funcionando correctamente </p>
                              <p>Diseno de Escritorio <i className="bi bi-check2"></i></p>
                              <p>Diseno de telefono <i className="bi bi-check2"></i></p>
                              <p>Diseno de tablet <i className="bi bi-check2"></i></p>
                         </div>  </li>


     



                    <li className="cartas">

                         <div className="carta2">

                         <div className="code">
                         <i className="bi bi-people"></i>                               </div>
                              <h3> Consultoría y Asesoramiento</h3>
                              <p>Brindar asesoramiento técnico y consultoría sobre las mejores prácticas, tecnologías y estrategias para mejorar la presencia en línea de los clientes. </p>
                              <p>Diseno de Escritorio <i className="bi bi-check2"></i></p>
                              <p>Diseno de telefono <i className="bi bi-check2"></i></p>
                              <p>Diseno de tablet <i className="bi bi-check2"></i></p>
                         </div>
                    </li>

       
               </ul>





          </section>
     )
}

export default Services