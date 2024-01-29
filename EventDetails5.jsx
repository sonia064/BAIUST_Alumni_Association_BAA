import React from 'react';
import './EventDetails1.css';
import { Link } from 'react-router-dom';

const EventDetails5 = () => {
  return (
    <div className="evennt-details">
      <div className="imagge-container">
        <img src="/event6.jpg" alt="Event 2" />
      </div>
      <p>
        <b>ASSALAMU ALAIKUM EVERYONE</b>  
       <br/>     
       Department of English,  BAIUST organized 'Pitha Utsob' ( পিঠা উৎসব)  and 'Choruivathi' (চড়ুইভাতি) on 23 January 2024.   Brig Gen Md Habibul Huq, psc, the Vice Chancellor,  Col Professor Md Mosharrof Hossain (Retd), Treasurer and 
Col Md Badrul Ahsan, psc (Retd), Registrar of the University joined the programmes
        <br/>       

       </p>
      <Link to="/events">Back</Link>
      {/* Footer */}
      <footer className="footr">
        <p>© 2024 Our Event Details Card</p>
      </footer>
    </div>
  );
};

export default EventDetails5;
