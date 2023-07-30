import React from 'react'
import { useInView } from 'react-intersection-observer';

const Construction = () => {

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
<div   className="containerProyects">
    <div className="proyects">

      <img src="https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" />
    
    </div>

    <div className="proyectSmall">

    <img src="https://images.pexels.com/photos/3156482/pexels-photo-3156482.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" />

    </div>

    </div>
  )
}

export default Construction