import React, { useState } from 'react';
import './DonationSummaryModal.css';

const DonationSummaryModal = ({ donations, onClose }) => {
  const [quantity, setQuantity] = useState(1); // Initialize quantity state

  const calculateTotal = () => {
    return donations.reduce((total, donation) => total + donation.amount, 0);
  };

  const handlePayNow = (donation) => {
    // Replace 'YOUR_BKASH_APP_LINK' with the actual bKash app link
    const bKashAppLink = 'https://www.bkash.com/products-services/add-money';
    
    // Open the bKash app link in a new tab or window
    window.open(bKashAppLink, '_blank');
  };

  return (
    <div className="donation-summary-modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h3>Donation Summary</h3>
        <div className="donation-table">
          <div className="table-header">
            <div className="product">Product</div>
            <div className="quantity">Quantity</div>
            <div className="total">Total</div>
            <div className="action">Action</div> {/* New column for action buttons */}
          </div>
          {donations.map((donation, index) => (
            <div className="table-row" key={index}>
              <div className="product">BAIUST Welfare Fund</div>
              <div className="quantity">{index + 1}</div>
              <div className="total">{donation.amount}</div>
              <div className="action">
                <button onClick={() => handlePayNow(donation)}>Pay Now</button>
              </div>
            </div>
          ))}
          <div className="table-row">
            <div className="product"></div>
            <div className="quantity"></div>
            <div className="total">Total Amount: {calculateTotal()}</div>
            <div className="action"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationSummaryModal;
