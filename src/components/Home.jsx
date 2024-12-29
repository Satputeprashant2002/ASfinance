import React from 'react';
import Img from '../images/finance.gif';
import Imag from '../images/shake.png';
import mag from '../images/Partridge.jpg';
import image1 from '../as-bank/image1.png';
import image2 from '../as-bank/image2.png';
import image3 from '../as-bank/image3.png';
import image4 from '../as-bank/image4.png';
import image5 from '../as-bank/image5.png';
import image6 from '../as-bank/image6.png';
import image7 from '../as-bank/image7.png';
import image8 from '../as-bank/image8.png';
import image9 from '../as-bank/image9.png';
import image10 from '../as-bank/image10.png';
import image11 from '../as-bank/image11.png';
import image12 from '../as-bank/image12.png';
import image13 from '../as-bank/image13.png';
import image14 from '../as-bank/image14.png';
import image15 from '../as-bank/image15.png';
import image16 from '../as-bank/image16.png';
import image17 from '../as-bank/image17.png';
import image18 from '../as-bank/image18.png';
import image19 from '../as-bank/image19.png';
import image20 from '../as-bank/image20.png';
import a1 from '../as-bank/1.png';
import a2 from '../as-bank/2.png';
import a3 from '../as-bank/3.webp';
import a4 from '../as-bank/4.jpg';
import a5 from '../as-bank/5.png';
import a6 from '../as-bank/6.png';
import a7 from '../as-bank/7.png';
import a8 from '../as-bank/8.png';
import a9 from '../as-bank/9.png';
import a10 from '../as-bank/10.png';
import a11 from '../as-bank/11.png';
import a12 from '../as-bank/12.png';
import a13 from '../as-bank/13.png';
import a14 from '../as-bank/14.png';
import a15 from '../as-bank/15.png';
import a16 from '../as-bank/16.png';
import a17 from '../as-bank/17.jpg';

import { Link } from 'react-router-dom';

import './Home.css';

const cardData = [
    { iconClass: 'fas fa-users', description: 'Over 75000 satisfied customer' },
    { iconClass: 'fas fa-university', description: 'Offers From 25+ Partner Banks' },
    { iconClass: 'fas fa-star', description: 'Rated 4.5/5 By Customers' },
    { iconClass: 'fas fa-laptop', description: 'Online Application, Quick Processing' },
    { iconClass: 'fas fa-shield-alt', description: 'Transparent Terms & Conditions' },
    { iconClass: 'fas fa-money-bill', description: 'Dedicated Advisor + Doorstep Service' },
    { iconClass: 'fas fa-chart-line', description: 'Investment Plans' },
];

const serviceCardData = [
    { iconClass: 'fas fa-home', description: 'Home Loan', link: '/loan-calculator' },
    { iconClass: 'fas fa-briefcase', description: 'Business Loan', link: '/financial-planning' },
    { iconClass: 'fas fa-hand-holding-usd', description: 'Personal Loan', link: '/tax-assistance' },
    { iconClass: 'fas fa-building', description: 'Property Loan', link: '/business-consulting' },
    { iconClass: 'fas fas fa-car', description: 'Car Loan', link: '/wealth-management' },
    { iconClass: 'fas fas fa-dollar-sign', description: 'Mortgage Loan', link: '/personal-loans' },
    { iconClass: 'fas fa-shield-alt', description: 'Life Insurance', link: '/debt-management' },
    { iconClass: 'fa fa-heartbeat', description: 'Health Insurance', link: '/investment-strategies' },
    { iconClass: 'fas fa-graduation-cap', description: 'Education Loan', link: '/retirement-planning' },
    { iconClass: 'fa fa-cogs', description: 'Motor Insurance', link: '/stock-advisory' },
    { iconClass: 'fas fa-tractor', description: 'Agriculture Loan', link: '/insurance-solutions' },
    { iconClass: 'fas fa-lock', description: 'Unsecured Business Loan', link: '/savings-plans' },
];

