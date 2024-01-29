import React, { useState } from 'react';
import './LifeTimeMember.css';


const LifeTimeMember = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    id: '',
    email: '',
    degree: '',
    gender: '',
    mobileNumber: '',
    whatsappNumber: '',
    dateOfBirth: '',
    socialMediaLinks: '',
    image: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check ID length
  if (formData.id.length < 7 || formData.id.length > 14) {
    alert("ID must have 7 to 14 digits.");
    return; // Do not proceed with submission
  }
    // Simulated form submission - replace with actual form submission logic
    console.log('Form Submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="lifetime-member-form">
         {!submitted ? (
        <>
      <h1 className="form-title">Life Time Membership Application Form For Students</h1>
      <p className="form-guidelines">
        Kindly share the soft copy of no dues form at{' '}
        <a href="mailto:office@baiustalumni.org">office@baiustalumni.org</a>. Permanent address should
        be your complete address where the hard copy of the alumni card will be sent.
      </p>
      <p className="form-guidelines">Photograph requirements:</p>
      <ul className="form-guidelines">
        <li>The face of the candidate should be straight and at the center.</li>
        <li>Photos with caps, dark glasses, or informal attire will be rejected.</li>
        <li>Image file should be in jpg format (Jpeg).</li>
        <li>Image file should be less than 2 MB.</li>
      </ul>

      <form onSubmit={handleSubmit} className="form">
        <h2 className="form-section-title">Personal Information</h2>
        <div className="form-field">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="middleName">Middle Name:</label>
          <input
            type="text"
            id="middleName"
            value={formData.middleName}
            onChange={(e) => setFormData({ ...formData, middleName: e.target.value })}
          />
        </div>
        <div className="form-field">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="id">ID:</label>
          <input
            type="text"
            id="id"
            value={formData.id}
            onChange={(e) => setFormData({ ...formData, id: e.target.value })}
            required
          />
        </div>



        <div className="form-field">
  <label htmlFor="email">Email:</label>
  <input
    type="text"
    id="email"
    value={formData.email}
    onChange={(e) => {
      const enteredEmail = e.target.value.toLowerCase();
      setFormData((prevData) => ({
        ...prevData,
        email: enteredEmail,
      }));
    }}
    required
  />
</div>





        <div className="form-field">
          <label htmlFor="degree">Degree:</label>
          <input
            type="text"
            id="degree"
            value={formData.degree}
            onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            value={formData.gender}
            onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
            required
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input
            type="text"
            id="mobileNumber"
            value={formData.mobileNumber}
            onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="whatsappNumber">WhatsApp Number:</label>
          <input
            type="text"
            id="whatsappNumber"
            value={formData.whatsappNumber}
            onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input
            type="date"
            id="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="socialMediaLinks">Social Media Links:</label>
          <input
            type="text"
            id="socialMediaLinks"
            value={formData.socialMediaLinks}
            onChange={(e) => setFormData({ ...formData, socialMediaLinks: e.target.value })}
          />
        </div>
        <div className="form-field">
          <label htmlFor="image">Upload Image (Jpeg, less than 2MB):</label>
          <input
            type="file"
            id="image"
            accept="image/jpeg"
            onChange={(e) =>
              setFormData({ ...formData, image: e.target.files && e.target.files[0] })
            }
            required
          />
        </div>


        {/* Checkboxes */}
            <div className="form-field">
              <label>
                <input type="checkbox" required />
                I agree that the above data may be used to update the Alumni Association database.
              </label>
            </div>
            <div className="form-field">
              <label>
                <input type="checkbox" required />
                I agree that the above data may be shared with BAIUST.
              </label>
            </div>
            <div className="form-field">
              <label>
                <input type="checkbox" required />
                I agree to pay the Alumni Association, BAIUST an amount of Rs. 2000/- (Rupees two thousand only) towards my Life Membership Fees directly from the Institute caution money.
              </label>  <br /> <br />
            </div>


        <input type="submit" value="Submit" className="submit-btn" />
      </form>

      </>
      ) : (
        <div className="success-message">
          {/* Success message or updated UI after submission */}
          <p>Thank you for submitting the form! We'll get back to you soon.</p>
        </div>
      )}
    </div>
  );
};

export default LifeTimeMember;