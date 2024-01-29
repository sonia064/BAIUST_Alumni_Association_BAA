import React from 'react';
import './EventDetails1.css';
import { Link } from 'react-router-dom';

const EventDetails1 = () => {
  return (
    <div className="evennt-details">
      <div className="imagge-container">
        <img src="/event2.jpg" alt="Event 2" />
      </div>
      <p>
        <b>DevFest AI Hackathon 2023!!!</b>  
       <br/>
      
Calling all innovators, problem solvers, and AI enthusiasts! Join us for an exhilarating AI Hackathon, where teams of four will collaborate to harness the power of artificial intelligence (AI) to address pressing real-world challenges.
🔥 Embark on a Journey of Innovation 🔥  <br/>
* <b> Delve into the cutting edge of AI technology:</b> Explore the latest AI advancements, including natural language processing, machine learning, and PaLM 2.  <br/>
* <b>Tackle real-world problems:</b> Identify and tackle pressing issues in various domains, such as healthcare, education, environmental sustainability, and social impact. <br/>
* <b>Collaborate with like-minded individuals:</b> Join forces with fellow AI enthusiasts, forming diverse teams that bring together a range of skills and perspectives.  <br/>
* <b>Develop innovative AI solutions:</b> Design and develop creative AI-powered solutions that have the potential to make a positive impact on the world.  <br/>
<br/>
Who Should Attend:🔥  <br/>
* AI enthusiasts and aspiring AI developers  <br/>
* Software engineers and programmers with an interest in AI  <br/>
* Data scientists and analysts  <br/>
* Creative thinkers and problem solvers  <br/>
* Anyone with a passion for technology and innovation  <br/>
<br/>
Join the Movement: Shaping a Better Future with AI   <br/>
This AI Hackathon is not just about developing groundbreaking technologies; it's about harnessing the power of AI to create a brighter future for all. Together, we can explore the limitless potential of AI to solve real-world challenges and make a meaningful difference in society.
 <br/>
 Register today and join us for an unforgettable journey of innovation, collaboration, and impact!  <br/>
 📍 Location: Bangladesh Army International University of Science and Technology (BAIUST)  <br/>

  <b>Registration Form Link : </b> <br/>
  <a href="https://docs.google.com/.../1FAIpQLSc5GNQ8ZfLHxh.../viewform">
  https://docs.google.com/.../1FAIpQLSc5GNQ8ZfLHxh.../viewform
  </a>

     </p>
      <Link to="/events">Back</Link>
      {/* Footer */}
      <footer className="footr">
        <p>© 2023 Our Event Details Card</p>
      </footer>
    </div>
  );
};

export default EventDetails1;
