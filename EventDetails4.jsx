import React from 'react';
import './EventDetails1.css';
import { Link } from 'react-router-dom';

const EventDetails3 = () => {
  return (
    <div className="evennt-details">
      <div className="imagge-container">
        <img src="/event5.jpg" alt="Event 2" />
      </div>
      <p>
        <b>ASSALAMU ALAIKUM EVERYONE</b>  
       <br/>     
       "BAIUST Junior Inter University Programming Contest" just took place, organized by "BAIUST Computer Club". Students up to 2nd year were eligible for the contest. The mock contest was on 29th May and the Final contest held in 30th May.
        <br/>       
        "SUST_JCPSCbros" ranked top of the list. Heartiest congratulations to them. 🎉
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
