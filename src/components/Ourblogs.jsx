import React from "react";
import './Ourblogs.css';  
import blog1 from '../images/cre-repo.png' 
import blog2 from '../images/home-loan.jpg' 

const Ourblogs = () => {
    return (
        <div ClassName="Our-Blogs">
            <div className="Emi-heading">
            <h1 className="Emi-head">Our Blogs</h1>
           </div>
           <h1 className="sta-head">What is Credit Score ? How is it Calculated ?</h1>
           <div className="image-text">
           
            <div className="credit-score">
             <p>
              
Personal loan for Low Cibil score in Pune– Find out what information goes on your credit report, how credit scores are calculated and how banks use your credit history to decide on your loan applications. The secret of a good credit scoring lies in: Pay the bills on time Manage bank accounts, credit cards and loans well.
             </p>
              
             <p>
             Find out what information goes on your credit report, how credit scores are calculated and how banks use your credit history to decide on your loan applications.
             </p>
             <p>The secret of a good credit scoring lies in:

              <ul>
                <li>Pay the bills on time</li>
                <li>Manage bank accounts, credit cards and loans well.</li>
              </ul>
             </p>
             
            </div>
            <div className="blo-img"> 
              <div className="blo-img1">
                <img src={blog1} alt="credit report img"></img>
              </div>
              <div className="blo-img1">
                <img src={blog2} alt="home loan img"></img>
              </div>
            </div>
                </div>
                <h1 className="sta-head">What personal information is present in the credit scoring?</h1>
                              <div className="person-info">
                                  <h2>Your credit scoring contains information that identifies you, such as:</h2>
                                  <ul>
                                      <li>First name</li>
                                      <li>Address</li>
                                      <li>Unique Identification no. (PAN, Aadhaar, or Voter)</li>
                                      <li>Information about your financial activities, such as loan applications, balances, and payment histories</li>
                                  </ul>
                                  <p>Most of your credit report contains detailed information about recent activity on your financial accounts. This includes accurate information.</p>
                                  
                                  <h2>Credit applications</h2>
                                  <p>Whenever you apply for credit, regardless of whether you are approved or not.</p>
                                  
                                  <h2>Loans open</h2>
                                  <p>The data will include the bank, the loan amount, the loan opening date, the monthly payment amount, and the payment history.</p>
                                  
                                  <h2>Closed accounts</h2>
                                  <p>A closed account remains on the relationship for up to seven years.</p>
                              </div>
                 <h1 className="sta-head">How do banks use your credit scoring information?</h1>
                 <div className="person-info">
                  <p>Today, specialist companies use our data to create credit scores . Most financial institutions will use them when we turn to them for a loan.
                  With that said, you can expect this to happen more carefully when you are applying for a major loans, such as a  Instant Business loan in Pune</p>
                  <p>In addition to approving your loan, your credit scoring can determine how much you will pay for the credit . The higher your credit score, the less interest you will be charged for the loan and you’ll get Personal loan for Low Cibil score in Pune .</p>
                 </div>
                 <h1 className="sta-head">How do you Get a Good Credit Scoring ?</h1>
                 <div className="person-info">
                   <p>A good credit scoring is composed primarily of 2 main items :</p>
                          <ul>
                            <li>Loans requested and repaid</li>
                            <li>Utility bills and household bills paid without delay</li>
                          </ul>
                 </div>
                 <h1 className="sta-head">How long does it take to build a good credit score?</h1>
                 <div className="person-info">
                 <p>This aspect is linked to an ancient problem in the financial world.</p>
                 <p>You need to enjoy some trust from Financial institutions before getting funding. But it is unlikely that you will be trusted without first having a credit history!</p>
                 <p>The best thing to do is to start building your own financial “credibility” from a young age.</p>
                 <p>A key part of credit scoring is <cite className="imp">time</cite>. Typically , <cite className="imp">it takes about three years of responsible credit use to have an average score.</cite></p>
                 </div>
                 <h1 className="sta-head">Why is paying bills on time so important?</h1>
                 <div className="person-info">
                  <p>The <cite className="imp">payment history accounts for about 35% of the credit scoring system</cite> , more than any other factor.</p>
                  <ul>
                    <li>Making <cite className="imp">timely payments</cite> is the number one point from which to build a good credit score.</li>
                  </ul>
                  <p>The longer you wait to pay them, the lower your credit score will be.</p>
                 </div>
                 <h1 className="sta-head">How can you remedy bad credit scoring?</h1>
                 <div className="person-info">
                  <p>
                  In the same way you build you build a good one! <cite className="imp">Paying bills on time and staying away from debt .</cite> </p>
                  <p>Expect one to two years of responsible credit management before there is a tangible impact on credit scoring , and be wary of anyone who tries to sell you shortcuts to obtaining a better credit score</p>
                 </div>
        </div>
    );
};
export default  Ourblogs;