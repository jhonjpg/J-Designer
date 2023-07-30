import React from 'react'
import { useInView } from 'react-intersection-observer';


const Laws = () => {


  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
<div   className="containerProyects">
    <div className="proyects">

      <img src="./asssets/proyects/law.jpg" alt="" />
    
    </div>

    <div className="proyectSmall">

    <img src="./asssets/proyects/law2p.jpg" alt="" />

    </div>

    </div>
  )
}

export default Laws