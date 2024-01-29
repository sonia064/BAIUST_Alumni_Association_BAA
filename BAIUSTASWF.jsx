import React, { useState, useEffect } from 'react';
import './BAIUSTASWF.css';
import { Link } from 'react-router-dom'; 
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'; 
import DonationSummaryModal from './DonationSummaryModal';
import CheckupForm from './CheckupForm';




function BAIUSTASWF() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedThumbnailIndex, setSelectedThumbnailIndex] = useState(0);
    const [showContactSubMenu, setShowContactSubMenu] = useState(false);
    const [donations, setDonations] = useState([]);
    const [donationAmount, setDonationAmount] = useState('');
    const [showDonationSummaryModal, setShowDonationSummaryModal] = useState(false);
    const [showCheckupForm, setShowCheckupForm] = useState(false);



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

    const handleDonationInputChange = (e) => {
        setDonationAmount(e.target.value);
    };

    const handleAddToCart = () => {
        if (!donationAmount) {
            // Don't add empty donations
            return;
        }

        const newDonation = {
            amount: parseFloat(donationAmount),
        };

        setDonations([...donations, newDonation]);
        setDonationAmount(''); // Clear the input field after adding to cart
    };

    const openDonationSummaryModal = () => {
        setShowDonationSummaryModal(true);
      };
      
      const closeDonationSummaryModal = () => {
        setShowDonationSummaryModal(false);
      };


      
  const openCheckupForm = () => {
    setShowCheckupForm(true);
  };

  const closeCheckupForm = () => {
    setShowCheckupForm(false);
  };

  const handleCheckupSubmit = (formData) => {
    // Perform actions with the form data (e.g., show notification)
    console.log('Form Data:', formData);

    // Display a notification (you can customize this part)
    alert('Your amount is successfully added for health checkup!');
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
                onMouseLeave={handleSubMenuClose} >
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

        {/* Subheader section */}
        <div className="subheader">
        <h2>BAIUSTAS Welfare Fund</h2>
        <p>BAIUSTASWF is collecting fund now...</p>
        </div>

      

      {/* Mid section */}
      <div className="mid-section">
        {/* Left box with image and animation */}
        <div className="left-boxx">
          <img src="/fund.png" alt="BAIUSTASWF Image" />
          <div className="animation-message">BAIUSTASWE</div>
        </div>

        {/* Right box with paragraph */}
        <div className="right-boxx">
          <p>
         <b> BAIUSTAS Welfare Fund (BAIUSTASWF)</b> <br /> <br /> 
                BAIUST Alumni Society Welfare Fund (BAIUSTASWF) is one of the vital funds of BAIUSTAS Treasury. 
                <br /> <br /> 
                The sole purpose of BAIUSTASWF is to accumulate donations through online/offline channels for the purpose of humanitarian activities.
                <br /> <br /> 

                BAIUST Alumni / Former students of BAIUST are entitled to be the topmost priority to receive assistance from BAIUSTASWF. BAIUSTASWF may also extend their support for current students of BAIUST with proper justification of fund requirement forwarded by competent authority and/or BAIUST.
                <br /> <br />

                BAIUSTAS team believes in <b>“GIVE MORE, LIVE MORE”</b> and we are optimistic to build a better community with the collective help from our donors.
          </p>
        </div>  </div>



        {/* Checkup form section */}
      {showCheckupForm && (
        <CheckupForm onClose={closeCheckupForm} onCheckupSubmit={handleCheckupSubmit} />
      )}

         {/* Donation section */}


         {donations.length > 0 && showDonationSummaryModal && (
        <DonationSummaryModal donations={donations} onClose={closeDonationSummaryModal} />
      )}


      <div className="donation-section">
        <br /> <br /> <br />
        <p className="donation-message">Please write the amount you want to donate</p>
        <div className="donation-input">
          <label htmlFor="donationAmount">TK</label>
          <input
            type="text"
            id="donationAmount"
            placeholder="1000"
            value={donationAmount}
            onChange={handleDonationInputChange}
          />
        </div>
        
          <button className="add-to-cart-btn" onClick={handleAddToCart}> 
          Add to Cart
          </button>
 

         
          



        
        <button className="view-summary-btn" onClick={openDonationSummaryModal}>
        View Summary
        </button>


        <button className="health-checkup-btn" onClick={openCheckupForm}>
        Details Check
        </button>

        <br /> <br /> <br />
      </div>


     
    
{/* {donations.length > 0 && <DonationSummary donations={donations} />} */}
    
    




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


export default BAIUSTASWF;