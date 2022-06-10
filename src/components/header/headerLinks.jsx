import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {BsDribbble} from 'react-icons/bs';

const headerLinks = () => {
  return (
    <div className='headerLinks'>
        <a href="https://linkedin.com" target="__blank">{<BsLinkedin />}</a>
        <a href="https://github.com" target="__blank">{<BsGithub />}</a>
        <a href="https://dribble.com" target="__blank">{<BsDribbble />}</a>
    </div>
  )
}

export default headerLinks