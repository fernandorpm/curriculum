import React from 'react';
import './styles.css';
import { GitHub, Linkedin, Phone } from 'react-feather';
import ProfilePic from '../../../images/me.png';

function Index() {

  return (
    <div className="Container ContainerIndex">
      <img className="ProfilePic" src={ProfilePic} alt="Just me staring at you :)" />
      <h2>Fernando R P Marques</h2>
      <p className="Sub"> Fullstack Web and Mobile Developer</p>
      <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=frpm1001@gmail.com&body=Hello There! You're just what we needed for our team!"
        target="_blank"
        rel="noopener noreferrer"
        className="HireButton">
        <b>Hire me</b>
      </a>
      <div className="SocialPack">
        <a className="SocialButton" href="https://github.com/fernandorpm" target="_blank" rel="noopener noreferrer"><GitHub size={24} /></a>
        <a className="SocialButton" href="https://www.linkedin.com/in/fernandorpm" target="_blank" rel="noopener noreferrer"><Linkedin size={24} /></a>
        <a className="SocialButton" href="https://wa.me/5512981145270?text=Hello!" target="_blank" rel="noopener noreferrer"><Phone size={24} /></a>
        <br/>
        <span className="HireAlert">Clicking the 'Hire Me' button will attempt to open a gmail window to send an e-mail for me. If you use any other e-mail application, contact me manually: frpm1001@gmail.com</span>
      </div>
    </div>

  );
}

export default Index;
