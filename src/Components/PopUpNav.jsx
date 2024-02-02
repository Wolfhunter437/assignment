import React from 'react'

export default function PopUpNav() {
  return (
    <div className='popUp'>
      <div className="navBg">
        <div className='imgOverlay'></div>
        <img src="./Assets/menuBg.jpg" alt="" />
      </div>
      <div style={{ position: 'absolute', zIndex: 997, width: '100vw', height: '100vh' }}>
        <button className='popUpNav-close'>Close</button>
        <div className='popup-nav'>
          <div>

          <ul className='nav-ul'>
            <hr />
            <li><a href='#'>HOME</a></li>
            <hr />
            <li><a href='#'>SERVICES</a></li>
            <hr />
            <li><a href='#'>WHO WE ARE</a></li>
            <hr />
            <li><a href='#'>OUR TECHNOLOGY</a></li>
            <hr />
            <li><a href='#'>CONTACT</a></li>
            <hr />
          </ul>
          <div className="follow">
            <span>Follow Us</span>
            <i class="fa-brands fa-linkedin-in"></i>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-x-twitter"></i>
          </div>
          </div>
          <ul className="notNav">
            <div>
            <li>
              <h2>GSSAs</h2>
              <p>General Sales & Services Agents</p>
            </li>
            <li>
              <h2>GSA</h2>
              <p>General Sales Agents</p>
            </li>
            <li>
              <h2>TMC</h2>
              <p>Total Cargo Management</p>
            </li>
            <li>
              <h2>CSA</h2>
              <p>Cargo Sales Agent</p>
            </li>
            <li>
              <h2>BSA</h2>
              <p>Block Space Agreement</p>
            </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}
