import React, { useState } from 'react';
import './RegistrationForm.css'; 
const defaultImage = '/demo.jpg';




const RegistrationForm = () => {
  const [selectedImage, setSelectedImage] = useState(defaultImage);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    currentCity: '',
    termsAccepted: false,
    department: '',
    yearOfGraduation: '',
    studentId: '',
    homeCountry: '',
    program: '',
    bloodGroup: '',
  });

  const [passwordMatchError, setPasswordMatchError] = useState('');

  const [currentStep, setCurrentStep] = useState(1);
  const [verificationSent, setVerificationSent] = useState(false); 




  const handleEmailVerification = () => {
   
    setTimeout(() => {
      setVerificationSent(true);
    }, 2000); // Simulating a delay of 2 seconds for sending email
  };











  const validatePassword = (password) => {
    // Password must have at least 8 characters
    const lengthRegex = /.{8,}/;
    // Password must contain at least one digit
    const digitRegex = /\d/;
    // Password must contain at least one lowercase letter
    const lowercaseRegex = /[a-z]/;
    // Password must contain at least one uppercase letter
    const uppercaseRegex = /[A-Z]/;
    // Password must contain at least one special character
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
  
    const isValid =
      lengthRegex.test(password) &&
      digitRegex.test(password) &&
      lowercaseRegex.test(password) &&
      uppercaseRegex.test(password) &&
      specialCharRegex.test(password);
  
    return isValid;
  };




 const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Check password match and update error message
    if (name === 'confirmPassword' && formData.password !== value) {
      setPasswordMatchError('Password does not match');
    } else {
      setPasswordMatchError('');
    }


     // Validate password and provide feedback
  if (name === 'password' && !validatePassword(value)) {
    setPasswordMatchError(
      'Password must have 8 characters including digits, lowercase and uppercase letters, and special characters.'
    );
  }

  
  };



  

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
  };


