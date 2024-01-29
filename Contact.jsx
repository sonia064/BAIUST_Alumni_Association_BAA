import React, { useState, useEffect } from 'react';
import './Contact.css';
import { Link } from 'react-router-dom'; 
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'; 
 


function Contact() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedThumbnailIndex, setSelectedThumbnailIndex] = useState(0);
    const [showContactSubMenu, setShowContactSubMenu] = useState(false);
  
   
  const toggleContactSubMenu = () => {
    setShowContactSubMenu(!showContactSubMenu);
  };


  const handleSubMenuClose = () => {
    setShowContactSubMenu(false);
  };

  const handleSubMenuToggle = () => {
    setShowContactSubMenu(!showContactSubMenu);
  };

  const handleSubMenuItemClick = () => {
    // This function handles the click event on submenu items
    // It closes the submenu when an item is clicked
    setShowContactSubMenu(false); // Close the submenu
    // Add additional functionality specific to each submenu item click here if needed
  };
return (
    <div className="App">
      <header>
        {/* Header with buttons and logo */}
        <div className="header">
          <div className="logo">
            <img src="/BAIUST_logo.png" alt="" />
          </div>
          <div className="headline-container">
            <div className="headline">
              <span>Welcome to</span>
              <span>BAIUST Alumni Association</span>
            </div>
          </div>
          <nav>
            <ul>
            <li className="nav-item ">
            <Link to="/" className="tag"> Home </Link></li>
            <li className="nav-item">About</li>
            <li className="nav-item">Activities</li>
            <li
                className="nav-item"
                onClick={toggleContactSubMenu}
                onMouseLeave={handleSubMenuClose}
              >
                Contact
                {showContactSubMenu && (
                  <ul className="submenu">
                    <li>
                      <a href="https://messagepagevoice.netlify.app/">Message Alumni</a>
                    </li>
                    <li>
                    <Link to="/contact" className=""> Call Alumni </Link>
                    </li>
                    {/* Additional submenu items */}
                  </ul>
                )}   
                <FontAwesomeIcon icon={faAngleDown} className="custom-icon" />        
                
              </li>
            <li className="welfare">BAIUSTASWF</li>
            </ul>
          </nav>
        </div>
      </header>



       {/* Contact section */}
       <div className="contact-section">
        <div className="contact-heading">
          <h1>Contact</h1>
        </div>
        <div className="communicate-subheading">
          <h2>Communicate</h2>
        </div>
        <div className="alumni-association-message">
          <p>BAIUST Alumni Association</p>
        </div>
        <br />
        <div className="communicate-subheading">
          <h2>Md. Shamsuddoha Russell</h2>
        </div>
        <div className="alumni-association-message">
          <p>President,</p>
          <p>BAIUST Alumni Association</p>
          <p>baiust.baiust03@gmail.com</p>
        </div>
        <br />
        <div className="communicate-subheading">
          <h2>Moinul Momen</h2>
        </div>
        <div className="alumni-association-message">
          <p> General Secretary,</p>
          <p>BAIUST Alumni Association</p>
          <p>baiust@gmail.com</p>
        </div>
    </div>

    {/* Footer section */}
    <div className="foot">
        <div className="footer-box">
          <h3>About</h3>
          <p>Alumni in different parts of the world have formed 
            Chapters of their associations. These Chapters work 
            actively towards promoting networking among themselves 
            and with the institute as well. Organizing alumni 
            Reunions is an integral part of the Alumni Association of BAIUST.</p>
        </div>
        <div className="footer-box">
          <h3>Features</h3>
          <ul>
            <li>News</li>
            <li>Stories</li>
            <li>Activities</li>
          </ul>
        </div>
        <div className="footer-box">
          <h3>Links</h3>
          <ul>
            <li>Facebook</li>
            <li>Policies</li>
            <li>YouTube</li>
            {/* Add other links as needed */}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Contact;