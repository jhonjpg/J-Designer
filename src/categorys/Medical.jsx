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

      <img src="https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" />
    
    </div>

    <div className="proyectSmall">

    <img src="https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" />

    </div>

    </div>  )
}

export default Medical