import React, { lazy, Suspense, useState, useEffect } from 'react';


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

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a longer loading time (e.g., 2 seconds)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2000 milliseconds = 2 seconds

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  

  return (
      <BrowserRouter>
<ScrollTop/>
      <Navbar/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/j-designer/" element={loading ? (
          
          <Suspense fallback={    <div className="lazy"
    
          >
            <img
              src="img/perslogo.jpg"
              alt="Imagen centrada"
              
            />
          </div>
      }>           <div className="lazy"
    
          >
            <img
              src="img/perslogo.jpg"
              alt="Imagen centrada"
              
            />
          </div>
       </Suspense> 

          ):(

                 <Home />

          )
      
        
        
        } />



          <Route path="/j-designer/services" element={
            <Suspense fallback={    <div className="lazy"
    
            >
              <img
                src="img/perslogo.jpg"
                alt="Imagen centrada"
                
              />
            </div>
        }>  <Services /> </Suspense> 
        
          
          } />
          <Route path="/j-designer/portafolio" element={
          
          <Suspense fallback={    <div className="lazy"
    
    >
      <img
        src="img/perslogo.jpg"
        alt="Imagen centrada"
        
      />
    </div>
}>  <Portafolio /> </Suspense> 

}/>
       
       
       <Route path="/j-designer/about" element={    
           <Suspense fallback={    <div className="lazy"
    
       >
         <img
           src="img/perslogo.jpg"
           alt="Imagen centrada"
           
         />
       </div>
   }>  <About /> </Suspense> 
   
       
       } />
          <Route path="/j-designer/contact" element={ <Suspense fallback={    <div className="lazy"
    
    >
      <img
        src="img/perslogo.jpg"
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
