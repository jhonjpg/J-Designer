import React from 'react'
import Navbar from '../components/Navbar'
import SliderReview from '../components/SliderReview'
import ContactForm from '../components/ContactForm';
import { Parallax, Background } from 'react-parallax';




const About = () => {
  return (
    <>

      <Navbar />

      <section id="about">
      <div className="aboutFront">
     

   

     <div className="out">

     <Parallax
      className="codeAbout"
      strength={1300}
      style={{
        position: 'absolute',
       top:"0px"
      }}
     >

       <Background className="span">   { `<script type="module" src="/src/aboutme.jsx"></script>`}
</Background>



    </Parallax>
 
    <Parallax
      className="codeAbout"
      strength={1300}
      style={{
        position: 'absolute',
       top:"0px"
      }}
     >



<Background className="span2">   { `<script type="module" src="/src/aboutme.jsx"></script>`}
</Background>


    </Parallax>
 


         <strong >SOBRE MI</strong>

       <div className="aboutimg">

         <img src="img/about/me.jpg" alt="" />


       </div>


         <p>Como desarrollador web, me especializo en el diseño y desarrollo de interfaces de usuario atractivas y funcionales. Con experiencia en HTML, CSS y JavaScript, me enfoco en crear sitios web responsivos y optimizados para ofrecer una experiencia de usuario excepcional</p>

     <button className="know">Saber Mas</button>
     
      </div>

      



   

      </div>


    
        <div className="aboutFrontDiv ">
        <h5>POR QUE MUCHOS CLIENTES ELIGEN </h5>


          <h6>JP DESIGNER  ?</h6>

          <br />

          <p className="me">Soy un diseñador y desarrollador de sitios web autodidacta con 3 años de experiencia. Durante esos 3 años, tomé y aprendí muchas plataformas y tecnologías que me permiten mantenerme alerta y por delante de mi competencia. Me esfuerzo por crear sitios web personalizados para cada cliente mientras les brindo el producto de la más alta calidad en el mercado.
          </p>


          <ul className="experience">


            <li >
              <div className="cartas">
                <img src="./asssets/icons/pc.png" alt="" width="85px" />
              </div>
              <h3> 3 anos de experiencia </h3>

              <p>Contratará a una persona que le brindará un sitio web individualizado que cumpla con sus requisitos. Clientes en el pasado me han dicho que con mi ayuda han impulsado sus negocios a nuevas alturas y no podrían estar más felices.
              </p>
            </li>
            <li >
              <div className="d-flex justify-content-center w-100">
                <img src="./asssets/icons/pc.png" alt="" width="85px" />
              </div>
              <h3> Habilidades </h3>

              <p>HTML <i className="bi bi-check2"></i></p>
              <p>CSS <i className="bi bi-check2"></i></p>
              <p>JAVASCRIPT <i className="bi bi-check2"></i></p>
              
              <p>J-QUERTY <i className="bi bi-check2"></i></p>
              <p>REACT JS <i className="bi bi-check2"></i></p>
              <p>NODE JS <i className="bi bi-check2"></i></p>
              <p>MONGO DB <i className="bi bi-check2"></i></p>
              <p>GITHUB <i className="bi bi-check2"></i></p>
              <p>BOOSTRAP <i className="bi bi-check2"></i></p>
              <p>TAILWIND <i className="bi bi-check2"></i></p>



            </li>
      


          </ul>





    
          <div className="w-100 d-flex flex-column align-items-center gap-5 position-relative overflow-hidden">
           <pre className="fs-2"> Que Dicen Mis Clientes</pre>
      
  
           <Parallax
      bgImage="../asssets/ilustracion/ilustration2.jpg"
      strength={822}
      style={{
        position: 'absolute',
       top:"100px",
      }}
      renderLayer={percentage => (
        <div
          style={{
            position: 'relative',
            left: `${percentage * 100}%`, // Ajusta el desplazamiento hacia la derecha
            width: percentage * 500,
            height: percentage * 900,
          }}
        />
      )}
    >


</Parallax>
<SliderReview/>


</div>
<ContactForm/>

        </div>



      </section>
     

    </>)
}

export default About