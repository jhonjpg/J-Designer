import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Parallax } from 'react-parallax';



const SliderReview = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 6000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    speed: 9000,
                    autoplaySpeed: 1000,
                    slidesToScroll: 1
                }
            }
        ]
      };
  

    const immg = [
        
        { 
            
            fotos: [
        'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=1200',
        "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1200",
        'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1200',
        "https://images.pexels.com/photos/1197132/pexels-photo-1197132.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/1486064/pexels-photo-1486064.jpeg?auto=compress&cs=tinysrgb&w=1200",
        



    ],

          nombres:   ["pedro" , "luisa", "maria", "juana", "tom", "pablo","juan" , "mario ", "taisha", "dario", "tomy", "jaszmin"],



          resenas: ["JP Designer es un talentoso desarrollador web que logró capturar perfectamente nuestra visión para el sitio. El resultado final superó nuestras expectativas",

"Impresionado con la habilidad de JP Designer para crear una experiencia de usuario intuitiva y atractiva. Definitivamente, los recomendaría",

"JP Designer hizo que el proceso de desarrollo web fuera sin complicaciones. Entregó un sitio web de alta calidad en poco tiempo",

"Gracias a JP Designer, nuestro sitio web ahora refleja nuestra identidad de marca de manera impactante. Un excelente trabajo",

"Profesional, creativo y altamente competente. JP Designer es un experto en el desarrollo de sitios web de primera clase",

"JP Designer demostró una gran comprensión de nuestras necesidades y proporcionó soluciones efectivas y elegantes",

"El diseño web de JP Designer es simplemente impresionante. Los detalles y la estética son impecables",

"Trabajar con JP Designer fue una experiencia muy positiva. Siempre estuvo dispuesto a escuchar nuestras ideas y sugerencias",

"JP Designer es un desarrollador web altamente recomendado. Su habilidad para combinar funcionalidad con diseño es impresionante",

"El sitio web que JP Designer creó para nosotros es fácil de navegar y visualmente atractivo. Sin duda, un experto en su campo",

"JP Designer entregó el proyecto a tiempo y se aseguró de que todo funcionara sin problemas. Gran profesionalismo",

"JP Designer se destacó por su creatividad y capacidad para adaptarse a nuestras necesidades específicas. ¡Muy feliz con el resultado final!",
          
          

        ]
          

        }




    ]

   

  return (

<>


<Parallax
      bgImage="https://cdn.pixabay.com/photo/2017/08/09/20/42/abstract-2615764_1280.jpg"
      strength={452}
      style={{
        position: 'absolute',
       top:"-140px",
      }}
      renderLayer={percentage => (
        <div
          style={{
            position: 'relative',
            left: `${percentage * 100}%`, // Ajusta el desplazamiento hacia la derecha
            width: percentage * 700,
            height: percentage * 900,
          }}
        />
      )}
    >


</Parallax>

           <pre className="fs-2 z-1"> Que Dicen Mis Clientes</pre>
      
  
<ul  className="reviewSlide">

        <Slider {...settings}>
        {immg[0].fotos.map((imageUrl, index) => (


<li key={index} className="slash"> 

<div className="one">
<div className="miniature"> 
<img src={imageUrl} alt="ftt" />

<h6>{immg[0].nombres[index]}</h6>
</div> 
</div>

<div className="two">

<p>{immg[0].resenas[index]}</p>
     </div>

     </li>


))}
        </Slider>


          </ul>

          </>


)
}

export default SliderReview