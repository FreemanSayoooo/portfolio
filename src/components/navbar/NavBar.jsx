import React from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css'
import logo from '../../assets/IMG_5850.png';

const NavBar = () => {
  return (
    <div className='port__navbar'>
      <div className='port__navbar-links'>
        <div className='port__navbar-links_logo'>
        <img src={logo} alt="logo" />
        </div>
        <div className='port__navbar-links_container'>
          <p><a href="home">Home</a></p>
          <p><a href="projects">Projects</a></p>
          <p><a href="Contacts">Contacts</a></p>
        </div>
      </div>
    </div>
  )
}

export default NavBar
