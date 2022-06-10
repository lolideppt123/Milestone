import React from 'react';
import CV from '../../assets/cv.pdf';

const headBtn = () => {
  return (
    <div className="headBtn">
        <a href={CV} className="btn">My CV</a>
        <a href="#contact" className="btn btn-primary">Contact Me!</a>
    </div>
  )
}

export default headBtn