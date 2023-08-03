import React from 'react'
import { Parallax, Background } from 'react-parallax';


export const AboutParallax = () => {
  return (


    <div className="out">

   
    <Parallax
      className="float"
      strength={-1600}
      style={{
        position: 'absolute',
       botom:"0px"
      }}
     >



<Background className="span1">  <img src="skills/techno.jpg" alt=""  />
</Background>






    </Parallax>





 
 
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


         <p>Como desarrollador web, me especializo en el diseño y desarrollo de interfaces de usuario atractivas y funcionales. Con experiencia en React, javascript y muchas otras tecnologias, me enfoco en crear sitios web responsivos y optimizados para ofrecer una experiencia de usuario excepcional</p>

     <button className="know">Saber Mas</button>
     
      </div>

        )
}
