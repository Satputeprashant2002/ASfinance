import React, { useState } from 'react';
import './Calci.css'; // Import the CSS file

const Calci = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [loanTenure, setLoanTenure] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [emiDetails, setEmiDetails] = useState(null);
  const [showResults, setShowResults] = useState(false); // State to manage visibility of results

  const calculateEmi = () => {
    const principal = parseFloat(loanAmount);
    const tenure = parseFloat(loanTenure) * 12; // Convert years to months
    const rate = parseFloat(interestRate) / 12 / 100; // Convert annual rate to monthly and percentage

    if (principal && tenure && rate) {
      const emi = (principal * rate * Math.pow(1 + rate, tenure)) / (Math.pow(1 + rate, tenure) - 1);
      const totalPayment = emi * tenure;
      const totalInterest = totalPayment - principal;

      setEmiDetails({
        emi: emi.toFixed(2),
        principal: principal,
        totalInterest: totalInterest.toFixed(2),
        totalPayment: totalPayment.toFixed(2),
      });
      setShowResults(true); // Show results after calculation
    } else {
      setEmiDetails(null); // Reset EMI details if inputs are invalid
      setShowResults(false); // Hide results if inputs are invalid
    }
  };

  return (
    <div className="emi-calculator">
      <div className="input-group">
        <div className="input-item">
          <label>Loan Amount (Rs.):</label>
          <input 
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            required
          />
        </div>
        <div className="input-item">
          <label>Loan Tenure (years):</label>
          <input 
            type="number"
            value={loanTenure}
            onChange={(e) => setLoanTenure(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="input-group">
        <div className="input-item">
          <label>Interest Rate (%):</label>
          <input 
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            required
          />
        </div>
        <button className="calculate-button" onClick={calculateEmi}>Calculate EMI</button>
      </div>

      

      {/* Result fields with labels, values will show only if showResults is true */}
      <div className="result">
        <p>Monthly Loan EMI: {showResults ? `Rs. ${emiDetails?.emi}` : '-'}</p>
        <p>Principal Amount: {showResults ? `Rs. ${emiDetails?.principal}` : '-'}</p>
        <p>Loan on Interest: {showResults ? `Rs. ${emiDetails?.totalInterest}` : '-'}</p>
        <p>Total Amount to be Paid: {showResults ? `Rs. ${emiDetails?.totalPayment}` : '-'}</p>
      </div>
    </div>
  );
};

export default Calci;
