import React from 'react';
import blimg from '../images/busi-loan_enhanced.jpeg'
import blimg1 from '../images/busi-loan1_enhanced.jpeg'
import './Businessloan.css'


const Businessloan = () =>{
    return(
        <div className="Bloan">
           <div className="Emi-heading">
            <h1 className="Emi-head">Business Loan</h1>
          </div>
          <h1 className="st-head">Best Rate Business Loan Services in Pune</h1>
          <div className="img-home-tog">
                <div className="home-text">
                    <p>Instant Online Business Loan in Pune Businesses require a sufficient amount of capital to fund start up expansions or expenses. Most of the companies take business loans to gain the financial assistance they need. A business loan is a credit that the company is pledged to repay based on the bank’s loan’s terms and conditions. Before approaching a lender for a Business Loan in Pune, it is essential for the business owners understand the terms and condition of the loan. A business loan is borrowed capital that companies often use to pay for a major investment or expenses. Usually business owners use business loans to pay for inventory, wages, salaries or business projects. Lenders want to know how the business owners use the borrowed money, so you must make sure to have a clear outline of loan amount spent. Low Interest business Loans in Pune allows companies to have a chance at success. </p>
                </div>
                <div className="himg">
                  <img src={blimg} alt="busi loan"></img>
                </div>
                </div>
                <div className="img-home-tog">
                <div className="himg">
                  <img src={blimg1} alt="busi loan"></img>
                </div>
                <div className="home-text">
                    <p>Business loans are in high demand and there are numerous companies who apply for a loan but they won’t receive it. When a business owner applies for the loan, the lenders check the company’s, history, annual turnover, debt amount and the risk factor associated with business. Risky businesses, such as establishing or start -up companies, are often not been approved for the loan.</p>
                </div>
                </div>
                <h1 className="st-head">BUISNESS LOAN BENEFITS</h1>
                <div className="person-info">
                    <div className="sideby">
                    <ul>
                        <li>Highly competitive Personal loan interest rates</li>
                        <li>Special offers on rates.</li>
                        <li>Personal loan eligibility in one call. (approximate)</li>
                        <li>Special offers for women</li>
                        <li>Tenure- max 6 years(select banks)</li>
                        <li>Business Loan Pune Documentations for Proprietorship Company</li>
                        <li>Proprietor Pan card</li>
                        <li>Govt id proof</li>
                        <li>Residential address proof</li>
                        <li>Office address proof</li>
                        <li>Office registration copy</li>
                        <li>Own property proof (tax paid receipts/e bill /water bill / sale deed)</li>
                        <li>3 years ITR</li>
                        <li>6 MONTHS Bank statement</li>
                        <li>Vat100 or service tax return</li>
                        <li>Loan station letter if any</li>
                        <li>Business Loan Documentation for Partnership Company</li>
                       </ul>
                       <ul>
                        <li>Firm pan</li>
                        <li>Partnership deed</li>
                        <li>All partner kyc</li>
                        <li>Own property proof</li>
                        <li>3 years ITR</li>
                        <li>INDIVIDUAL Bank statement</li>
                        <li>Vat100 or service tax return</li>
                        <li>Loan station letter if any</li>
                        <li>Business Loan Document for private LTD Company</li>
                        <li>Company Pan</li>
                        <li>MOA & AOA With incorporation letter</li>
                        <li>Office address proof</li>
                        <li>All directors kyc</li>
                        <li>Owned property</li>
                        <li>Individual 3 years ITR</li>
                        <li>INDIVIDUAL 6 Months Bank statements</li>
                       </ul>
                       </div>
                </div>
        </div>
    );
};

export default Businessloan;