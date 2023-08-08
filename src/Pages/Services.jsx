import React, { useState } from 'react'
import { Parallax, Background } from 'react-parallax';
import ContactForm from '../components/ContactForm';
import { useTranslation } from 'react-i18next'; // Importamos useTranslation



const Services = () => {

  const { t } = useTranslation(); // Obtenemos la función t() para traducir



        const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
        const [isDescriptionOpen2, setIsDescriptionOpen2] = useState(false);
        const [isDescriptionOpen3, setIsDescriptionOpen3] = useState(false);


        const handleDescriptionToggle = () => {
          setIsDescriptionOpen(!isDescriptionOpen);
        };


        const handleDescriptionToggle2 = () => {
                setIsDescriptionOpen2(!isDescriptionOpen2);
              };

              

        const handleDescriptionToggle3 = () => {
                setIsDescriptionOpen3(!isDescriptionOpen3);
              };
      

        
  return (

    <>


<section id="services">

<div className="servicesFront">



        <h2>{t('services')}</h2>


    <Parallax
      className="float"
      strength={-2200}
      style={{
        position: 'absolute',
       botom:"0px"
      }}
     >



<Background className="spancell">  <img src="https://cdn.pixabay.com/photo/2016/10/05/17/11/smartphone-1717163_1280.png" alt=""  />
</Background>






    </Parallax>



    <Parallax
      className="float"
      strength={2200}
      style={{
        position: 'absolute',
       botom:"0px"
      }}
     >



<Background className="spantablet">  <img src="https://cdn.pixabay.com/photo/2016/10/05/17/17/tablet-1717178_1280.png" alt=""  />
</Background>





    </Parallax>






</div>


<strong className="kindOf">{t('KindOf')}</strong>

<ul   className="servicesListServ">





   

<li className={`cartasServ ${isDescriptionOpen ? 'cartasServOpen' : ''}`}>
            <div className="carta2">
              <div className="code">
                <i className="bi bi-braces"></i>
              </div>
              <h3> {t('webDesign')}</h3>
              <button onClick={handleDescriptionToggle}>
            {isDescriptionOpen ? t('buttonTextReadLess') : t('buttonTextReadMore')}
          </button>
              {isDescriptionOpen && (
                <div className="description">
                  <div className="descLetter">
                  {t('designWeb')}                  </div>
                  <div className="descimg"></div>
                </div>
              )}
            </div>
          </li>


          <li   className="cartasServ">
                         <div className="carta2">

                              <div className="code">
                                <i className="bi bi-activity"></i>                         
                               </div>
                               <h3> {t('servicesPage3.title')}</h3>
                              <p>{t('servicesPage.description')}</p>
                              <p>{t('servicesPage.points')}
 <i className="bi bi-check2"></i></p>
                              <p>{t('servicesPage.points2')}
 <i className="bi bi-check2"></i></p>
                                                     
                             
</div>
                    </li>





                    <li className={`cartasServ ${isDescriptionOpen2 ? 'cartasServOpen' : ''}`}>

                         <div className="carta2">

                         <div className="code">
                         <i className="bi bi-phone"></i>
                               </div>
                              <h3>{t('responsiveDesign')} </h3>
                              <button onClick={handleDescriptionToggle2}>
            {isDescriptionOpen2 ? t('buttonTextReadLess') : t('buttonTextReadMore')}
          </button>

              {isDescriptionOpen2 && (
                <div className="description">
                  <div className="descLetter">
                  {t('responsiveDesignDesc')}                  
                              </div>
                  <div className="descimg">



                  </div>
                </div>
              )}
            </div>
                    </li>



                    <li   className="cartasServ">
                         <div className="carta2">

                         <div className="code">
                                  <i className="bi bi-crop"></i>                  
                               </div>
                              <h3> {t('servicesPage2.title')}</h3>
                              <p>{t('servicesPage2.description')}</p>
                              <p>{t('servicesPage2.points4')} <i className="bi bi-check2"></i></p>
                              <p>{t('servicesPage2.points5')} <i className="bi bi-check2"></i></p>
                              <p>{t('servicesPage2.points6')} <i className="bi bi-check2"></i></p>
                             
            </div>
                    </li>






                    <li className={`cartasServ ${isDescriptionOpen3 ? 'cartasServOpen' : ''}`}>

<div className="carta2">

<div className="code">
<i className="bi bi-people"></i>                               </div>
     <h3> {t('consulting')}</h3>
     <button onClick={handleDescriptionToggle3}>
            {isDescriptionOpen3 ? t('buttonTextReadLess') : t('buttonTextReadMore')}
          </button>

{isDescriptionOpen3 && (
<div className="description">
<div className="descLetter">
{t('consultingDescription')} </div>
<div className="descimg2"></div>
</div>
)}
</div>
</li>





                    <li   className="cartasServ">



                         <div className="carta2">

                         <div className="code">
                         <i className="bi bi-arrow-clockwise"></i>                        
                                </div>
                              <h3> {t('servicesPage3.title')} </h3>
                              <p>{t('servicesPage3.points7')} <i className="bi bi-check2"></i></p>
                              <p>{t('servicesPage3.points8')} <i className="bi bi-check2"></i></p>
                              <p>{t('servicesPage3.points9')} <i className="bi bi-check2"></i></p>
                             

                         </div>  </li>











               </ul>






<ContactForm/>




</section>



</>    
  )
}

export default Services