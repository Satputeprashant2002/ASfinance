import React from 'react';

import './Aboutus.css';
import ent from '../images/enterpreneur_en.jpeg'
import as from '../images/dream house.jpg'
import b from '../images/building.png'
import w from '../images/wall-clock.png'
import l from '../images/leader.png'
import v from '../images/visibility.png'
import m from '../images/master.png'
import le from '../images/leadership.png'
import n from '../images/networking.png'
import clock from '../images/clock.png'
import bank from '../images/bank.png'
import team from '../images/team.png'
import perc from '../images/100-percent.png'
import check from '../images/check.png'
import { Link} from 'react-router-dom';


const Aboutus = () => {
    return (
        <div className="About-Us">
            <div className="Image-gif">
                <h1 className="title">About Us</h1> 
            </div>
            <div className="Vision-Mission">
                <div className="Heading"><h1>VISION MISSION</h1></div>
                <div className="VM">
                    <div className="card1">
                     <h2>Vision</h2>
                             <p>To become the preferred choice of financial services partner for India’s aspiring classes, meeting the full range of their credit requirements, and helping India become a financially inclusive society where every citizen has ready access to formal channels of finance.</p>
                   </div>
                   <div className="card1">
                     <h2>Mission</h2>
                       <p>AS Financial is dedicated to the mission of bringing convenience to people’s lives and making their lives easier. We offer secured and unsecured credit to meet their varied financial needs from instant loans to microfinance, affordable home loans, vehicle finance and more.</p>
                    </div>
            </div>
            </div>
            
            <div className="Enterprneur">
           <div className="Heading"> <h1 >Our Enterpreneur</h1></div>
            <div className="toge">
                
                <div className="ima">
                    <img src={ent} alt="Our Enterpreneur"></img>
                </div>
                
                <div className="tex">
                <h3>Trusted Business Partner</h3>
                   <p> Mr. Abaso Dada Dhulgude with a degree in BA, started Established  2016. All this time he collected only those values that helped us(company) become the best in our business. We have collaborated with hundreds of companies around the world and have been able to achieve the trust of each of them.   Under his leadership, we are confident in our ability to deliver exceptional financial services and build lasting relationships with 5000+ valued clients.</p>
                </div>
                </div>
            </div>
            
                <div className="Heading">
               <h1>As Financial Services, are now just a step away!</h1> 
                </div>
                <div className="toge">
               
                <div className="asn">
                    <img src={as} alt="asfinance img"></img>
                </div>
                <div className="tex">
                As Financial Services its proprietary cutting-edge technology, intuitive algorithms and sophisticated risk-decisioning workflows to partner with leading banks, other lenders and financial institutions towards making financial products available on every street & corner. With As Financial Services every credit worthy Indian now has easy access financial services. Our direct integration with leading banks and our nationwide network of fulfillment partners ensure that your requirement for loans and other financial services can be fulfilled conveniently as never before. Discover the convenience of As Financial Services!
                </div>
                
            </div>
            <div className="Fixed">
             <div className=""><h1>Why AS Financial</h1></div>   
                <div className="three">
                <div className="first">
                  <div className="White-Card">
                   <div className="icon-img"> <img src={b} alt="star"></img></div>
                    <h4>Doorstep service</h4>
                  </div>
                  <div className="White-Card">
                   <div className="icon-img"> <img src={w} alt="star"></img></div>
                    <h4>Sanctions for Loan in record time</h4>
                  </div>
                  <div className="White-Card">
                   <div className="icon-img"> <img src={l} alt="star"></img></div>
                    <h4>Skilled and Trained team</h4>
                  </div>
                  </div>
                  <div className="first">
                  <div className="White-Card">
                   <div className="icon-img"> <img src={v} alt="star"></img></div>
                    <h4>Transparent process</h4>
                  </div>
                  <div className="White-Card">
                   <div className="icon-img"> <img src={m} alt="star"></img></div>
                    <h4>No hidden costs and administrative charges</h4>
                  </div>
                  <div className="White-Card">
                   <div className="icon-img"> <img src={le} alt="star"></img></div>
                    <h4>Home Loan Experts to guide you through the entire process</h4>
                  </div>
                  </div>
                  <div className="last">
                    <br></br>
                   <div className="ico"> <img src={n} alt="star"></img></div>
                    <h4>Very large network of tieups with banks and NBFCs.</h4>
                  </div>
                
                </div>
            </div>
            <div className="ref-par">
            <div className="Heading"> <h1>Advantages of joining as Referral Partner</h1></div>
            <div className="adv">
              <div className="adv-cart">
                <div className="adv-img"><img src={clock} alt="adv img"></img>
                <p>Better & Timely Payout..</p>
                </div>
              </div>
              <div className="adv-cart">
                <div className="adv-img"><img src={bank} alt="adv img"></img>
                <p>Solution From Various Private Sector Banks & NBFC' s.</p>
                </div>
                </div>
                <div className="adv-cart">
                <div className="adv-img"><img src={team} alt="adv img"></img>
                <p>Offering Of Multiple Products</p>
                </div>
                </div>
                <div className="adv-cart">
                <div className="adv-img"><img src={perc} alt="adv img"></img>
                <p>100% Transparency Is Maintained Throughout The Transaction.</p>
                </div>
                </div>
                <div className="adv-cart">
                <div className="adv-img"><img src={check} alt="adv img"></img>
                <p>For Sole Selling Agents We Can Get Builder Project Approved From Multiple Banks & Nbfc's.</p>
                </div>
            </div>
            </div>
            </div>
            <div className="grow">
              <div className="Heading"><h1>Let's grow together!</h1></div>
              <div className="cont"><Link className="contU" to="/contact">Contact us</Link></div>
              
              <div></div>
            </div>
            </div>
       
    );
};

export default Aboutus;
