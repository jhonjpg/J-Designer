import React, { lazy, Suspense, useState, useEffect } from 'react';



import AppWrapper from './AppWrapper';






const Services = lazy(() => import('../Pages/Services'));

const Portafolio = lazy(() => import('../Pages/Portafolio'));
const About = lazy(() => import('../Pages/About'));

const Contact = lazy(() => import('../Pages/Contact'));

const Auth = () => {


  

  return <AppWrapper/>
};

export default Auth;
