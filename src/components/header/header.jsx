import React from 'react';
import './header.css';
import HeadBtn from './headBtn';
import HeadLinks from './headerLinks';
import ME from '../../assets/me.jpg';

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Joseph Piquero</h1>
        <h5 className='text-light'>Web Developer</h5>
        <HeadBtn />
        <HeadLinks />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className='goDown'>Go Down</a>
      </div>
    </header>
  )
}

export default header