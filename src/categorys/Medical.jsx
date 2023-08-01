import React from 'react'
import { useInView } from 'react-intersection-observer';

const Medical = () => {


  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
<div   className="containerProyects">
    <div className="proyects">

    <img src="./asssets/proyects/dramelina.jpg" alt="" />
    
    </div>

    <div className="proyectSmall">

    <img src="./asssets/proyects/dramelina2.jpg" alt="" />

    </div>

    </div>  )
}

export default Medical