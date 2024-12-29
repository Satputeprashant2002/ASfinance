import React from "react";
import pimg from '../images/personal-images_enhanced.jpeg';
import './Homeloan.css';
import hoimg from '../images/home-l_enhanced.jpeg'

const Homeloan = () => {
    return (
       <div className="Hloan">
         <div className="Emi-heading">
            <h1 className="Emi-head">Home Loan</h1>
          </div>
          <div className="img-home-tog">
          <div className="himg">
                  <img src={pimg} alt="home loan"></img>
                </div>
                <div className="home-text">
                    <h3>Best Rate Home Loan Services in Pune</h3>
                    <p>AS Financial Services provides Home loans are one of the most trustable & availed loan schemes in Pune, So if you are thinking about Home Loan then contact at AS FINANCIAL SERVICES PVT LTD. Home is a place where you settle down after coming back from your day’s exhausting work, it is that place where you can offer occasion to your family & use gorgeous moments with them. To purchase a home which can be christened your “Own House” is a life-time resolution & has to be taken with lots of planning & requires massive capital</p>
                </div>
                </div>
                <div className="img-home-tog">
                <div className="home-text1">
                    <h3>Best Rate Home Loan Services in Pune</h3>
                    <p>
                    Home loan is the perfect place for the individual seeking a home loan in Pune. We provide excellent services right from the application of the loan to the disbursement of the loan amount. A Home Loan provides financing for the purchase or construction of a residential/commercial property. The customer can also avail a home loan in Pune to buy a plot of land and construct on it. Home Loans are also issued to extend/ repair/ renovation/ based on property and geographical area.The Bank decides the loan eligibility mainly on the basis of the income and the loan repayment capacity of the loan seeker. If the customer fails to pay back the loan amount, the banker can retrieve the money by selling the property. AS Financial Services takes care of all the documentation process and provides quick and hassle free loan services to the customers.</p>
                </div>
                <div className="himg">
                  <img src={hoimg} alt="home loan"></img>
                </div>
                </div>
                <h1 className="st-head">Eligibility criteria for Home Loan Pune</h1>
                <div className="person-info">
                <p>
                • Income– The home loan amount directly depends on the customer income. • Tenure– The longer tenure will increase home loan eligibility and lowers the EMI of the customer • Interest Rate offered – Banks offer Fixed and Floating Rates of Interest.</p>
                </div>
                <h1 className="st-head">FEATURES AND BENEFIT OF HOME LOAN PUNE</h1>
                <div className="person-info">
                <p>
                • Flexible repayment options • Package of exclusive benefits. • No hidden costs or administrative charges. • Guidance throughout the process making home buying hassle free • Low Processing Charges • Simplified Documentation • Insurance options for your home loan at attractive premium</p>
                </div>
       </div>
    );
};

export default Homeloan;