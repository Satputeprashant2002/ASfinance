import React from "react";
import pimg from '../images/personal-images_enhanced.jpeg';
import './Personloan.css'

const Personloan = () => {
    return (
        <div className="Ploan">
         <div className="Emi-heading">
            <h1 className="Emi-head">Personal Loan</h1>
          </div>
          <div className="Personal-loan">
              <h1 className="st-head">Best Rate Personal Loans in Pune</h1>
              <div className="Personal-loan-tog">
                <div className="pimg">
                  <img src={pimg} alt="home loan"></img>
                  <div className="img-overlay-text">Personal Loan</div>
                </div>
                <div className="p-text">
                  <p>Utilizing on our princely industry capability, we give Personal Loan Service. These administrations are practiced utilizing the propelled strategies. What’s more, our offered support is rendered in fluctuated terms and structures that satisfy on client’s need.Moreover, we render this service at nominal costs.This type of loan is used by many to resolve their current financial needs. A personal loan is taken for tenure of one to five years. Also these require lowest formalities and no collateral or security. It is a type of unsecured loan which can be availed on the basis of various criteria. Level of income, employment history, credit score and scope for repayment are those specific criteria. Considering these criteria and lender, the APR (Annual Percentage Rate) of personal loan can be anywhere between 11.29% to 35%.</p>
                </div>
              </div>
              <div className="Choose-ploan">
              <h1 className="st-head">Why Choose AS FINANCIAL SERVICES To Apply For Personal Loans?</h1>
              <div className="Choose-l-three">
                <div className="p-text1">
                  <h3>Why choose us</h3>
                  <p>Loan that rescues when you need some quick money for an unplanned situation.This is one of the fastest loans too. This loan usually comes to your rescue when you need some quick money for an unplanned situation. They could be, Travel, Medical, House expenses, Marriage etc.The documentation process in Personal Loan is relatively simple. Unlike other loans, this loan does not need you to provide a Security. </p>
                </div>
                <div className="p-text1">
                  <h3>Procedure ForPersonal Loan:</h3>
                  <p>Compare : Provide customer details and other requirements. Selecting a Bank and Loan type
                        Apply : Collecting, Preparing and submitting the documents
                        Credit : Sanctioning of the Loan
                        Agreement : Provide Sanction Letter & Blank Loan Agreement. Collecting, Preparing and Submitting the Agreement
                        Disburse : Payment to customer (DD / RTGS)
                    </p>
                </div>
                <div className="p-text1">
                  <h3>Why Should I Take A Personal Loan</h3>
                  <p>
                  In each individual’s life there comes a second where you critically need a particular measure of cash which can’t be secured by your reserve funds. The sum can be required for any close to home explanation like home remodel or vehicle fix, to take care of startling clinical tabs, for wedding, travel, Mastercard remarkable equalization move and so on. Here the choice of getting this ideal sum by means of individual advance comes incredibly convenient.</p>
                </div>
              </div>
            </div>
            </div>
            
        </div>
    );
};

export default Personloan;