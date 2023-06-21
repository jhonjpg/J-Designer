import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";



import Home from '../Pages/Home';
import Services from '../Pages/Services';
import Portafolio from '../Pages/Portafolio';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
 import PageNotFound from '../Pages/PageNotFound';



const auth = () => {
  return (
    <div>


    <BrowserRouter>

      <Routes>

      <Route index element={<Home />}></Route>
      <Route path="/j-designer/" element={<Home />}></Route>
        <Route path="/j-designer/services" element={<Services />}></Route>
        <Route path="/j-designer/portafolio" element={<Portafolio />}></Route>
        <Route path="/j-designer/about" element={<About />}></Route>
        <Route path="/j-designer/contact" element={<Contact />}></Route>

        <Route path="*" element={<PageNotFound />}></Route>


      </Routes>




    </BrowserRouter>



  </div>
)
}

export default auth