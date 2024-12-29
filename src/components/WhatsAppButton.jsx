import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import logo from '../images/finance-removebg-preview.jpg';  // Import your logo
import './WhatsappButton.css';  // Import the styles

const WhatsappButton = () => {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000,
        width: '60px',
        height: '70px',
      }}
    >
      <FloatingWhatsApp
        phoneNumber="+91 9767843818"
        accountName="Asfinance Service"
        chatMessage="Hello, AS FINANCIAL SERVICES is a best and golden opportunity for all your financial needs and services. Let's us know a good time to connect with you over a call?"
        avatar={logo}
        allowClickAway
        notification
        notificationSound
        buttonStyle={{
          backgroundColor: '#25d366',  // WhatsApp green color
          borderRadius: '50%',  // Circular button
          width: '60px',  // Button size
          height: '60px',  // Button size
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',  // Add some shadow for better visibility
        }}
        style={{
          maxWidth: '400px', // Limit the width of the chatbox
        }}
      />
    </div>
  );
};

export default WhatsappButton;
