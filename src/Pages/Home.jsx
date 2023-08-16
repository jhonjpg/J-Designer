import React, { useState } from 'react'
import Navbar from '../components/Navbar'

import FrontPage from '../components/FrontPage';
import Services from '../components/Services';
import Contact from './Contact';
import ContactForm from '../components/ContactForm';
import Proyect from '../components/Proyect';


const Home = () => {



  return (
      

<>



                                  {/* frontPage */}
<FrontPage/>

                                    {/* Services */}

<Services/>
                                    {/* categorys */}



                                    <Proyect/>
                                    {/* contact */}

<ContactForm/>

    </>
  )
}

export default Home