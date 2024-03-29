import React, { useEffect } from 'react'
import PopUpNav from './PopUpNav';

export default function Navbar() {
  useEffect(() => {
    let logo1 = document.getElementsByClassName('logo1')[0];
    let logo2 = document.getElementsByClassName('logo1')[1];
    let phone = document.getElementsByClassName('phoneNumber')[0];
    let hamburger1 = document.getElementsByClassName('bar')[0];
    let hamburger2 = document.getElementsByClassName('bar')[1];
    let hamburger3 = document.getElementsByClassName('bar')[2];
    let nav = document.getElementById('nav');

    window.addEventListener('scroll', function () {
      let value = window.scrollY

      if (value >= 50) {
        logo1.style.display = 'none';
        logo2.style.display = 'block';
        nav.style.background = 'white';
        nav.style.boxShadow = '0px 0px 15px rgba(0, 0, 0, 0.4)';
        nav.style.transition = 'all 0.7s ease';
        phone.style.color = 'black';
        hamburger1.style.background = 'black';
        hamburger2.style.background = 'black';
        hamburger3.style.background = 'black';
      }
      else {
        logo1.style.display = 'block';
        logo2.style.display = 'none';
        nav.style.background = 'transparent';
        nav.style.boxShadow = 'none';
        phone.style.color = 'white';
        hamburger1.style.background = 'white';
        hamburger2.style.background = 'white';
        hamburger3.style.background = 'white';
      }
    })


    const openNav = document.querySelectorAll('.hamburger');

    const handleButtonClick = () => {
      const popupMenus = document.querySelectorAll('.popup');
      for (const popupMenu of popupMenus) {
        popupMenu.classList.add('active');
      }
    };

    const closeMenu = () => {
      const popupMenus = document.querySelectorAll('.popup');
      for (const popupMenu of popupMenus) {
        popupMenu.classList.remove('active');
        popupMenu.classList.add('closing');
        setTimeout(() => {
          popupMenu.classList.remove('closing');
        }, 1500);
      }
    };

    for (const button of openNav) {
      button.addEventListener('click', handleButtonClick);
    }

    const closeButtons = document.querySelectorAll('.popUpNav-close');
    for (const closeButton of closeButtons) {
      closeButton.addEventListener('click', closeMenu);
    }
  });

  const renderContent = () => {
    return <PopUpNav />
  }

  return (
    <nav className='navbar' id='nav'>
      <div className='hamburger-container'>
      <button className='hamburger'>
        <div className="bars">
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
        </div>
      </button>
      </div>
      <div className='logo'>
        <img className='logo1' src="./Assets/logo.png" alt="" />
        <img className='logo1' src="./Assets/logo1.png" alt="" />
      </div>
      <div className='phoneNumber'>
        <span className="material-symbols-outlined">call</span>
        <span className='number'>+91-124-7125074</span>
      </div>

      <div className="popup">
        {renderContent()}
      </div>
    </nav>
  )
}
