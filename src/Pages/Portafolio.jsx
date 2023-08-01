import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Categorys from '../components/Categorys';
import ContactForm from '../components/ContactForm';
import Medical from '../categorys/Medical';
import Media from '../categorys/Media';
import Construction from '../categorys/Construction';
import Laws from '../categorys/Laws';
import Foods from '../categorys/Foods';
import Beauty from '../categorys/Beauty';
import Todos from '../categorys/Todos';


const Portafolio = () => {

  const [activeComponent, setActiveComponent] = useState("all");

    function handleComponentClick(componentName) {
      setActiveComponent(componentName);
    }


  return (
    <>
      <Navbar />

<section className="portafolio">

      <div className="introducer">

        <div className="box">


          <strong>Portafolio</strong>

          <span  style={{ '--i': 2 }}>

          <img src="./asssets/proyects/glamour.jpg" alt="" />
          </span>
          <span  style={{ '--i': 3 }} >

          <img src="./asssets/proyects/kathPage.jpg" alt="" />
          </span>


          <span  style={{ '--i': 4 }}>

          <img src="./asssets/proyects/gym.jpg" alt="" />
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



<strong>PROYECTOS</strong>

<div id="categorys">

<ul>

<li className="" onClick={() => handleComponentClick('all')}>Todo</li>

<li className="" onClick={() => handleComponentClick('beauty')}>Belleza</li>


<li className="" onClick={() => handleComponentClick('foods')}>Comida</li>

<li className="" onClick={() => handleComponentClick('laws')}>Leyes</li>

<li className="" onClick={() => handleComponentClick('medical')}>medical</li>

<li className="" onClick={() => handleComponentClick('media')}>Entretenimiento</li>

<li className="" onClick={() => handleComponentClick('construction')}>Construccion & Autos</li>


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

<ContactForm/>
</section>



    </>

  )
}

export default Portafolio