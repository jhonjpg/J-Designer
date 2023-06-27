

import React, { useState, useEffect, useRef } from "react";




const palabras = [
    <li className="carta">

    <div className="carta2">
        <div className="d-flex justify-content-center w-100 p-3">
        <img src="./asssets/icons/home/pc.png" alt="" width="75px"  />
             </div>
        <strong> Paginas Web</strong> 
        <p>Disenamos y Desarrollamos poderosos y modernos sitios web para todo tipo de negocios
        </p> 
        <p>Diseno de Escritorio <i className="bi bi-check2"></i></p>
        <p>Diseno de telefono <i className="bi bi-check2"></i></p>
        <p>Diseno de tablet <i className="bi bi-check2"></i></p>
        </div>


        </li>, 
   <li className="carta">

   <div className="carta2">
       <div className="d-flex justify-content-center w-100 p-3">
       <img src="./asssets/icons/home/pc.png" alt="" width="75px"  />
            </div>
       <strong> Paginas Web</strong> 
       <p>Disenamos y Desarrollamos poderosos y modernos sitios web para todo tipo de negocios
       </p> 
       <p>Diseno de Escritorio <i className="bi bi-check2"></i></p>
       <p>Diseno de telefono <i className="bi bi-check2"></i></p>
       <p>Diseno de tablet <i className="bi bi-check2"></i></p>
       </div>


       </li>

];



const Scrollspy = () => {

    const divP = useRef(null)
    const palabra = useRef(null)

  const [ultimaPosicion, setUltimaPosicion] = useState(400);

  const [removerClase, setRemoverClase] = useState(false);



  const [mostrarPalabras, setMostrarPalabras] = useState(false);



  useEffect(() => {

    const handleScroll = () => {
      const posicionUsuario = window.scrollY;


      if (posicionUsuario > ultimaPosicion) {
            setMostrarPalabras(true);

      } 
        

        

      

      setUltimaPosicion(posicionUsuario);
    };

    // const handleScrollInverse = () => {
    //     const posicionUsuarioInv = window.scrollY;
  
    //     if (posicionUsuario > ultimaPosicion) {
    //       setMostrarPalabras(!mostrarPalabras);
    //     } else {
    //       setMostrarPalabras(false);
    //     }
  
    //     setUltimaPosicion(posicionUsuario);
    //   };
    

    window.addEventListener("scroll", handleScroll);

    // return () => {
    //     window.addEventListener("scroll", handleScroll);
    // };
  }, [mostrarPalabras]);



  return (
    <div  className="w-100 d-flex flex-column h-100">
    {mostrarPalabras &&
      palabras.map((palabra, index) => (
        <div key={index} className="activado">
          <p>{palabra}</p>
        </div>
      ))}
  </div>
        

// {errors.Err[0] ?
//     <span className=" text-red-500 w-full text-center">{errors.Err[0].msg} </span>
// :

// <span className=" hidden	"></span>


// }
  );
};

export default Scrollspy;
