import React from 'react'
import ContactForm from '../components/ContactForm'
import Navbar from '../components/Navbar'
import { useTranslation } from 'react-i18next'; // Importamos useTranslation



const Contact = () => {
  

  const { t } = useTranslation(); // Obtenemos la función t() para traducir

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


<strong>{t('contactPage.heading')}</strong>

</div>







<div className="question">


<h6>{t('contactPage.questions.question1.title')}</h6>

  

  <ul className="d-flex w-100 justify-content-center p-0 gap-3">

<li className="carta">

<div className="carta2">
    <div className="d-flex justify-content-center w-100 p-3">
    <img src="asssets/icons/call.png" alt="" width="70px"  />
         </div>
         <h3 className="text-center text-white" > {t('contactPage.questions.question1.title')}

</h3> 
   
         <p className="text-white">  {t('contactPage.questions.question1.description')}
</p>
      
    </div>


    </li>

    <li className="carta">

<div className="carta2">
    <div className="d-flex justify-content-center w-100 p-3">
    <img src="img/contact/client.png" alt="" width="70px"  />
             </div>
        <h3 className="text-center text-white">   {t('contactPage.questions.question2.title')}
</h3> 
      
        <p className="text-white"> {t('contactPage.questions.question2.description')}
</p>
      
    </div>


    </li>


    <li className="carta">

<div className="carta2">
    <div className="d-flex justify-content-center w-100 p-3">
    <img src="img/contact/fastcl.png" alt="" width="85px"  />
             </div>
        <h3 className="text-white"> {t('contactPage.questions.question3.title')}

</h3> 
      
        <p className='text-white'> {t('contactPage.questions.question3.description')}
</p>
      
      
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