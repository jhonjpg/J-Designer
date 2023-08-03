import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from '../Pages/Home';
import Services from '../Pages/Services';
import Portafolio from '../Pages/Portafolio';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import PageNotFound from '../Pages/PageNotFound';

const Auth = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/j-designer/" element={<Home />} />
          <Route path="/j-designer/services" element={<Services />} />
          <Route path="/j-designer/portafolio" element={<Portafolio />} />
          <Route path="/j-designer/about" element={<About />} />
          <Route path="/j-designer/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Auth;
