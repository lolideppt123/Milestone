import React from 'react';
import './about.css';
import ME from '../../assets/me-about-solo.jpg';
import {FaAward} from 'react-icons/fa';
import {CgProfile} from 'react-icons/cg';

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
      

        <div className="about__content">

          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Number of  Years Working</small>
            </article>

            <article className="about__card">
              <CgProfile className='about__icon'/>
              <h5>Clients</h5>
              <small>Number of Clients</small>
            </article>

            <article className="about__card">
              <a href="#portfolio">
              <FaAward className='about__icon'/>
              <h5>Projects</h5>
              <small>Number of Projects</small>
              </a>
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium reiciendis, totam iure aspernatur consequatur qui quo repudiandae corporis illo sint nam ea voluptatum beatae est dolores, quos culpa sapiente id.</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
        
      </div>

    </section>
  )
}

export default about