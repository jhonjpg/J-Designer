import React, { useState } from 'react'
import ContactForm from '../components/ContactForm';
import Medical from '../categorys/Medical';
import Media from '../categorys/Media';
import Laws from '../categorys/Laws';
import Foods from '../categorys/Foods';
import Beauty from '../categorys/Beauty';
import Todos from '../categorys/Todos';
import SliderReview from '../components/SliderReview'
import { useTranslation } from 'react-i18next'; // Importamos useTranslation



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

        </div>



      </div>


      <section className="categorySection">



<strong className="fs-1 text-light mb-2">{t("projects")}</strong>

<div id="categorys">
<ul>
            <li className="" onClick={() => handleComponentClick('all')}>
              {t('categories.all')}
            </li>
            <li className="" onClick={() => handleComponentClick('beauty')}>
              {t('categories.beauty')}
            </li>
            <li className="" onClick={() => handleComponentClick('foods')}>
              {t('categories.foods')}
            </li>
            <li className="" onClick={() => handleComponentClick('laws')}>
              {t('categories.laws')}
            </li>
            <li className="" onClick={() => handleComponentClick('medical')}>
              {t('categories.medical')}
            </li>
            <li className="" onClick={() => handleComponentClick('media')}>
              {t('categories.media')}
            </li>
       
          </ul>


</div>


<div className="fullProyects">
{activeComponent === 'all' && <Todos/>}

{activeComponent === 'beauty' && <Beauty />}
{activeComponent === 'construction' && <Construction />}
{activeComponent === 'foods' && <Foods />}
{activeComponent === 'laws' && <Laws />}
{activeComponent === 'medical' && <Medical />}
{activeComponent === 'media' && <Media />}

</div>



     
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