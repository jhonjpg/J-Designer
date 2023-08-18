import React, { useState } from 'react'
import ContactForm from '../components/ContactForm';
import Proyects from '../helpers/proyects.json';
import SliderReview from '../components/SliderReview'
import { useTranslation } from 'react-i18next'; // Importamos useTranslation
import Proyect from '../components/Proyect';



const Portafolio = () => {

  const { t } = useTranslation(); // Obtener la función t() para traducir


  const [activeComponent, setActiveComponent] = useState("all");

    function handleComponentClick(componentName) {
      setActiveComponent(componentName);
    }


  return (
    <>

<section className="portafolio">

      <div className="introducer">

        <div className="box">


          <strong>Portfolio</strong>

          <span  style={{ '--i': 2 }}>

          <img src="./asssets/proyects/glamour.jpg" alt="" />
          </span>
          <span  style={{ '--i': 3 }} >

          <img src="./asssets/proyects/kathPage.jpg" alt="" />
          </span>


          <span  style={{ '--i': 4 }}>

          <img src="./asssets/proyects/webgym.jpg" alt="" />
          </span>


          <span  style={{ '--i': 5 }}>

          <img src="./asssets/proyects/law.jpg" alt="" />
          </span>
          <span  style={{ '--i': 6 }}>

          <img src="./asssets/proyects/dramelina.jpg" alt="" />
          </span>

          <span  style={{ '--i': 7 }}>

<img src="./asssets/proyects/dreamHome.jpg" alt="" />
</span>


<span  style={{ '--i': 8 }}>

<img src="./asssets/proyects/barber.jpg" alt="" />
</span>

        </div>



      </div>


      <section className="categorySection">




<Proyect/>




     
</section>


<div className="reviewDiv" >


         
<SliderReview/>


</div>


<ContactForm/>
</section>



    </>

  )
}

export default Portafolio