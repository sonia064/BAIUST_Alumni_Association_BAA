import React, { useState, useEffect } from 'react';
import './Benefits.css';
import { Link } from 'react-router-dom'; 
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'; 



function Benefits() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedThumbnailIndex, setSelectedThumbnailIndex] = useState(0);
  const [showContactSubMenu, setShowContactSubMenu] = useState(false);
  const [showMemberSubButtons, setShowMemberSubButtons] = useState(false);


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
   
    setShowContactSubMenu(false); 
     
  };


  const toggleMemberSubButtons = () => {
    setShowMemberSubButtons(!showMemberSubButtons);
  };



  // Inside functional component
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // This provides a smooth scroll animation
  });
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
            <li className="nav-item">Home</li>
            <li className="nav-item">About</li>
            <li className="nav-item be-our-member" onClick={toggleMemberSubButtons}>
            Be Our Member
            <FontAwesomeIcon icon={faAngleDown} className="custom-icon" />
            {showMemberSubButtons && (
              <ul className="submenuu member-submenuu">
                {/* Render three stylish sub buttons */}
                <li>
                  <button className="buttonn">
                  <Link to="/benefits" className=""> Benefits </Link>

                    </button>
                </li>
                <li>
                  <button className="buttonn">Life Time <br /> Membership Form</button>
                </li>
                <li>
                  <button className="buttonn">General <br/> Membership Form </button>
                </li>
              </ul>
            )}
          </li>
            <li className="nav-item">Activities
            <FontAwesomeIcon icon={faAngleDown} className="custom-icon" />  
            </li>
            <li
                className="nav-item"
                onClick={toggleContactSubMenu}
                onMouseLeave={handleSubMenuClose}
              >
                Contact
                {showContactSubMenu && (
                  <ul className="submenu">
                    <li onClick={handleSubMenuItemClick}>
                      <a href="https://messagepagevoice.netlify.app/"> Message Alumni </a>
                    </li>
                    <li onClick={handleSubMenuItemClick}>
                    <Link to="/contact" className=""> Call Alumni </Link>
                    </li>
                    {/* Additional submenu items */}
                  </ul>
                )}   
                <FontAwesomeIcon icon={faAngleDown} className="custom-icon" />        
                
              </li>
            <li className="welfare">
            <Link to="/baiustaswf" className="welf" >  BAIUSTASWF </Link>
             </li>
            </ul>
          </nav>
        </div>
      </header>


      <main className="main">
            <div className="benefits-container">
            <h1 className="headlinee">Benefits of becoming the Life Member of the BAIUST Alumni Association- BAA. </h1>
            <ol className="benefits-list">
                <li> <b>Global Alumni Network:</b> Join a worldwide network of BAIUST alumni, connecting you to a diverse and influential community around the globe.</li>
                <li> <b>Institute-Alumni Bridge:</b> The Alumni Association serves as a vital link between the Institute and its graduates, fostering collaboration and communication.</li>
                <li> <b>Stay Informed:</b> Receive the BAIUST Konnect (BAIUST Newsletter) and other BAIUST publications to stay updated on the latest news and events at your alma mater.</li>
                <li> <b>Local Chapters:</b> Access Alumni Chapters globally, participating in regular chapter get-togethers and exclusive events.</li>
            

                <li> <b>Special Institute Events:</b> Be invited to special events and ceremonies hosted by the Institute and Alumni Chapters worldwide.</li>
                <li> <b>Batch Reunions:</b> Attend milestone batch/class reunions like the 1st, 2nd, 3rd, 9th, 10th, and 11th, with assistance from the Alumni Association in organizing
                other batch reunions upon request. Reunion photos and videos are made available through the website here after the events.</li>
                <li> <b>Academic Services:</b>  Obtain your academic transcripts and other certificates conveniently through the Alumni Association.</li>
                <li> <b>Mentorship:</b> Benefit from mentoring opportunities provided by senior alumni, including participation in SEE and SMC programs.</li>
            

                <li> <b>Souvenir Shop:</b> Explore the Alumni Association's own souvenir shop, where you can find memorabilia and merchandise celebrating your alma mater.</li>
                <li> <b>Exclusive Email ID:</b> Receive a permanent email ID (e.g., xxxxyop@baiustalumni.org) by sending a request to office@iitkalumni.org, providing your personal details, alumni ID, and more.</li>
                <li> <b>Credit Card Facility:</b> Enjoy access to an exclusive credit card facility designed for alumni, offering competitive terms, customized designs, and rewards programs. Insurance Policy: Secure your financial future with a comprehensive insurance policy tailored to the needs of our alumni.</li>
                <li> <b>Campus Tours:</b> The Alumni Association can assist in organizing campus tours for you and your family, allowing you to revisit and explore the campus.</li>
            

                <li> <b>Campus Facilities:</b>  Enjoy discounted rates for alumni in the Visitors Hostel, book VH rooms at BAIUST, and access other campus facilities. Additionally, you can visit hostels, the library, departments, labs, and even meet with faculty members with the Alumni Association's help.</li>
                <li> <b>Privacy and Security:</b> Rest assured that your life membership database is maintained securely by the Alumni Association and not shared with unauthorized parties. It also offers Degree Verification Services for pre- and post-employment screening companies.</li>
                <li> <b>Stay Informed:</b> Receive the BAIUST Konnect (BAIUST Newsletter) and other BAIUST publications to stay updated on the latest news and events at your alma mater.</li>
                <li> <b>Local Chapters:</b> Access Alumni Chapters globally, participating in regular chapter get-togethers and exclusive events.</li>
            
            </ol>
            </div>
            

      </main>
   
       
  <footer>
        {/* Footer */}
    <div className="footer">
    <div className="footer-content">
      <img src="/BAIUST_logo.png" alt="Footer Image" className='footer-img' />
      <div className="text-lines">
        <p>BAIUST- Bangladesh Army International University of Science and Technology</p>
        <p>4 Sayedpur Kalakochuya Road,Sector-10, Cumilla Cantonment, Cumilla-3500.</p>
        <p>Phone: (88 02) 55091801-5, Mobile : +88 01714 014 933, 01810030041-8 (Hunting), 01325080581-8(Hunting)</p>
        <p>Fax: (880-2) 5895 2625, Email : soniaakter000000@gmail.com</p>
        <p>Our Membersip Registration is OPEN. Grab Your BAIUSTAS Membership NOW </p>
        <p>© 2023 BAIUST Alumni Association (BAA)</p>
       <div className="footer-image">
        <img src="/unnamed.png" alt="Upward" onClick={scrollToTop} />
      </div></div>
    </div>
  </div>
        
  </footer>

      {/* Sub Footer */}
      <div className="sub-footer">
          <p className="sub-footer-text">BAIUST bla bla</p>
      </div>
    </div>
  );
}

export default Benefits;
 