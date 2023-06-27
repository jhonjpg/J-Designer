import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


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



          resenas: ["El abogado García me brindó una excelente representación legal en mi caso de divorcio. Su profesionalismo y habilidad para negociar fueron fundamentales para llegar a un acuerdo justo y satisfactorio." , 
          "Recurrí al abogado Martínez para un problema legal y quedé impresionado por su conocimiento y experiencia. Me guió a lo largo del proceso de manera clara y me ayudó a alcanzar el resultado deseado.",
           "Contraté al abogado López para un caso de lesiones personales y su dedicación fue excepcional. Gracias a su habilidad para presentar mi caso de manera convincente, obtuve una compensación justa por mis pérdidas.", "La abogada Pérez me asistió en un caso de propiedad intelectual y su nivel de conocimiento en el tema fue impresionante. Su asesoramiento estratégico fue clave para proteger mis derechos de autor.", 
           "El abogado Rodríguez me representó en un caso penal y su experiencia en el sistema legal fue evidente. Su aguda preparación y argumentación efectiva llevaron a un resultado favorable en mi defensa", 
           "El abogado García es un profesional excepcional. Su dedicación y conocimiento legal me brindaron la confianza necesaria para resolver mi caso con éxito.","El abogado Castro es un defensor incansable de los derechos humanos. Su compromiso y pasión por la justicia me brindaron una representación sólida y una resolución exitosa." , "La abogada Ramírez es una profesional confiable y ética. Su experiencia en derecho familiar y su enfoque centrado en el cliente me brindaron resultados positivos en mi caso de custodia.", "La abogada Gómez demostró un profundo conocimiento en mi área legal. Su enfoque estratégico y habilidades de argumentación fueron cruciales para obtener un resultado favorable.", "El abogado Rodríguez es un defensor apasionado. Su tenacidad y compromiso con mi caso me brindaron un resultado favorable y justicia."
           , "El abogado Torres es un experto en derecho empresarial. Su asesoramiento integral y su capacidad para anticipar y resolver problemas legales me ayudaron a proteger mi negocio.",
            "Contratar al abogado López fue una excelente decisión. Su experiencia y perspicacia legal me guiaron a través de un proceso complejo y obtuvimos resultados exitosos."

        ]
          

        }




    ]

   

  return (

<>


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