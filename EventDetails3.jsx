import React from 'react';
import './EventDetails1.css';
import { Link } from 'react-router-dom';

const EventDetails3 = () => {
  return (
    <div className="evennt-details">
      <div className="imagge-container">
        <img src="/event4.jpg" alt="Event 2" />
      </div>
      <p>
        <b>🚀 Elevate Your Skills in Two Weeks! 🌐💻</b>  
       <br/>
      
       Join the Web Development Bootcamp organized by BAIUST Computer Club (BCC), supported by bongoDev! 🎓✨  <br/>

       Immerse yourself in Git, GitHub, JavaScript, HTML, CSS, and deployment strategies. Earn a Certificate of Completion and showcase your talent in Intra-University and Inter-University Hackathons! 🏆💡
        Ready to level up? 🔥 Embrace the journey with us! 💻✨ <br/>
        #WebDevJourney <br/> #CodingAdventure <br/>
        Registration Link - <br/>
        <a href="https://l.facebook.com/l.php...">https://l.facebook.com/l.php...</a>
         <br/>
        Don't miss out on this opportunity to enhance your skills and connect with fellow tech enthusiasts! 🚀👩‍💻👨‍💻
        
        <br/>
        
         #WebDevelopment  <br/>
         #TechEnthusiasts  <br/>
         #JoinTheJourney
        <br/>
     </p>
      <Link to="/events">Back</Link>
      {/* Footer */}
      <footer className="footr">
        <p>© 2023 Our Event Details Card</p>
      </footer>
    </div>
  );
};

export default EventDetails3;
