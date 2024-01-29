import React from 'react';
import './EventDetails.css';
import { Link } from 'react-router-dom';

const EventDetails = () => {
  return (
    <div className="evennt-details">
      <div className="imagge-container">
        <img src="/event1.jpg" alt="Event 1" />
      </div>
      <p>
      বাইউস্টের ক্যাম্পাসে প্রথমবারের মতন আসছে, “Programming Hero”, সামনের, ১২ই ডিসেম্বর, ২০২৩। থাকবেন “Programming Hero” - এর চিফ অপারেটিং অফিসার, আব্দুর রাকিব। 
      
       <br/>

       “Programming Hero” -এর পক্ষ থেকে আবদুর রাকিব, সিওও প্রোগ্রামিং হিরো, শেয়ার করবেন ওনার দীর্ঘ অভিজ্ঞতার গল্প। সাথে প্রোগ্রামিং হিরো-এর একজন সফটওয়্যার ইঞ্জিনিয়ার এবং মেন্টর বক্তব্য রাখবেন একজন স্টুডেন্ট এর জন্য
- প্রোগ্রামিং স্কিল এবং প্রবলেম সল্ভিং স্কিল ক্যারিয়ারের একটি জেনারেল স্কিল হিসেবে কিভাবে সাহায্য করে,
- সিএসই পড়ে কি সুধুই সফটওয়্যার বানাবো? এক্সপ্লোর করা হবে এই মার্কেটের আরো অসংখ্য এমন ফিল্ডের ব্যাপারে জানবো যেখানে আছে অসাধারন ক্যারিয়ার গ্রোথ পটেনশিয়াল।
- নিজের জন্য কিভাবে এবং কি কি ফ্যাক্ট মাথায় রেখে ক্যারিয়ার এর রোডম্যাপ করা প্রয়োজন সেই ব্যাপারে জানা যাবে।
এই সেশনের পরেই Q&A সেশন এবং কুইজ সেশন। যেখানে ৩ জন বিজয়ীকে নির্বাচিত করা হবে এবং তাদের জন্য থাকবে আকর্ষনীয় পুরস্কার। 
এই পুরো প্রোগ্রামের রেজিস্ট্রেশন কমপ্লিট করা সকলকে নিয়ে প্রোগ্রামিং হিরো এর পক্ষ থেকে একটি “Exclusive Campus WhatsApp Group” করা হবে 
 “21 Days of Coding program”। এবং সেই কোডিং প্রোগ্রাম থেকে টপ ৩ জন অংশগ্রহণকারীর জন্য থাকবে পুরস্কার এবং সার্টিফিকেট।
 “21 Days of Coding program”- বিস্তারিত পোস্ট আসছে।
 <br/>
    রেজিস্ট্রেশন ফিঃ ৩০ টাকা  <br/>
    রায়হান : ০১৮১১৩৮০৮৪৪(বিকাশ/ নগদ)  <br/>
    limited seat.  <br/>
    Registration Form Link :  <br/>
    <a href="https://forms.gle/B16VZX4U2FBbp9P47">
    https://forms.gle/B16VZX4U2FBbp9P47
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

export default EventDetails;