const Home = () => {
    
    return (
        <div className="home-container">
            <div className="image-slider-container">
                <img src={Img} alt="Description of the financial concept illustrated" />
                <div className="slider-container">
                    <div className="slider">
                        <div className="slide"><h3>AsFinance Services</h3><h4>Learn how to manage your finance effectively</h4><Link to="/about"  className="learn-more">Learn more</Link></div>
                        <div className="slide"><h2>Achieve your dream Car with us</h2><h4>
                        Make your dream car a reality with our personalized financing and expert guidance!</h4><Link to="/cloan"  className="learn-more">Learn more</Link></div>
                        <div className="slide"><h2>Get your personal loan at best plan</h2><h4>Learn how to get a personal loan with us</h4><Link to="/ploan"  className="learn-more">Learn more</Link></div>
                        <div className="slide"><h2>Are you eligible for a loan?</h2><h4>Learn how to manage your finance effectively</h4><Link to="/cal"  className="learn-more">Calculate EMI</Link></div>
                    </div>
                </div>
            </div>
            {/* Card Section */}
            <div className="card-section">
                {cardData.map((card, index) => (
                    <div key={index} className="card">
                        <div className="icon-container">
                            <i className={card.iconClass}></i>
                        </div>
                        <p>{card.description}</p>
                        
                    </div>
                ))}
            </div>

            {/* Our Services Section */}
            <div className="services-section">
                <h2>Our Services</h2>
                <p style={{ textAlign: 'center' }}>Explore our range of financial services designed to help you succeed.</p>
                <div className="service-card-section">
                    {serviceCardData.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="icon-container">
                                <i className={service.iconClass}></i>
                            </div>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Become Business Partner Section */}
            <div className="partner-section">
                <img src={Imag} alt="Business Partnership" className="partner-image" />
                <div className="partner-text">
                    Become a Business Partner
                    <h6>Earning money was never this easy! Become a Business Partner with ASFinancial Services, today!</h6>
                    <Link to="/contact" className="learn">Know More</Link>
                </div>
            </div>
            <div className="Why-us">
                 <div className="text-whol">
             
                    <h2>Why Us</h2>
                   <p>AS FINANCIAL SERVICES offers multiple loan options to clients as per their requirements and seeks to meet future loan market demands with competitive interest rates. AS Financial Services offers the best rate loan services to its clients. Today, many loan-providing banks offer competitive loan rates. AS Financial Services provides safe and secure loan services, including all the offline and online banking and documentation for loans.</p> 
                    <br /><br /><br />
                       <Link to="/about" className="learn" >Know more</Link>
                  
                </div>
                <div className="why-image">
                       <img src={mag} alt="Business Partnership" className="part-image" />
                </div>
            </div>
            <div className="work">
               <h1 style={{color:'#00008b', justifyContent:'center'}}>HOW WE WORK</h1>
               <div className="icon-section">
                  <div className="icon-container1">
                     <div className="icon1">
                <i className="fas fa-file-alt fa-lg"></i> {/* Document Icon */}
            </div>
            <p>Document</p><br></br>
            Fill The Online Application Form First
            
        </div>
        <div className="icon-container1">
            <div className="icon1">
                <i className="fas fa-upload fa-lg"></i> {/* Upload Icon */}
            </div>
            <p>Upload</p><br></br>
            Upload documents on site
        </div>
        <div className="icon-container1">
            <div className="icon1">
                <i className="fas fa-check-circle fa-lg"></i> {/* Approval Icon */}
            </div>
            <p>Approval</p><br></br>
            Get Instant Message to your mobile
        </div>
        <div className="icon-container1">
            <div className="icon1">
                <i className="fas fa-indian-rupee-sign fa-lg"></i> {/* Rupee Icon */}
            </div>
            <p>Rupee</p><br></br>
            Amount Will Disbursed within 72 hours.
        </div>
    </div>
</div>

<div className="choice-partners">
    <p className="heading">TRUSTED PARTNERS</p>
    <div className="image-container">
        <img src={image1} alt="Our-Banks" className="Bank-image" />
        <img src={image2} alt="Our-Banks" className="Bank-image" />
        <img src={image3} alt="Our-Banks" className="Bank-image" />
        <img src={image4} alt="Our-Banks" className="Bank-image" />
        <img src={image5} alt="Our-Banks" className="Bank-image" />
        <img src={image6} alt="Our-Banks" className="Bank-image" />
        <img src={image7} alt="Our-Banks" className="Bank-image" />
        <img src={image8} alt="Our-Banks" className="Bank-image" />
        <img src={image9} alt="Our-Banks" className="Bank-image" />
        <img src={image10} alt="Our-Banks" className="Bank-image" />
        <img src={image11} alt="Our-Banks" className="Bank-image" />
        <img src={image12} alt="Our-Banks" className="Bank-image" />
        <img src={image13} alt="Our-Banks" className="Bank-image" />
        <img src={image14} alt="Our-Banks" className="Bank-image" />
        <img src={image15} alt="Our-Banks" className="Bank-image" />
        <img src={image16} alt="Our-Banks" className="Bank-image" />
        <img src={image17} alt="Our-Banks" className="Bank-image" />
        <img src={image18} alt="Our-Banks" className="Bank-image" />
        <img src={image19} alt="Our-Banks" className="Bank-image" />
        <img src={image20} alt="Our-Banks" className="Bank-image" />
    </div>
    <p className="heading">OUR NBFC</p>
    <div className="image-container">
        <img src={a1} alt="Our-Banks" className="Bank-image" />
        <img src={a2} alt="Our-Banks" className="Bank-image" />
        <img src={a3} alt="Our-Banks" className="Bank-image" />
        <img src={a4} alt="Our-Banks" className="Bank-image" />
        <img src={a5} alt="Our-Banks" className="Bank-image" />
        <img src={a6} alt="Our-Banks" className="Bank-image" />
        <img src={a7} alt="Our-Banks" className="Bank-image" />
        <img src={a8} alt="Our-Banks" className="Bank-image" />
        <img src={a9} alt="Our-Banks" className="Bank-image" />
        <img src={a10} alt="Our-Banks" className="Bank-image" />
        <img src={a11} alt="Our-Banks" className="Bank-image" />
        <img src={a12} alt="Our-Banks" className="Bank-image" />
        <img src={a13} alt="Our-Banks" className="Bank-image" />
        <img src={a14} alt="Our-Banks" className="Bank-image" />
        <img src={a15} alt="Our-Banks" className="Bank-image" />
        <img src={a16} alt="Our-Banks" className="Bank-image" />
        <img src={a17} alt="Our-Banks" className="Bank-image"/>
        </div>
        </div>
      </div>
    );
};

export default Home;
