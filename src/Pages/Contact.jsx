import React from 'react'
import ContactForm from '../components/ContactForm'
import Navbar from '../components/Navbar'


const Contact = () => {
  
  return (
<>
<main >

<div className="contact">


<div className="contactoFromPage">
       
       <div className="rt">
    <div className="fotomo">


</div>


</div>

<div className="rt">

<div className="pic-code"></div>
</div>


<strong>Contactame</strong>

</div>







<div className="question">


  <h6>Preguntas?</h6>

  {/* <p>Pregunta: ¿Cuál es el proceso de trabajo de diseño que sigues?
Respuesta: Nuestro proceso de trabajo de diseño incluye una etapa de investigación y recopilación de información, seguida de la creación de conceptos y borradores. Una vez aprobado el diseño, procedemos con la fase de desarrollo y entrega del proyecto finalizado.

Pregunta: ¿Cuánto tiempo tarda en completarse un proyecto de diseño típico?
Respuesta: El tiempo de entrega varía según la complejidad del proyecto. Por lo general, proyectos simples como logotipos pueden tomar entre 1 y 2 semanas, mientras que proyectos más grandes como sitios web pueden requerir varias semanas o meses.

Pregunta: ¿Cuáles son sus tarifas y opciones de pago?
Respuesta: Nuestras tarifas dependen del tipo de proyecto y alcance del trabajo. Ofrecemos opciones de pago flexibles, incluyendo pagos por adelantado y pagos en etapas según el progreso del proyecto.

Pregunta: ¿Puedo ver muestras de su trabajo anterior?
Respuesta: Por supuesto. Puede ver nuestro portafolio en la sección "Trabajos realizados" de nuestro sitio web, donde mostramos ejemplos de proyectos anteriores para diversos clientes.

Pregunta: ¿Cómo se asegura la originalidad y propiedad intelectual del diseño?
Respuesta: Garantizamos la originalidad de nuestros diseños y respetamos la propiedad intelectual. Al finalizar el proyecto, usted recibirá todos los derechos de propiedad intelectual del diseño.

Pregunta: ¿Aceptan proyectos de diseño urgentes?
Respuesta: Sí, podemos atender proyectos urgentes dependiendo de nuestra disponibilidad y la naturaleza del proyecto. Comuníquese con nosotros para verificar nuestra disponibilidad.

Pregunta: ¿Qué programas y herramientas utilizan para el diseño?
Respuesta: Utilizamos una variedad de software de diseño profesional, como Adobe Creative Suite (Photoshop, Illustrator, InDesign) y herramientas de prototipado como Sketch y Figma.

Pregunta: ¿Cómo funciona el proceso de colaboración con sus clientes?
Respuesta: Valoramos la colaboración con nuestros clientes. Durante el proceso de diseño, solicitamos su retroalimentación y revisamos los conceptos para asegurarnos de cumplir con sus expectativas.

Pregunta: ¿Cuál es su política de cancelación o reembolso?
Respuesta: Si un proyecto se cancela antes de iniciar el trabajo, se puede aplicar un cargo por cancelación. Para obtener más detalles, consulte nuestra política de cancelación en nuestros términos y condiciones.

Pregunta: ¿Ofrecen servicios de impresión o solo diseño digital?
Respuesta: Además de los servicios de diseño digital, también ofrecemos servicios de impresión en colaboración con imprentas de confianza.

</p> */}

  <ul className="d-flex w-100 justify-content-center p-0 gap-3">

<li className="carta">

<div className="carta2">
    <div className="d-flex justify-content-center w-100 p-3">
    <img src="asssets/icons/call.png" alt="" width="70px"  />
         </div>
         <h3 className="text-center text-white" > Free 15 Min Consultations</h3> 
   
         <p className="text-white">Within 15 minutes, I will be able to help target all of your needs, wants and concerns regarding any service that you require. This way I can pinpoint exactly what
          we will do and how we will execute your business ideas.</p>
      
    </div>


    </li>

    <li className="carta">

<div className="carta2">
    <div className="d-flex justify-content-center w-100 p-3">
    <img src="asssets/icons/call.png" alt="" width="70px"  />
             </div>
        <h3 className="text-center text-white"> Happy Customers</h3> 
      
        <p className="text-white">Customer satisfaction is of the utmost importance to me. Other companies are too large to give you a personalized 1 on 1 experience, but with me, I personally develop everything and offer recommendations to help your business succeed.

</p>
      
    </div>


    </li>


    <li className="carta">

<div className="carta2">
    <div className="d-flex justify-content-center w-100 p-3">
    <img src="asssets/icons/call.png" alt="" width="85px"  />
             </div>
        <h3 className="text-white">Fast Responses</h3> 
      
        <p className='text-white'>Everyone is busy nowadays, but that doesn't mean your time is not valuable. I strive to answer current and potential clients with lightening speed to ensure that everyone is given a personal and caring experience.</p>
      
      
    </div>


    </li>


</ul> 
</div>


</div>




<ContactForm/>

</main>   

</>
  )
}

export default Contact