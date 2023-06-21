import React from 'react'
import Navbar from '../components/Navbar'
import Categorys from '../components/Categorys';
import ContactForm from '../components/ContactForm';


const Portafolio = () => {




  return (
    <>
      <Navbar />


      <div className="introducer">

        <div className="box">

          <span  style={{ '--i': 1 }}>

            <img src="https://images.pexels.com/photos/4705772/pexels-photo-4705772.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
          </span>

          <strong>Portafolio</strong>

          <span  style={{ '--i': 2 }}>

            <img src="https://images.pexels.com/photos/4705772/pexels-photo-4705772.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
          </span>
          <span  style={{ '--i': 3 }} >

            <img src="https://images.pexels.com/photos/13211066/pexels-photo-13211066.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
          </span>


          <span  style={{ '--i': 4 }}>

            <img src="https://images.pexels.com/photos/3779191/pexels-photo-3779191.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
          </span>


          <span  style={{ '--i': 5 }}>

            <img src="https://images.pexels.com/photos/16850073/pexels-photo-16850073/free-photo-of-mujer-pared-modelo-joven.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
          </span>
          <span  style={{ '--i': 6 }}>

            <img src="https://images.pexels.com/photos/14434715/pexels-photo-14434715.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
          </span>

        </div>



      </div>

      <Categorys/>


<ContactForm/>




    </>

  )
}

export default Portafolio