import React from 'react';
import "./about.css";
import ME from '../../assets/me-about.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About Me" />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5 className=''>Experience</h5>
              <small className=''>3+ Years working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5 className=''>Client</h5>
              <small className=''>200+ Clients</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5 className=''>Projects</h5>
              <small className=''>80+ completed</small>
            </article>
          </div>
          <p className=''>
            lorem isperei jdfweroe fewfjenrfwe rfwejnrfwenrf ewjrnwne fghfgei hefgi ti43trg rfhreue urwgeri iu4rg4ir 4ryg44rh y4rgwer jwyrgbe rigy43rbweryhgrw4yrg yu4rhewrb ywgrbw ytrgwebrrbur uiw4rhwebru erb
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About