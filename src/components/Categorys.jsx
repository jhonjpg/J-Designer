import React, { useState } from 'react'
import Medical from '../categorys/Medical';
import Media from '../categorys/Media';
import Construction from '../categorys/Construction';
import Laws from '../categorys/Laws';
import Foods from '../categorys/Foods';
import Beauty from '../categorys/Beauty';
import Todos from '../categorys/Todos';

const Categorys = () => {
    const [activeComponent, setActiveComponent] = useState("all");

    function handleComponentClick(componentName) {
      setActiveComponent(componentName);
    }



     const [effectCateg, seteffectCateg] = useState(false)

     const change = (e) => {
      const isMobile = window.innerWidth <= 800; // Establece el ancho máximo para considerar como dispositivo móvil (puedes ajustar este valor según tus necesidades).
    
      if (isMobile) {
        // Valores para dispositivos móviles
        if (window.scrollY <= 3500) {
          seteffectCateg(false);
        } else {
          seteffectCateg(true);
        }
      } else {
        // Valores para dispositivos no móviles (escritorio, tabletas grandes, etc.)
        if (window.scrollY <= 1300) {
          seteffectCateg(false);
        } else {
          seteffectCateg(true);
        }
      }
    }

     window.addEventListener("scroll", change)

  
    const effCategory = `offcategorySection ${effectCateg ? "categorySection" : ""}`

  
  return (

    <>
<section className={effCategory}>


<div  className="strng" >  &lt;/&gt;
 </div>

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

</>
)
}

export default Categorys