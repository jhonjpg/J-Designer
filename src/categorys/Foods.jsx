import React from 'react'
import { useInView } from 'react-intersection-observer';


const Foods = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
<a className="containerProyects" href="https://jhonjpg.github.io/theKathCafeteria/" target="_blank">
    <div className="proyects">

      <img src="./asssets/proyects/kathPage.jpg" alt="" />
    
    </div>

    <div className="proyectSmall">

    <img src="./asssets/proyects/kathPage2.jpg" alt="" />

    </div>

    </a>
  )
}

export default Foods