import React from 'react';
import './EventDetails1.css';
import { Link } from 'react-router-dom';

const EventDetails2 = () => {
  return (
    <div className="evennt-details">
      <div className="imagge-container">
        <img src="/event3.jpg" alt="Event 2" />
      </div>
      <p>
        <b>DevFest AI Hackathon 2023!!!</b>  
       <br/>
      
      <b>HELLO EVERYONE!</b>  <br/>
            Its time for "CSE OLYMPIAD 1.0"   <br/>
            Registration Starts: 23 October, 2023 12:00AM   <br/>
            Registration End: 05 November, 2023 11:59PM   <br/>
            Registration Link: 
            <a href="https://forms.gle/Mc5CU9i15rfWgPUc6 ">
            https://forms.gle/Mc5CU9i15rfWgPUc6 
            </a>
              <br/>
            EVENT DETAILS:   <br/>
            DAY 01 (7TH NOVEMBER, 2023)   <br/>
            📝 Quiz test (Programming language, ICT, Math, Physics Related Question)   <br/>
            Registration fee : 0/- (Free)   <br/>
            Participants: Only CSE Department    <br/>
            DAY 01 & 02 ( 7TH & 8TH NOVEMBER )    <br/>
            Indoor Games ( Open for all )    <br/>
            ♟♟ Chess    <br/>
            Registration Fee: 50/-    <br/>
            🧩 Rubik's Cube    <br/>
            Registration Fee: 20/- (Free for BCC members & CSE 18th Batch)    <br/>
            🎛 N Queen problem    <br/>
            Registration Fee: 20/- (Free for BCC members & CSE 18th Batch)   <br/>
            🖥 Programming Puzzle    <br/>
            Registration Fee: 20/- (Free for BCC members & CSE 18th Batch)    <br/>
            ⏳ Sudoku    <br/>
            Registration Fee: 20/- (Free for BCC members & CSE 18th Batch)    <br/>
            ⁉️ Error Detection    <br/>
            Registration Fee: 20/- (Free for BCC members & CSE 18th Batch)    <br/>
            🔡 Fast typing    <br/>
            Registration Fee: 20/- (Free for BCC members & CSE 18th Batch)    <br/>
            ✅ All Indoor Games (together)    <br/>
            Registration Fee: 100/- (50/- for BCC members & CSE 18th Batch)    <br/>
            PRIZE GIVING CEREMONY    <br/>
            🗓 09th November    <br/>
            Join us for this unforgettable experience at CSE Olympiad 1.0 BAIUST 2023, where technology meets creativity and passion!
            Feel free to contact us with any queries -    <br/>
            FB: 
            <a href="https://www.facebook.com/baiustcomputerclub ">
            https://www.facebook.com/baiustcomputerclub 
            </a>
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

export default EventDetails2;
