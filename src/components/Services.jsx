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




                    <li   className="cartas">

                         <div className="carta2">
                              <div className="d-flex justify-content-center w-100 p-3">
                                   <img src="./asssets/icons/home/pc.png" alt="" width="75px" />
                              </div>
                              <h3> Paginas Web</h3>
                              <p>Disenamos y Desarrollamos poderosos y modernos sitios web para todo tipo de negocios
                              </p>
                              <p>Diseno de Escritorio <i className="bi bi-check2"></i></p>
                              <p>Diseno de telefono <i className="bi bi-check2"></i></p>
                              <p>Diseno de tablet <i className="bi bi-check2"></i></p>
                         </div>


                    </li>




<InView>
{({ inView, ref, entry }) => (

                    <li ref={ref} className={inView ? 'cartas' : ''}>
                         <div className="carta2">

                              <div className="d-flex justify-content-center w-100 p-3">
                                   <img src="./asssets/icons/home/pc2.png" alt="" width="75px" />
                              </div>
                              <h3> Optimizacion de Busquedas</h3>
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


                    <li ref={ref}  className={inView ? 'cartas' : ''}>
                         <div className="carta2">

                              <div className="d-flex justify-content-center w-100 p-3">
                                   <img src="./asssets/icons/home/pc3.png" alt="" width="75px" />
                              </div>
                              <h3> Negocios</h3>
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



                    <li ref={ref}  className={inView ? 'cartas' : ''}>

                         <div className="carta2">

                              <div className="d-flex justify-content-center w-100 p-3">
                                   <img src="./asssets/icons/home/pc4.png" alt="" width="75px" />

                              </div>
                              <h3> Redes Sociales</h3>
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

                              <div className="d-flex justify-content-center w-100 p-3">
                                   <img src="./asssets/icons/home/pc5.png" alt="" width="75px" />
                              </div>
                              <h3> Multi Plataforma</h3>
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


                    <li  ref={ref} className={inView ? 'cartas' : ''}>



                         <div className="carta2">

                              <div className="d-flex justify-content-center w-100 p-3">
                                   <img src="./asssets/icons/home/pc6.png" alt="" width="75px" />
                              </div>
                              <h3> Dominio + host</h3>
                              <p>Disenamos y Desarrollamos poderosos y modernos sitios web para todo tipo de negocios
                              </p>
                              <p>Diseno de Escritorio <i className="bi bi-check2"></i></p>
                              <p>Diseno de telefono <i className="bi bi-check2"></i></p>
                              <p>Diseno de tablet <i className="bi bi-check2"></i></p>
                         </div>  </li>


                         )}
</InView>

               </ul>






          </section>
     )
}

export default Services