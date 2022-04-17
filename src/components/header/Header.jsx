import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import Laravel from '../../assets/laravel.png';
import Html from '../../assets/html.png';
import Css from '../../assets/css.png';
import Vue from '../../assets/vue.png';
import node from '../../assets/node.png';
import react from '../../assets/react.png';
import database from '../../assets/database.jpg';
import php from '../../assets/php.png';
// import ME from '../../assets/me.png';
// import ME1 from '../../assets/profile.jpeg';
// import ME2 from '../../assets/profile-0.png';
import "./header.css";


const Header = () => {
  return (
    
    <header>
      
        <div className='overlay'>
        <div className='container header__container'>
            <div className='action'>
              <h5>Hello I'm</h5>
              <h1>Olang Daniel</h1>
              <h5 className='text-light'>Fullstack Developer</h5>
              <CTA />
            </div>
            <HeaderSocials />
            <div className='me-0'>
              <img src={Laravel} alt='me' />
            </div>
            <div className='me-1'>
              <img src={Html} alt='me' />
            </div>
            {/* <div className='me-2'>
              <img src={ME2} alt='me' />
            </div> */}
            <div className='me-3'>
              <img src={Css} alt='me' />
            </div>
            <div className='me-4'>
              <img src={Vue} alt='me' />
            </div>
            <div className='me-5'>
              <img src={react} alt='me' />
            </div>
            <div className='me-6'>
              <img src={node} alt='me' />
            </div>
            <div className='me-7'>
              <img src={database} alt='me' />
            </div>
            <div className='me-8'>
              <img src={php} alt='me' />
            </div>

            <a href='#contact' className='scroll__down'>Scroll Down</a>
          </div>
        </div>
      </header>
  )
}

export default Header