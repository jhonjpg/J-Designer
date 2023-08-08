import React from 'react'
import { useInView } from 'react-intersection-observer';

const Medical = () => {


  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
<a className="containerProyects" href="https://jhonjpg.github.io/DraMelina//
" target="_blank">    <div className="proyects">

    <img src="./asssets/proyects/dramelina.jpg" alt="" />
    
    </div>

    <div className="proyectSmall">

    <img src="./asssets/proyects/dramelina2.jpg" alt="" />

    </div>

    </a>  )
}


export default Medical