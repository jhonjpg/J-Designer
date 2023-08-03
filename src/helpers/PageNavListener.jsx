import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'


const PageNavListener = ({history}) => {


    useEffect(() => {
      

        const unlisten = history.listen(() =>
        {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'auto' // Scroll instantáneo, sin suavizado
              });

        })
    
      return () => {

        unlisten()
        
      }
    }, [])
    


  return null
}

export default PageNavListener