const handleNextClick = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      console.log('Form Data:', formData);
      // Logic for submission or further actions
    
    
      fetch('http://localhost:5173/send-verification-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: formData.email }),
      })
        .then((response) => response.text())
        .then((data) => {
          console.log(data);
          setVerificationSent(true);
        })
        .catch((error) => {
          console.error('Error:', error);
          // Handle error scenarios here
        });
    }
  };


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container">
      <header>
        <div className="logoo">
          <img src="/BAIUST_logo.png" alt="Logo" />
        </div>
      </header>
      <main>
        <div className="signup-box">
          <h2>Sign Up</h2>
          <div className="input-wrapper">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          {selectedImage && (
            <div className="preview-box">
            <div className="rounded-image">
              <img src={selectedImage} alt="Selected" />
            </div>
          </div>
        )}
     

     <form>
     {currentStep === 1 && (
                <>
  <br /> <br />
  <div className="form-group">
    <input
      type="text"
      placeholder="First Name"
      name="firstName"
      value={formData.firstName}
      onChange={handleInputChange}
      className="right-half"
      required
    />
    <input
      type="text"
      placeholder="Last Name"
      name="lastName"
      value={formData.lastName}
      onChange={handleInputChange}
      className="left-half"
      required
    />
  </div>
  <div className="form-group">
    <input
      type="tel"
      placeholder="Mobile Number"
      name="mobileNumber"
      value={formData.mobileNumber}
      onChange={handleInputChange}
      className="right-half"
      required
    />
    <input
      type="email"
      placeholder="Email Address"
      name="email"
      value={formData.email}
      onChange={handleInputChange}
      className="left-half"
      required
    />
  </div>
  <div className="form-group">
    <input
      type="password"
      placeholder="Password"
      name="password"
      value={formData.password}
      onChange={handleInputChange}
      className="full-width"
      required
    />
  </div>
  <div className="form-group">
    <input
      type="password"
      placeholder="Confirm Password"
      name="confirmPassword"
      value={formData.confirmPassword}
      onChange={handleInputChange}
      className="full-width"
      required
    />
    {passwordMatchError && (
          <p className="error-message">{passwordMatchError}</p>
        )}
  </div>
  <div className="form-group">
    <input
      type="text"
      placeholder="Current City"
      name="currentCity"
      value={formData.currentCity}
      onChange={handleInputChange}
      className="full-width"
      required
    />
  </div>
  <div className="form-group">
    <label>
      <input
        type="checkbox"
        name="termsAccepted"
        checked={formData.termsAccepted}
        onChange={handleCheckboxChange}
        required
      />
      I accept the terms and conditions
  
    </label >
  </div>
  <button type="button" onClick={handleNextClick}  required>
    Proceed to Next Step
     required
  </button>
  </>
              )}

              {currentStep === 2 && (
                <>
                <h2>More Information</h2>
                <div className="form-grp">
                    <input
                      type="text"
                      placeholder="Student ID"
                      name="studentId"
                      value={formData.studentId}
                      onChange={handleInputChange}
                      className="full-widths"
                      required
                    />
                  </div>
                <div className="form-grp">
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      className="full-width"
                      required
                    >
                      <option value="">Select Department</option>
                      <option value="CSE">Computer Science and Engineering (CSE)</option>
                      <option value="EEE">Electrical and Electronics Engineering (EEE)</option>
                      <option value="CE">Civil Engineering (CE)</option>
                      <option value="BPharm">Pharmacy (B.Pharm)</option>
                      <option value="CE">B.Sc in Physics</option>
                      <option value="BPharm">B.Sc in Mathematics</option>
                      
                    </select>
                  </div>
                  <div className="form-grp">
                    <input
                      type="text"
                      placeholder="Year of Graduation"
                      name="yearOfGraduation"
                      value={formData.yearOfGraduation}
                      onChange={handleInputChange}
                      className="full-widths"
                      required
                    />
                  </div>
                  <div className="form-grp">
                    <select
                      name="homeCountry"
                      value={formData.homeCountry}
                      onChange={handleInputChange}
                      className="full-width"
                      required
                    >
                      <option value="">Select Home Country</option>
                      <option value="Dhaka">Dhaka</option>
                      <option value="Cumilla">Cumilla</option>
                      <option value="Rajshahi">Rajshahi</option>
                      <option value="Dhaka">Sylhet</option>
                      <option value="Cumilla">Chattagram</option>
                      <option value="Rajshahi">Barishal</option>
                     
                    </select>
                  </div>
                  <div className="form-grp">
                    <select
                      name="program"
                      value={formData.program}
                      onChange={handleInputChange}
                      className="full-width"
                      required
                    >
                      <option value="">Select Program</option>
                      <option value="CSE">Computer Science and Engineering (CSE)</option>
                      <option value="EEE">Electrical and Electronics Engineering (EEE)</option>
                      
                    </select>
                  </div>
                  <div className="form-grp">
                    <select
                      name="bloodGroup"
                      value={formData.bloodGroup}
                      onChange={handleInputChange}
                      className="full-width"
                      required
                    >
                      <option value="">Select Blood Group</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="AB+">B+</option>
                      <option value="AB-">B-</option>
                    
                    </select>
                  </div>
                  <br /> <br />
                  <button type="button" onClick={handleNextClick}>
                      {verificationSent ? 'Email Verified' : 'Submit'}
                    </button>
                      {verificationSent && (
                        <p>We have sent a verification link to your email. 
                          Click to verify your email.
                           We will take it from there.</p>
                      )}
                  <br /> <br />
                    <button className='backToLogin'>
                    <a href="https://65a8133f0a7ec512429d4cfc--brilliant-pasca-f3dc11.netlify.app/" className='backToLogin'>Back to login</a></button>
                    <p>Only BAIUST Alumni Association members and eligible people are 
                    entitled to create an account or sign up here</p>
                </>
              )}
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};


export default RegistrationForm; 
