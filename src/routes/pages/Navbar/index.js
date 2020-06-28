import React from 'react';
import './styles.css';
import { Menu, Coffee, Code, Heart, BookOpen, FileText } from 'react-feather';
import { NavLink } from 'react-router-dom';
import FM from '../../../images/FM.png';
import CV from '../../../pdfs/CV_FernandoRPM.pdf';

function Navbar() {
  const handleNavbarMobile = () => {
    let navbar = document.querySelector('.NavbarMobile');
    navbar.classList.toggle('expand');
  }

  return (
    <>
    <div className="Navbar">
      <NavLink to="/" className="NavbarButton"><img src={FM} className="MenuIcons IndexIcon" alt="My own 5-minute-made logo"/><p>Home</p></NavLink>
      <NavLink to="Profile" className="NavbarButton"><Coffee color="#d1d1d1" size={24} className="MenuIcons" /> <p>Profile</p></NavLink>
      <NavLink to="Projects" className="NavbarButton"><Code color="#d1d1d1" size={24} className="MenuIcons" /><p>Projects</p></NavLink>
      <NavLink to="Accomplishments" className="NavbarButton"><Heart color="#d1d1d1" size={24} className="MenuIcons" /><p>Accomplishments</p></NavLink>
      <NavLink to="Education" className="NavbarButton"><BookOpen color="#d1d1d1" size={24} className="MenuIcons" /><p>Education</p></NavLink>
      <a href={CV} target="_blank" rel="noopener noreferrer" className="NavbarButton"><FileText color="#d1d1d1" size={24} className="MenuIcons" /><p>Curriculum</p></a>
    </div>

    <div className="NavbarMobile">
      <button className="NavbarMobileButton" onClick={handleNavbarMobile}><Menu color="#d1d1d1" size={24} /></button>
      <NavLink to="/" className="NavbarButton" onClick={handleNavbarMobile}><p>Home</p></NavLink>
      <NavLink to="/Profile" onClick={handleNavbarMobile}><p>Profile</p></NavLink>
      <NavLink to="/Projects" onClick={handleNavbarMobile}><p>Projects</p></NavLink>
      <NavLink to="/Accomplishments" onClick={handleNavbarMobile}><p>Accomplishments</p></NavLink>
      <NavLink to="/Education" onClick={handleNavbarMobile}><p>Education</p></NavLink>
      <a href={CV} target="_blank" rel="noopener noreferrer" onClick={handleNavbarMobile}><p>Curriculum</p></a>
    </div>
    </>
  );
}

export default Navbar;
