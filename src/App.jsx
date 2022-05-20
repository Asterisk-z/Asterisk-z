import React from 'react';
import Header from './components/header/Header';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Testimonials from './components/testimonials/Testimonials';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Experience from './components/experience/Experience';
import Navigation from './components/navigation/Navigation';

const App = () => {
  return (
    <>
        <Header />
        <Navigation />
        {/* <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer /> */}
      </>
  )
}

export default App
