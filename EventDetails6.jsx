import React from 'react';
import './EventDetails1.css';
import { Link } from 'react-router-dom';

const EventDetails6 = () => {
  return (
    <div className="evennt-details">
      <div className="imagge-container">
        <img src="/event7.jpg" alt="Event 2" />
      </div>
      <p>
        <b>ASSALAMU ALAIKUM EVERYONE</b>  
       <br/>     
       As part of the app developer program bdapps by Robi is conducting ‘Developer Workshop on
Android Apps Development’ , ‘Digital Entrepreneurship’ and ‘Building up Android App
Developer Community’ in very few selected Universities.
Android Application holds 85% of the share in the application market and there is endless
opportunity for app developers. bdapps intends build a platform where the potential app
developers may come to contribute in this field of great opportunity
Col Md Badrul Ahsan, psc (Retd), Registrar of the University joined the programmes
        <br/>   
       <b>Some of the major goals of android app developer workshop are:
</b>
<br />    
        1. Motivate and encourage students to take part in android application development <br />
        2. Delivering standard knowledge of industry and guidelines to build apps on demand <br />
        3. Training to use state of the art Telco API to handle in app registration and billing <br />
        4. Providing application promotion and marketing ideas <br />
        5. Career support and consultation <br />
        6. Developing entrepreneurship skills <br />
       </p>
      <Link to="/events">Back</Link>
      {/* Footer */}
      <footer className="footr">
        <p>© 2024 Our Event Details Card</p>
      </footer>
    </div>
  );
};

export default EventDetails6;
