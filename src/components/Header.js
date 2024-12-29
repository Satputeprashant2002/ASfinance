import React, { useState, useEffect, useRef } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Header.css';
import log1 from '../images/logo.png';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrollingDown, setIsScrollingDown] = useState(false);
    const navigate = useNavigate();
    
    // Use useRef to persist lastScrollY value across renders
    const lastScrollY = useRef(0); 

    // Toggle menu state
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const HndSelectChg = (e) => {
        const val = e.target.value;
        if (val) {
            navigate(val);
        }
    };

    // Scroll event listener to detect scrolling
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY.current) {
                setIsScrollingDown(true); // Scrolling down
            } else {
                setIsScrollingDown(false); // Scrolling up
            }
            lastScrollY.current = window.scrollY <= 0 ? 0 : window.scrollY; // Keep track of the scroll position
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array ensures this effect runs only once on mount

    return (
        <div className="header">
            <div className="contact-info">
                <div className="header-item">
                    <i className="fas fa-envelope"></i>
                    <a href="mailto:asfinancialservices52@gmail.com" style={{ color: 'white', textDecoration: 'none' }}>
                        asfinancialservices52@gmail.com
                    </a>
                </div>
                <div className="header-item">
                    <i className="fas fa-phone"></i>
                    <a href="tel:+9197678438180" style={{ color: 'white', textDecoration: 'none' }}>
                        +91 9767843818
                    </a>
                </div>
                <div className="header-item">
                    <i className="fas fa-clock"></i>
                    <span>| Mon to Sat, 10am to 6pm</span>
                </div>
            </div>

            <div className="nav-container">
                <div className="logo">
                    <img src={log1} alt="Company Logo" />
                </div>
                <button className="burger" onClick={toggleMenu}>
                    <i className="fas fa-bars icon-large"></i>
                </button>
                <nav className={`navigation ${isOpen ? 'open' : ''} ${isScrollingDown ? 'hide' : ''}`}>
                    <ul>
                        <li><i className="fas fa-home"></i><Link to="/">Home</Link></li>
                        <li><i className="fas fa-info-circle"></i><Link to="/about">About Us</Link></li>
                        <li><i className="fas fa-bars"></i>
                            <select onChange={HndSelectChg}>
                                <option id="op" value="" disabled selected>Loan Service</option>
                                <option value="/ploan">Personal Loan</option>
                                <option value="/hloan">Home Loan</option>
                                <option value="/bloan">Business Loan</option>
                                <option value="/insu">Insurance</option>
                                <option value="/cloan">Car Loan</option>
                            </select>
                        </li>
                        <li><i className="fas fa-calculator"></i><Link to="/cal">EMI Calculator</Link></li>
                        <li><i className="fas fa-phone"></i><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;
