import React from 'react'
import ContactForm from '../components/ContactForm'
import Navbar from '../components/Navbar'


const Contact = () => {
  
  return (
<>
<Navbar/>
<main >

<div className="contact">


<div className="contactoFromPage">
       
    <div className="fotomo">


</div>


<strong>Contactame</strong>

</div>







<div className="question">


  <h6>Preguntas?</h6>

  <ul className="d-flex w-100 justify-content-center p-0 gap-3">

<li className="carta">

<div className="carta2">
    <div className="d-flex justify-content-center w-100 p-3">
    <img src="public/asssets/icons/call.png" alt="" width="70px"  />
         </div>
         <h3 className="text-center text-white" > Free 15 Min Consultations</h3> 
   
         <p className="text-white">Within 15 minutes, I will be able to help target all of your needs, wants and concerns regarding any service that you require. This way I can pinpoint exactly what
          we will do and how we will execute your business ideas.</p>
      
    </div>


    </li>

    <li className="carta">

<div className="carta2">
    <div className="d-flex justify-content-center w-100 p-3">
    <img src="public/asssets/icons/call.png" alt="" width="70px"  />
             </div>
        <h3 className="text-center text-white"> Happy Customers</h3> 
      
        <p className="text-white">Customer satisfaction is of the utmost importance to me. Other companies are too large to give you a personalized 1 on 1 experience, but with me, I personally develop everything and offer recommendations to help your business succeed.

</p>
      
    </div>


    </li>


    <li className="carta">

<div className="carta2">
    <div className="d-flex justify-content-center w-100 p-3">
    <img src="public/asssets/icons/pc.png" alt="" width="85px"  />
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