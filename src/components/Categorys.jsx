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
  
  
  return (
<section className="categorySection">

<div className="violetCard"></div>


<strong>CATEGORIAS WEB</strong>

<div id="categorys">

<ul>

<li className="" onClick={() => handleComponentClick('all')}>Todo</li>

<li className="" onClick={() => handleComponentClick('beauty')}>Belleza</li>

<li className="" onClick={() => handleComponentClick('construction')}>Construccion & Autos</li>

<li className="" onClick={() => handleComponentClick('foods')}>Comida</li>

<li className="" onClick={() => handleComponentClick('laws')}>Leyes</li>

<li className="" onClick={() => handleComponentClick('medical')}>medical</li>

<li className="" onClick={() => handleComponentClick('media')}>Entretenimiento</li>



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
)
}

export default Categorys