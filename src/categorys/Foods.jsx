import React from 'react'
import { useInView } from 'react-intersection-observer';


const Foods = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
<div   className="containerProyects">
    <div className="proyects">

      <img src="./asssets/proyects/kathPage.jpg" alt="" />
    
    </div>

    <div className="proyectSmall">

    <img src="./asssets/proyects/kathPage2.jpg" alt="" />

    </div>

    </div>
  )
}

export default Foods