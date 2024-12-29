import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Cont.css';

const Cont = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        location: '',
        phone: '',
        profile: '',
        service: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send('service_n84x4gk', 'template_6qam40v', formData, 'dISvX0jtIudoUW80G')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                // Clear form
                setFormData({
                    name: '',
                    email: '',
                    location: '',
                    phone: '',
                    profile: '',
                    service: '',
                    message: ''
                });
            })
            .catch((err) => {
                console.error('FAILED...', err);
            });
    };

    return (
        <div className="contact-contP">
            <div className="Emi-heading">
                <h1 className="Emi-head">Contact Us</h1>
            </div>
            <div className='contact-cont'>
                <div className='contact-left'>
                    <div className='contact-left-1'>
                        <div className='log'>
                            <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <div className='con-info'>
                            <div className='contact-left-info'>Address</div>
                            <div className="contact-address">Office no.1, Sr no: 67, Hissa no. 2 Raj Tower, Katraj Pune 411046 Maharashtra, India</div>
                        </div>
                    </div>
                    <div className='contact-left-1'>
                        <div className='log'>
                            <i className="fa-solid fa-phone"></i>
                        </div>
                        <div className='con-info'>
                            <div className='contact-left-info'>Phone No</div>
                            <div className="contact-address">+91 9767843818 </div>
                        </div>
                    </div>
                    <div className='contact-left-1'>
                        <div className='log'>
                            <i className="fa-solid fa-envelope"></i>
                        </div>
                        <div className='con-info'>
                            <div className='contact-left-info'>Email Us</div>
                            <div className="contact-address">asfinancialservices52@gmail.com</div>
                        </div>
                    </div>
                </div>
                <div className='contact-right'>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15139.276781784474!2d73.8576674!3d18.4465166!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eadb098dfa51%3A0x8ac850fcae630ad4!2sAS%20FINANCIAL%20SERVICES!5e0!3m2!1sen!2sin!4v1729669507473!5m2!1sen!2sin"
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map"
                    ></iframe>
                </div>
            </div>
            <div className="Form">
                <h1 className="st-head">Request a Call Back</h1>
                <div className="Form-sub">
                    <h3>Fill up The Form </h3>
                    <form onSubmit={handleSubmit}>
                        <div className="two-ipu">
                            <input type="text" name="name" placeholder="Enter your Full Name" value={formData.name} onChange={handleChange} required />
                            <input type="email" name="email" placeholder="Enter your Email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="two-ipu">
                            <input type="text" name="location" placeholder="Enter your Location" value={formData.location} onChange={handleChange} required />
                            <input type="tel" name="phone" placeholder="Enter your Contact Number" value={formData.phone} onChange={handleChange} required />
                        </div>
                        <div className="single-ipu">
                            <select id="profile" name="profile" value={formData.profile} onChange={handleChange} required>
                                <option value="" disabled>Select Profile</option>
                                <option value="Salaried">Salaried</option>
                                <option value="Self Employed">Self Employed</option>
                                <option value="Professional">Professional</option>
                                <option value="Other">Other</option>
                            </select>
                            <select id="service" name="service" value={formData.service} onChange={handleChange} required>
                                <option value="" disabled>Select Service</option>
                                <option value="Personal Loan">Personal Loan</option>
                                <option value="Home Loan">Home Loan</option>
                                <option value="Business Loan">Business Loan</option>
                                <option value="Insurance">Insurance</option>
                                <option value="Other">Other</option> 
                            </select>
                            <div className="messa">
                                <input type="text" name="message" placeholder='Write Your Message Here' value={formData.message} onChange={handleChange} />
                            </div>
                            <div className="butt">
                                <button type='submit'>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Cont;
