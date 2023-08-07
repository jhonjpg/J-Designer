import React, { useState } from 'react'
import Navbar from '../components/Navbar'

import FrontPage from '../components/FrontPage';
import Services from '../components/Services';
import Categorys from '../components/Categorys';
import Contact from './Contact';
import ContactForm from '../components/ContactForm';


const Home = () => {



  return (
      

<>


<main>

                                  {/* frontPage */}
<FrontPage/>

                                    {/* Services */}

<Services/>
                                    {/* categorys */}
<Categorys/>
                                    {/* contact */}

<ContactForm/>
</main>

    </>
  )
}

export default Home