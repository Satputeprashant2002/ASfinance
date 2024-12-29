import React from "react";
import Calci from './Calci';
import logo from  "../images/logo.png"
import review from  "../images/Rating_stars.png"
import "./Cal.css"
import ReviewSlider from "./ReviewSlider";

const Cal = () => {
    return (
        <div className="Emi">
          <div className="Emi-heading">
            <h1 className="Emi-head">EMI Calculator </h1>
          </div>
            <div className="cal-stat">
              <div className="stat">
                <h2 className="stat-head">Home Loan EMI Calculator Jul 2024</h2>
                <p><span className="spa1"><i className="fa-solid fa-clock-rotate-left"></i></span>
                <span className="spa"> Last Updated 5th July 2024</span>
                </p>
                <div className="Home-loan">
                  <p>
                  <span className="gree-ico"><i className="fa-regular fa-hand-point-right"></i></span>
                   <span className="spa">Loan EMI is calculated at 8.50% for illustration purpose</span>
                    </p>
                    <p>
                  <span className="gree-ico"><i className="fa-regular fa-hand-point-right"></i></span>
                   <span className="spa">Banks offering lowest EMI on home loan are Bank of Baroda, Axis Bank, Kotak Mahindra Bank, HDFC Bank and ICIC Bank.</span>
                    </p>
                    <h3 className="stat-head">Home Loan Calculator</h3>
                    <p className="spa2">Current repo rate stands at 6.5%</p>
                    <table className="table-bordered">
                    <tr><th>Loan Amount</th>
                    <th>20 year loan</th>
                    <th>25 year loan</th>
                    <th>30 year loan</th></tr>

                    <tr><td>₹ 30 Lakh</td>
                    <td>₹  26,035</td>
                    <td>₹ 24,157</td>
                    <td>₹ 23,067</td></tr>

                    <tr><td>₹ 50 Lakh</td><td>₹ 43,391</td><td>₹ 40,261</td><td>₹ 38,446</td></tr>

                    <tr><td>₹ 1 crore</td><td>₹ 86,782</td><td>₹ 80,523</td><td>₹ 76,891</td></tr>
                    </table>
                </div>
              </div>
              <div className="cal-act">
                  <h2 className="stat-head">Loan EMI Calculator</h2>
                     <Calci/> 

                     <div className="revieww">
                      <div className="logo1">
                     <img src={logo} alt="logo of our beloved company"></img>
                     </div>
                     <div className="star">
                     <p className="spa2">Rated 4.5/5 By Customers</p>
                     <img src={review} alt="reviev of company"></img>
                     <br></br>
                     
                     </div>
                     <ReviewSlider/>
                </div>
                
                </div>
                
            </div>
        </div>
    );
};
export default Cal;