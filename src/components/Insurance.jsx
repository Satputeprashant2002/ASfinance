import React from "react";
import insuimg from "../images/lifeinsurance.jpg"
import './Insurance.css'


const Insurance = () => {
    return (
      <div className="Insurance">
         <div className="Emi-heading">
            <h1 className="Emi-head">Insurance</h1>
          </div>
          <div className="whole-three-tit">
            <div className="text-tit">
                 <p>Insurance is an agreement, spoke to by an arrangement, where an individual or element gets budgetary security or repayment against losses from an insurance organization. The organization pools customer dangers to make installments progressively reasonable for the protected.</p>
                 
                 <h1 className="st-head">"Protecting What Matters Most."</h1>
            </div>
            <div className="imgM">
                <img src={insuimg} alt="insurance img"></img>
            </div>
            <div className="text-tit">
              <p>Insurance is a methods for security from money related loss. It is a type of hazard the board, principally used to fence against the danger of an unforeseen or unsure loss.An element which gives insurance is known as an insurer, insurance organization, insurance transporter or guarantor. An individual or element who purchases insurance is referred to as a protected or as a policyholder.</p>

              <h1 className="st-head">"Because Every Moment Matters."</h1>
            </div>
          </div>
          <h1 className="st-head">TYPES OF INSURANCE</h1>
          <div className="four-insu-tog">
            <div className="first-insu-four">
              <h3>Health Insurance</h3>
              <p>Health care coverage arrangements spread the expense of clinical medicines. Dental insurance, similar to clinical insurance, secures policyholders for dental expenses. In most created nations, all residents get some wellbeing inclusion from their legislatures, paid through tax collection. In many nations, medical coverage is frequently part of a business’ advantages.</p>
            </div>
            <div className="first-insu-four">
              <h3>Life Insurance</h3>
              <p>Life insurance gives a financial advantage to a decedent’s family or other assigned recipient, and may explicitly accommodate pay to a protected individual’s family, entombment, burial service and other last costs. Life insurance strategies regularly permit the choice of having the returns paid to the recipient either in a single amount money installment or an annuity. In many states, an individual can’t buy a strategy on someone else without their insight.</p>
            </div>
            <div className="first-insu-four">
              <h3>General Insurance</h3>
              <p>General insurance incorporates Property Insurance, Liability Insurance, and Other Forms of Insurance. Fire and Marine Insurances are carefully called Property Insurance. Engine, Theft, Fidelity and Machine Insurances incorporate the degree of risk insurance somewhat.</p>
            </div>
            <div className="first-insu-four">
              <h3>Social Insurance</h3>
              <p>The social insurance is to give security to the more vulnerable areas of the general public who can’t pay the premium for satisfactory insurance. Annuity plans, inability benefits, joblessness benefits, infection insurance, and mechanical insurance are the different types of social insurance.</p>
            </div>
          </div>
          <div className="four-insu-tog">
            <div className="first-insu-four">
              <h3>Property Insurance</h3>
              <p>The property of an individual and of the general public is protected against loss of fire and marine risks, the yield is safeguarded against a sudden decrease in derivation, unforeseen passing of the creatures occupied with business, separate of machines and robbery of the property and products.The hazard may be fire or marine dangers, robbery of property or products harm to property at the mishap.</p>
            </div>
            <div className="first-insu-four">
              <h3>Fire Insurance</h3>
              <p>Without fire insurance, the fire waste will increment not exclusively to the individual yet to the general public too. With the assistance of fire insurance, the losses emerging because of fire are redressed and the general public isn’t losing a lot. The individual is favored from such losses and his property or business or industry.</p>
            </div>
            <div className="first-insu-four">
              <h3>Risk Insurance</h3>
              <p>The general Insurance additionally incorporates risk insurance whereby the safeguarded is at risk to pay the harm of property or to make up for the loss of persona; injury or passing. This insurance is found as loyalty insurance, collision protection, and machine insurance, and so forth.</p>
            </div>
            <div className="first-insu-four">
              <h3>Individual Insurance</h3>
              <p>The individual insurance incorporates insurance of human life which may endure a loss because of death, mishap, and infection Hence, individual insurance is further sub-characterized into life insurance, individual mishap insurance, and medical coverage.</p>
            </div>
          </div>
      </div>
    );
};

export default Insurance;