import React from 'react'
import { useInView } from 'react-intersection-observer';

const Media = () => {

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
<a className="containerProyects" href="https://jhonjpg.github.io/lyftgym/" target="_blank">
    <div className="proyects">

      <img src="./asssets/proyects/gympro.jpg" alt="" />
    
    </div>

    <div className="proyectSmall">

    <img src="./asssets/proyects/gym2.jpg" alt="" />

    </div>

    </a>

  )
}

export default Media