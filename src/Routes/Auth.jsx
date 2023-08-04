import React, { lazy, Suspense } from 'react';


import { BrowserRouter, Routes, Route } from "react-router-dom";


import PageNotFound from '../Pages/PageNotFound';
import Navbar from '../components/Navbar';
import ScrollTop from '../helpers/ScrollTop';


const Home = lazy(() => import('../Pages/Home'));
const Services = lazy(() => import('../Pages/Services'));

const Portafolio = lazy(() => import('../Pages/Portafolio'));
const About = lazy(() => import('../Pages/About'));

const Contact = lazy(() => import('../Pages/Contact'));

const Auth = () => {



  

  return (
      <BrowserRouter>
<ScrollTop/>
      <Navbar/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/j-designer/" element={
          
          <Suspense fallback={    <div className="lazy"
    
          >
            <img
              src="../img/perslogo.jpg"
              alt="Imagen centrada"
              
            />
          </div>
      }>            <Home />
       </Suspense> 
      
        
        
        } />
          <Route path="/j-designer/services" element={
            <Suspense fallback={    <div className="lazy"
    
            >
              <img
                src="../img/perslogo.jpg"
                alt="Imagen centrada"
                
              />
            </div>
        }>  <Services /> </Suspense> 
        
          
          } />
          <Route path="/j-designer/portafolio" element={
          
          <Suspense fallback={    <div className="lazy"
    
    >
      <img
        src="../img/perslogo.jpg"
        alt="Imagen centrada"
        
      />
    </div>
}>  <Portafolio /> </Suspense> 

}/>
       
       
       <Route path="/j-designer/about" element={    
           <Suspense fallback={    <div className="lazy"
    
       >
         <img
           src="../img/perslogo.jpg"
           alt="Imagen centrada"
           
         />
       </div>
   }>  <About /> </Suspense> 
   
       
       } />
          <Route path="/j-designer/contact" element={ <Suspense fallback={    <div className="lazy"
    
    >
      <img
        src="../img/perslogo.jpg"
        alt="Imagen centrada"
        
      />
    </div>
}>  <Contact /> </Suspense> } />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
  );
};

export default Auth;
