import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/nasa-api.jpg';
import IMG2 from '../../assets/devicetree.jpg';
import IMG3 from '../../assets/online-store.jpg';
import IMG4 from '../../assets/coffee-shop.jpg';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Charts templates & infographics in figma',
    github: 'https://github.com/lolideppt123',
    demo: 'https://lolideppt123.github.io/NASA-Pictures-API/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Charts templates & infographics in figma',
    github: 'https://github.com/lolideppt123',
    demo: 'https://lolideppt123.github.io/DeviceTree.io/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Charts templates & infographics in figma',
    github: 'https://github.com/lolideppt123',
    demo: 'https://lolideppt123.github.io/OnlineStore/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Charts templates & infographics in figma',
    github: 'https://github.com/lolideppt123',
    demo: 'https://dribble.com'
  },
];

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map( ({id, image, title, github, demo}) => {
              return(
                <article key={id} className="portfolio__item">
                  <div className="portfolio__item-image">
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <a href={github} className="btn">Github</a>
                    <a href={demo} className="btn btn-primary">Live Demo</a>
                  </div>
                </article>
              );
            } 
          )
        }


      </div>
    </section>
  )
}

export default portfolio