import React from 'react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import about from '../../images/about.png';
import './about.css';

const About = () => {
  return (
    <div className="aboutSection">
      <img src={about} alt="about" />
      <h2 className="about"> Hi! I'm Romana 👋</h2>
      <a className="faLinkedin" href="https://www.linkedin.com/in/romanakhatun" target="_blank" rel="noreferrer">
        <FaLinkedin />
      </a>
      <a className="faGithubSquare" href="https://github.com/romanakhatun" target="_blank" rel="noreferrer">
        <FaGithubSquare />
      </a>
    </div>
  );
};

export default About;