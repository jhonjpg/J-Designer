import React from 'react'
import { useInView } from 'react-intersection-observer';


const Beauty = () => {


  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <>

<a className="containerProyects" href="https://jhonjpg.github.io/glamour/" target="_blank">


    <div className="proyects">

      <img src="./asssets/proyects/glamour.jpg" alt="" />
    
    </div>

    <div className="proyectSmall">

    <img src="./asssets/proyects/glamour2.jpg" alt="" />

    </div>

    </a>
    </>
  )
}

export default Beauty