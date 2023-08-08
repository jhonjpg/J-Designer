import React from 'react'
import { useInView } from 'react-intersection-observer';


const Laws = () => {

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
<a className="containerProyects" href="https://jhonjpg.github.io/abogada/"  target="_blank">
    <div className="proyects">

      <img src="./asssets/proyects/law.jpg" alt="" />
    
    </div>

    <div className="proyectSmall">

    <img src="./asssets/proyects/law2.jpg" alt="" />

    </div>

    </a>
  )
}

export default Laws