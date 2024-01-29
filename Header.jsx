import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom'; 
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faAngleDown } from '@fortawesome/free-solid-svg-icons'; 



function Header() {
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


  const images = [
    '/alumni_.jpg',
    '/IMG_8901.JPG',
    '/IMG_9045.JPG',
    '/IMG_9059.JPG',
    '/DSC_0141.JPG',
    '/IMG_8910.JPG',
    '/IMG_8926.JPG',
  ];

  const nextSlide = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
    setSelectedThumbnailIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
    setSelectedThumbnailIndex(newIndex);
  };

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
    setSelectedThumbnailIndex(index);
  };

  const renderThumbnails = () => {
    return images.map((image, index) => (
      <div
        key={index}
        className={`thumbnail ${index === selectedThumbnailIndex ? 'active' : ''}`}
        onClick={() => handleThumbnailClick(index)}
      >
        <img src={image} alt={`Thumbnail ${index}`} />
      </div>
    ));
  };







  const autoChangeSlide = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
    setSelectedThumbnailIndex(newIndex);
  };

  useEffect(() => {
    // Change slide every 3 seconds (adjust as needed)
    const intervalId = setInterval(autoChangeSlide, 3000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentImageIndex]);




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
            <li className="nav-item">
            <Link to="/events" className="bt nav-item"> Events Page </Link>
            </li>

            <li className="nav-item be-our-member" onClick={toggleMemberSubButtons}>
            Be Our Member
            <FontAwesomeIcon icon={faAngleDown} className="custom-icon" />
            {showMemberSubButtons && (
              <ul className="submenuu member-submenuu">
                {/* Render three stylish sub buttons */}
                <li>
                  <button className="buttonn">
                  <Link to="/benefits" className="nav-item"> Benefits </Link> </button>
               </li>
                <li>
                  <button className="buttonn">
                  <Link to="/lifetimemember" className="nav-item">Life Time<br /> Membership Form</Link></button>
               </li>
               <li>
                  <button className="buttonn">
                  <Link to="/generalmember" className="nav-item">General<br/> Membership Form</Link>    </button>
               </li>
           
          </ul>
            

              
            )}
          </li>
          <li className="nav-item">  Activities
            <FontAwesomeIcon icon={faAngleDown} className="custom-icon" />  
           
            {showMemberSubButtons && (
              <ul className="submenuu member-submenuu">
                {/* Render three stylish sub buttons */}
                <li>
                  <button className="buttonn nav-item">
                    <a className="nav-item" href="https://65707617c3dd6e00767a29c1--lighthearted-florentine-9dbb84.netlify.app/?fbclid=IwAR35kGXAggtLb7jAyE7ubGJVNaxvNVNKie-NYgTJB5HENXLjZQ2ZfrscvRw">
                      Policies </a> </button>
                </li>
              
              
              </ul>
            )}
         
           
           
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
                      <a className="nav-item" href="https://messagepagevoice.netlify.app/"> Message Alumni </a>
                    </li>
                    <li onClick={handleSubMenuItemClick}>
                    <Link to="/contact" className=""> Call Alumni </Link>
                    </li>
                
                  </ul>
                )}   
                <FontAwesomeIcon icon={faAngleDown} className="custom-icon" />        
                
              </li>
            <li className="welfare nav-item">
            <Link to="/baiustaswf" className="welf" >BAIUSTASWF </Link>
             </li>
         
            </ul>




            {/* new ul for new design */}
            <ul>   
             <li className="nav-item">
              <FontAwesomeIcon icon={faPlus} className="custom-icon" />  
               <a href="https://alumniupdateinfo.netlify.app/" className="nav-item">Alumni Info</a>
             </li>
         
          
             <li className="nav-item">
             <a href="https://gilded-cocada-40617b.netlify.app/?fbclid=IwAR2Luve77Em682Qufr95XU0E4LvGxMwZ0DQvfwrenL_jmBVCYHEuQMbbuJY" className="nav-item">Executive Committee</a>
             </li>
  
   
             <li className="nav-item">About</li>
     
      
             <li className="nav-item">
             <FontAwesomeIcon icon={faPlus} className="custom-icon" />
              Job Offers
              </li>
       
             <li className="nav-item">Directory</li>

             {/* <li className="nav-item">Home</li> */}
             </ul>

          </nav>
        </div>
      </header>
      <main className="main">
        {/* Blurred background image */}
        <div className="background-image"></div>
        <div className="thumbnails-left">{renderThumbnails()}</div>
        {/* Image slider */}
        <div className="slider-container">
          <div className="slider">
          <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} />
          {/* <button onClick={prevSlide} className='previous'>Prev</button>
          <button onClick={nextSlide} className='next'>Next</button> */}
          </div>
        </div>
    </main>
    <main className="sub-main">
      <div className="buttons-below">
        <button className="alumni-login login">
          <a href="https://65a8133f0a7ec512429d4cfc--brilliant-pasca-f3dc11.netlify.app/" className="alumni">Alumni Login</a></button>
      </div>
      <div className="sub-main-message">
        "Our Alumni Is Our Mirror"
      </div>
      <div className="buttons-below">
        <button className="alumni-login convo login">
        <a href="https://65707a6b8a34aa05a0760b48--luxury-buttercream-bc0dbf.netlify.app/?fbclid=IwAR18Gm_D8zt0EwsQjkFA_64lSI5mxmtzk1YD24BYOnSMp0cA3ey6lbnhM9o" className="alumni">
        Convocation
        </a>
        </button>
      </div>
      
     
       {/* New container for the two parallel boxes */}
        <div className="parallel-boxes">
          <div className="box">
            {/* Content for the first box */}
            <h2>Objectives</h2>
            <p>BAIUST Alumni Association plays a vital role by assisting the 
              university in developing linkage with industries, multinational 
              organizations as well as other firms and companies. Besides that, 
              it assists the interns of BAIUST in finding internship placement in different organizations. 
              It also provides job opportunities to the students of BAIUST.</p>
          </div>
          <div className="box">
            {/* Content for the second box */}
            <h2>Preamble</h2>
            <p>We, the Alumni of the BAIUST—Bangladesh Army International University of Science 
              and Technology, develop mutual interest among ourselves, 
              establish mutually beneficial relations between BAIUST and its Alumni, 
              and promote the interests of BAIUST, 
              do hereby form into an Association and adopt this constitution.</p>
          </div> 
        </div>

        <div className="additional-boxes">
          <div className="box">
            {/* Content for the third box */}
            <h2>Board of Managers</h2>
            <p>The corporate powers and management of the Association shall be 
              exercised, administered and controlled by a Board of Managers 
              which shall consist of the following members: President, 
              Executive Secretary, Finance Secretary, Auditing Secretary, Business Secretary, 
              Press Secretary and representatives of colleges, campus or chapters.</p>
          </div>
          <div className="box">
            {/* Content for the fourth box */}
            <h2>Executive Committee</h2>
            <p>The Executive Committee shall consist of the Executive Secretary, 
              the Finance Secretary, the Auditing Secretary, the Business 
              Secretary, and the Press Secretary. The President shall 
              serve as ex-officio member of the Executive Committee.
              The Executive Committee shall report to the Board of Managers.</p>
          </div>
        </div>



        {/* Headline message */}
               <div className="headline-message">
                  <h2>BAIUST ALUMNI ASSOCIATION (BAA) ADHOC COMMITTEE 2023</h2>
                </div>
                
                {/* Middle box with image and text */}
                <div className="middle-box">
                  <div className="middle-content">
                    <img src="/joy.jpg" alt="Middle Image" />
                    <h3>Subrato Sarkar Joy</h3>
                    <p>Convener</p>
                    Managing Director <br />
                    RNR Limited
                  </div>
                </div>



        <div className="five-boxes-row">
          <div className="box middle-content">
            <img src="/emu.jpg" alt="Image 1" />
            <h3>Md. Imran Hossain Emu</h3>
            <p>Member Secretary</p>
            Lecturer at BAIUST
            <br />
            Dept. of CSE
          </div>
          <div className="box middle-content">
            <img src="/nishan.jpg" alt="Image 2" />
            <h3>Azfar Alam Nishan</h3>
            <p>Member</p>
            Head, Large Corporate
            <br />
            Grameenphone
          </div>
          <div className="box middle-content">
            <img src="/forhadd.jpg" alt="Image 2" />
            <h3>Forhad Uddin Ahmed</h3>
            <p>Member</p>
            Head, HR
            <br />
            Evercare Chittagong
          </div>
          <div className="box middle-content">
            <img src="/sakib.jpg" alt="Image 2" />
            <h3>Sakib Israk</h3>
            <p>Member</p>
            Software Engineer 
            <br />
            Isotope LTD, Dhaka.
          </div>
        </div>



        <div className="five-boxes-row">
          {/* Add three more similar boxes */}
          <div className="box middle-content">
            <img src="/nusratt.jpg" alt="Image 3" />
            <h3>Nusrat Jahan</h3>
            <p>Member</p>
            Director Logistics
            <br />
            ACI
          </div>
          <div className="box middle-content">
            <img src="/saha.jpg" alt="Image 4" />
            <h3>Saha Reno</h3>
            <p>Member</p>
            Lecturer
            <br />
            Dept. of CSE, BAIUST.
          </div>
          <div className="box middle-content">
            <img src="/mun.jpg" alt="Image 5" />
            <h3>Muntakimur Rahaman</h3>
            <p>Member</p>
            Data Scientist 
            <br />
            Synergy Technology solutions
          </div>
          <div className="box middle-content">
            <img src="/Pew.jpg" alt="Image 5" />
            <h3>Fazlina Jannat Pew</h3>
            <p>Member</p>
            Deputy Registrar
            <br />
            BAIUST
          </div>
        </div>
       


    {/* New container for the two parallel boxes */}
          <div className="parallel-boxes">
              {/* Box for "Joined Member" */}
              <div className="joined-member-box">
                <h1>Recently Joined Member</h1>
                <p>Message about joined members</p>
                <div className="buttons-below">
      
                <button className="alumni-login"> 
                {/* <a href="/registration"></a> Join Now - */}
                <Link to="/registration" className="alumni"> Join Now -</Link>
                </button>

                </div>
              </div>
              
              {/* Box for two rows of images */}
              <div className="images-row">
                  <div className="box rounded-image">
                     <img src="/sonia.jpg" alt="Image 6" />
                  </div>
                  <div className="box rounded-image">
                     <img src="/demo.jpg" alt="Image 6" />
                  </div>
                  <div className="box rounded-image">
                     <img src="/demo.jpg" alt="Image 6" />
                  </div>
                  <div className="box rounded-image">
                     <img src="/demo.jpg" alt="Image 6" />
                  </div>
                  
                  {/* Add four more similar rounded image boxes */}
      
              </div>
          </div> 



          <div className="headline-msg">
                <h1>Here is why you should join us</h1>
          </div>

        <div className="three-boxes-row">
          <div className="box mid-content">
            <img src="/image (1).png" alt="Image 1" />
            <h3>Reconnect with your friends, classmates, seniors and 
              juniors in the secured, 
              ad-free BAIUST Alumni Network.</h3>
            {/* <p>Reconnect with your friends, classmates, seniors and juniors in the secured, ad-free IUT Alumni Network.</p> */}
          </div>
          <div className="box mid-content">
            <img src="/image (2).png" alt="Image 2" />
            <h3>Give Back to your alma mater and your fellow 
              alumni by participating in a 
              fundraiser event, mentoring other alumni.</h3>
            {/* <p>Message</p> */}
          </div>
          <div className="box mid-content">
            <img src="/image (3).png" alt="Image 2" />
            <h3>Advance your career, post a job and 
              look for open positions 
              in the companies in your own professional network.</h3>
            {/* <p>Message </p> */}
          </div>
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

export default Header;
 