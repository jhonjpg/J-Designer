import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import SliderReview from '../components/SliderReview'
import ContactForm from '../components/ContactForm';




const About = () => {


      
  const [letra, setLetra] = useState("Quien Soy");



  useEffect(() => {
   
    const interval = setInterval(() => {
      setLetra(letra => {
        const letras = ["JP DESIGNER ?","Quien Soy"]
        const letraIndex = letras.indexOf(letra); // obtiene el indice de la letra actual
        return letras[(letraIndex + 1) % letras.length]; // retorna la siguiente letra en el arreglo
      });

    }, 3000); // cambia cada 4 segundos

    return () => clearInterval(interval); // limpiar el intervalo
  }, []);

  return (

    
    <>

      <Navbar />

      <section id="about">
      <div className="aboutFront">
     

   

      </div>


    
        <div className="aboutFrontDiv ">


          <h1>   <span>{letra}</span> </h1>

          <br />

          <p className="me">Soy un diseñador y desarrollador de sitios web autodidacta con 3 años de experiencia. Durante esos 3 años, tomé y aprendí muchas plataformas y tecnologías que me permiten mantenerme alerta y por delante de mi competencia. Me esfuerzo por crear sitios web personalizados para cada cliente mientras les brindo el producto de la más alta calidad en el mercado.
          </p>

          <p className="me">Contratará a una persona que le brindará un sitio web individualizado que cumpla con sus requisitos. Clientes en el pasado me han dicho que con mi ayuda han impulsado sus negocios a nuevas alturas y no podrían estar más felices.
              </p>


          <ul className="experience">


          
            <li className="hability">
            
              <h3> Habilidades </h3>

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




    
    
          <div className="w-100 d-flex flex-column align-items-center gap-5 position-relative overflow-hidden">


         
<SliderReview/>


</div>
<ContactForm/>

        </div>



      </section>
     

    </>
    
    
    
    )
}

export default About