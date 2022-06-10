import React from 'react';
import './experience.css';
import {FaCheck} from 'react-icons/fa';

const experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      {/* Start of Frontend Development */}
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaCheck className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCheck className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCheck className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCheck className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCheck className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/* End of Frontend Development */}

        {/* Start of Backend Development */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaCheck className='experience__details-icon' />
              <div>
                <h4>NodeJS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCheck className='experience__details-icon' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCheck className='experience__details-icon' />
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCheck className='experience__details-icon' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>
          </div>
        </div>
        {/* End of backend Development */}

        {/* Start of Development Tools */}
        <div className="experience__devtools">
          <h3>Development Tools</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaCheck className='experience__details-icon' />
              <div>
                <h4>WordPress</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCheck className='experience__details-icon' />
              <div>
                <h4>NPM</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCheck className='experience__details-icon' />
              <div>
                <h4>Azure Web Services</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCheck className='experience__details-icon' />
              <div>
                <h4>AWS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCheck className='experience__details-icon' />
              <div>
                <h4>Photoshop</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCheck className='experience__details-icon' />
              <div>
                <h4>Photoshop</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCheck className='experience__details-icon' />
              <div>
                <h4>AdobeXD</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/* End of Development Tools */}
      </div>
    </section>
  )
}

export default experience