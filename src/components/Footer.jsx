import React, { useState } from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import insta from '../images/instagram.png';
import face from '../images/facebook.png';
import gif from '../images/heart.gif';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [isLoanServicesOpen, setIsLoanServicesOpen] = useState(false);

  // Toggle the visibility of the loan services card
  const toggleLoanServicesCard = () => {
    setIsLoanServicesOpen(!isLoanServicesOpen);
  };

  // List of services with their corresponding routes
  const loanServices = [
    { name: 'Personal Loan', path: '/ploan' },
    { name: 'Home Loan', path: '/hloan' },
    { name: 'Business Loan', path: '/bloan' },
    { name: 'Insurance', path: '/insu' },
    { name: 'Car Loan', path: '/cloan' }
  ];

  return (
    <div className="footer">
      <div className="Together">
        <div className="contact">
          <div className="address">
            <div className="sub-cont">
              <div className="darr">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="Addcol1">
                <p>
                  Address
                  <br />
                  Office no.1, Sr no: 67, Hissa no. 2
                  Raj Tower, Katraj Pune 411046
                </p>
              </div>
            </div>
          </div>
          <div className="phone">
            <div className="sub-cont">
              <i className="fa-solid fa-phone fa-lg"></i>
              <div className="Addcol">
                <p>
                  Phone
                  <br />
                  +91 9767843818
                </p>
              </div>
            </div>
          </div>
          <div className="email">
            <div className="sub-cont">
              <i className="fa-solid fa-envelope fa-lg"></i>
              <div className="Addcol">
                <p>
                  Email
                  <br />
                  asfinancialservices52@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="social">
            <a href="https://www.facebook.com/As-Financial-Services-103303851459990/">
              <img className="my-image" alt="icon" src={face} />
            </a>
            <a href="https://www.instagram.com/aabasodhulgude/">
              <img className="my-image" alt="icon" src={insta} />
            </a>
          </div>
        </div>

        <div className="texy">
          <div className="Quick-Links">
            <h2>Our Links</h2>
            <ul>
              <div className="tog">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About us</Link>
                </li>
              </div>
              <div className="tog">
                <li>
                  <button onClick={toggleLoanServicesCard}>Loan Services</button>
                </li>
                <li>
                  <Link to="/cal">Emi calculator</Link>
                </li>
              </div>
              <div>
                <li>
                  <Link to="/ob">Our blogs</Link>
                </li>
                <li>
                  <Link to="/contact">Contact us</Link>
                </li>
              </div>
            </ul>
          </div>
          <div className="Services">
            <h2>Services</h2>
            <div className="tog-lis">
              <div className="first-serv">
                <ul>
                  <li>Home loan</li>
                  <li>Business Loan</li>
                  <li>Personal Loan</li>
                  <li>Property Loan</li>
                  <li>Car Loan</li>
                  <li>Mortgage Loan</li>
                </ul>
              </div>
              <div className="first-serv">
                <ul>
                  <li>Life Insurance</li>
                  <li>Health Insurance</li>
                  <li>Education Loan</li>
                  <li>Motor Insurance</li>
                  <li>Agri Loan</li>
                  <li>Unsecured Business Loan</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The sliding card that shows the loan services */}
      <div className={`loan-services-card ${isLoanServicesOpen ? 'open' : ''}`}>
        <div className="loan-services-card-content">
          <button className="close-btn" onClick={toggleLoanServicesCard}>×</button>
          <h2>Loan Services</h2>
          <ul>
            {loanServices.map((service, index) => (
              <li key={index}>
                <Link to={service.path}>{service.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="Copyright">
        <p>
          Copyright © 2024 As Financial Services | Made with
          <img src={gif} alt="heart" className="image-size" />
          by CORTICA WEB SOLUTIONS PVT LTD
        </p>
      </div>
    </div>
  );
};

export default Footer;
