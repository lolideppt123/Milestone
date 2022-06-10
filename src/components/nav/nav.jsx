import React, {useState} from 'react';
import './nav.css';
import {AiFillHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BsFillBriefcaseFill} from 'react-icons/bs';
import {RiServiceFill} from 'react-icons/ri';
import {RiContactsBook2Fill} from 'react-icons/ri';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>{<AiFillHome />}</a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>{<AiOutlineUser />}</a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>{<BsFillBriefcaseFill />}</a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}>{<RiServiceFill />}</a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>{<RiContactsBook2Fill />}</a>
    </nav>
  )
}

export default Nav