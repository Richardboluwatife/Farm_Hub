import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { assets } from './assets/assets';
import styled from 'styled-components';


const EmailForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        state: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.values(formData).some((val) => val === '')) {
            alert('All fields must be filled out');
        } else {
            emailjs.send('service_hi0k9uq', 'template_e4nvqqm', formData, '0qmTYEoFkvFutAuJF')
                .then((result) => {
                    console.log(result.text);
                    alert('Email sent successfully!');
                    setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        state: '',
                        message: ''
                    });
                }, (error) => {
                    console.log(error.text);
                });
            console.log(formData);
        }
    };

    const states = [
        "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River",
        "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina",
        "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau",
        "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"
    ];
    

    return (
        <div className="waitlist" id='waitlist' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="handleForm" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div className="ALL" style={{ width: "1200px", display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: "20px" }}>
                    <div className="" style={{ height: "200px", width:"500px" }}>
                        <img src={assets.Waitlist} alt="" />
                    </div>
                    <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1px', height: "350px", width: "500px", alignItems: 'center', justifyContent: 'center', paddingLeft: "60px", borderRadius: "20px", border: "none", backgroundColor:"#E7F0E699" }}>
                        <div style={{ display: "flex", gap: "20px", height: "50px" }}>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" style={{ padding: "10px", borderRadius: "10px" }} />
                            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email address" style={{ borderRadius: "10px" }} />
                        </div>
                        <div style={{ display: "flex", gap: "20px", height: "50px" }}>
                            <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" style={{ padding: "10px", borderRadius: "10px" }} />
                            <select name="state" value={formData.state} onChange={handleChange} style={{ padding: "10px", width: "175px", borderRadius: "10px" }}>
                                <option value="">State</option>
                                {states.map((state) => (
                                    <option key={state} value={state}>{state}</option>
                                ))}
                            </select>
                        </div>
                        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Enter your message" style={{ width: "380px", borderRadius: "10px", height: "70px", paddingLeft:"10px"}}></textarea>
                        <button type="submit" style={{ width: "400px", borderRadius: "10px", height: "50px", width: "385px", marginTop: "5px", backgroundColor:"#16A34A"}}>Join Waitlist</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EmailForm;
