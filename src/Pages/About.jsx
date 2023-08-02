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
      className="float"
      strength={-1600}
      style={{
        position: 'absolute',
       botom:"0px"
      }}
     >



<Background className="span1">  <img src="skills/javascript.jpg" alt=""  />
</Background>







    </Parallax>



    <Parallax
      className="float2"
      strength={-1300}
      style={{
        position: 'absolute',
       botom:"0px"
      }}
     >



<Background className="span2">  <img src="skills/csss.jpg" alt=""  />
</Background>







    </Parallax>
 
 


    <Parallax
      className="float3"
      strength={-1250}
      style={{
        position: 'absolute',
       botom:"0px"
      }}
     >






<Background className="span3">  <img src="skills/html.jpg" alt=""  />
</Background>




    </Parallax>
 
 


    <Parallax
      className="float4"
      strength={-1300}
      style={{
        position: 'absolute',
       botom:"0px"
      }}
     >



<Background className="span4">  <img src="skills/reactjs.jpg" alt=""  />
</Background>


    </Parallax>
 


    <Parallax
      className="float5"
      strength={-850}
      style={{
        position: 'absolute',
       botom:"0px"
      }}
     >




<Background className="span5">  <img src="skills/boostrap.jpg" alt=""  />
</Background>


    </Parallax>
 
    {/* <Parallax
      className="float6"
      strength={-950}
      style={{
        position: 'absolute',
       botom:"0px"
      }}
     >




<Background className="span6">  <img src="skills/tailwind.jpg" alt=""  />
</Background>


    </Parallax>
 
 


    <Parallax
      className="float7"
      strength={-1120}
      style={{
        position: 'absolute',
       botom:"0px"
      }}
     >




<Background className="span7">  <img src="skills/nodejs.jpg" alt=""  />
</Background>


    </Parallax>
 
 


    <Parallax
      className="float8"
      strength={-1150}
      style={{
        position: 'absolute',
       botom:"0px"
      }}
     >




<Background className="span8">  <img src="skills/github.jpg" alt=""  />
</Background>


    </Parallax>
  */}
 
    {/* <Parallax
      className="float"
      strength={-500}
      style={{
        position: 'absolute',
       top:"0px"
      }}
     >


<Background className="span2">  <img src="skills/css.jpg" alt=""  />
</Background>


    </Parallax>
  */}


   
         <strong >SOBRE MI</strong>

       <div className="aboutimg">

         <img src="img/about/me.jpg" alt="" />


       </div>


         <p>Como desarrollador web, me especializo en el diseño y desarrollo de interfaces de usuario atractivas y funcionales. Con experiencia en HTML, CSS y JavaScript, me enfoco en crear sitios web responsivos y optimizados para ofrecer una experiencia de usuario excepcional</p>

     <button className="know">Saber Mas</button>
     
      </div>

      



   

      </div>


    
        <div className="aboutFrontDiv ">


          <h1>JP DESIGNER  ?</h1>

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
           <pre className="fs-2"> Que Dicen Mis Clientes</pre>
      
  
           <Parallax
      bgImage="https://cdn.pixabay.com/photo/2017/08/09/20/42/abstract-2615764_1280.jpg"
      strength={422}
      style={{
        position: 'absolute',
       top:"120px",
      }}
      renderLayer={percentage => (
        <div
          style={{
            position: 'relative',
            left: `${percentage * 100}%`, // Ajusta el desplazamiento hacia la derecha
            width: percentage * 700,
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
     

    </>
    
    
    
    )
}

export default About