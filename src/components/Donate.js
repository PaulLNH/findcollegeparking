// src/components/Donate.js
import React from 'react';
import './Donate.css';
import Navbar from "./shared/Navbar";

const Donate = () => {
  return (
    <fragment>
      <Navbar />
    <div className="donate-container">
        <h1>Support Our Cause</h1>
        <div className="content-container">
          <p>Your donation keeps the site running, helping students find parking and supporting our community. Join us in making a difference!</p>
          <div className="payment-methods">
            <h2>Donate via PayPal</h2>
            <form action="https://www.paypal.com/donate" method="post" target="_blank">
              <input type="hidden" name="hosted_button_id" value="QMQXTXBBMFUWA" />
              <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
              <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
            </form>
            <h2>Donate via Venmo</h2>
            <img src="/img/venmo.png" alt="Venmo QR Code" className="venmo-qr" />
          </div>
        </div>
      </div>
    </fragment>
  );
};

export default Donate;