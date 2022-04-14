import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import ME from '../../assets/me.png';
import "./header.css";


const Header = () => {
  return (
    
    <header>
      
        <div className='container header__container'>
            <h5>Hello I'm</h5>
            <h1>Olang Daniel</h1>
            <h5 className='text-light'>Fullstack Developer</h5>
            <CTA />
            <HeaderSocials />
            <div className='me-0'>
              <img src={ME} alt='me' />
            </div>
            <div className='me-1'>
              <img src={ME} alt='me' />
            </div>
            <div className='me-2'>
              <img src={ME} alt='me' />
            </div>

            <a href='#contact' className='scroll__down'>Scroll Down</a>

        </div>
      </header>
  )
}

export default Header