import React, { useState } from 'react';
import './GemeralMemberForm.css'; 

const GeneralMemberForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentDone, setPaymentDone] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleEmailChange = (e) => {
    const enteredEmail = e.target.value;
  
    // Check if the entered email ends with '@gmail.com'
    if (enteredEmail.toLowerCase().endsWith('@gmail.com')) {
      setEmail(enteredEmail);
    } else {
      // Notify the user about the invalid email format
      alert('Please provide a valid @gmail.com email address.');
    }
  };
  

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handlePayment = () => {
    const bkashNumber = '0188464664';
    const paymentAmount = '200'; 

    const bkashURL = `bKash://payment/?phone=${bkashNumber}&amount=${paymentAmount}`;
    
    // Redirect to Bkash app if available
    window.location.href = bkashURL;

    // For demonstration purposes, setting paymentDone to true
    setPaymentDone(true);
  };

  return (
    <div className="membership-form">
      {!paymentDone ? (
        <form>
          <h2>General Membership Form</h2>
          <label>
            Name:
            <input type="text" value={name} onChange={handleNameChange} />
          </label>
          <label>
            Address:
            <input type="text" onChange={handleAddressChange} />
          </label>
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
          <label>
            Phone Number:
            <input type="text" value={phone} onChange={handlePhoneChange} />
          </label>
          <button type="button" onClick={handlePayment}>   
          <a href="https://www.bkash.com/en/products-services?service=send-money" className="alumni">
          Pay 200 TK via Bkash</a>
           
          </button>
          <br />
          <button type="button" onClick={handlePayment}>   
          <a href="https://nagad.com.bd/services/service/?service=send-money" className="alumni">
          Pay 200 TK via Nagad</a>
           
          </button>
           <br />
          <button type="button" onClick={handlePayment}>   
          <a href="https://www.dutchbanglabank.com/rocket/rocket.html" className="alumni">
          Pay 200 TK via Rocket</a>
           
          </button>

        </form>
      ) : (
        <div className="payment-success">
          <h2>Please wait....</h2>
          
        </div>
      )}
    </div>
  );
};

export default GeneralMemberForm;
