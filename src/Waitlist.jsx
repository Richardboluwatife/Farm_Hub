// import React, { useRef, useState } from 'react';
// import { assets } from './assets/assets'

// const statesInNigeria = [
//     'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno', 'Cross River', 'Delta',
//     'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'FCT', 'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano',
//     'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun',
//     'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara'
// ];

// const StateDropdown = () => {
//     const [selectedState, setSelectedState] = useState('');

//     const handleStateChange = (e) => {
//         setSelectedState(e.target.value);
//     };

//     return (
//         <div className='State'>
//             <label htmlFor="state"> </label>
//             <select id="state" value={selectedState} onChange={handleStateChange}>
//                 <option value="" disabled>Select State</option>
//                 {statesInNigeria.map(state => (
//                     <option key={state} value={state}>{state}</option>
//                 ))}
//             </select>
//             {/* {selectedState && <p>You selected: {selectedState}</p>} */}
//         </div>
//     );
// };

// function Waitlist() {

//     const form = useRef();
//     const [formErrors, setFormErrors] = useState({});

//     const validateForm = () => {
//         const errors = {};
//         // Perform validation here
//         if (!form.current.from_name.value) {
//             errors.name = 'Name is required';
//         }
//         if (!form.current.from_email.value) {
//             errors.email = 'Email is required';
//         } else if (!/\S+@\S+\.\S+/.test(form.current.from_email.value)) {
//             errors.email = 'Email is invalid';
//         }
//         if (!form.current.message.value) {
//             errors.message = 'Message is required';
//         }
//         setFormErrors(errors);
//         return Object.keys(errors).length === 0;
//     };

//     const sendEmail = (e) => {
//         e.preventDefault();

//         if (validateForm()) {
//             const formData = {
//                 from_name: form.current.from_name.value,
//                 from_email: form.current.from_email.value,
//                 message: form.current.message.value
//             };

//             // Code for sending email using emailjs
//         }
//     };

//     return (
//         <div className='Waitlist' style={{ backgroundColor: "#15803D" }}>
//             <div className="list" style={{ backgroundColor: "#F0FDF4" }}>
//                 
//                 <div className="info">
//                     <form className="ContactForm" onSubmit={handleSubmit}>
//                         <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
//                         {errors.name && <div className="error">{errors.name}</div>}
//                         <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} />
//                         {errors.email && <div className="error">{errors.email}</div>}
//                         <select name="state" value={formData.state} onChange={handleChange}>
//                             <option value="">Select State</option>
//                             {statesInNigeria.map(state => (
//                                 <option key={state} value={state}>{state}</option>
//                             ))}
//                         </select>
//                         {errors.state && <div className="error">{errors.state}</div>}
//                         <textarea name="message" rows="5" placeholder="Tell Us Something" value={formData.message} onChange={handleChange}></textarea>
//                         <button type="submit">Submit</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Waitlist;

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { assets } from './assets/assets';

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
        <div className="Waitlist" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="handleForm" style={{ backgroundColor: "#E7F0E699", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div className="ALL" style={{ width: "1200px", display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: "20px" }}>
                    <div className="" style={{ height: "200px" }}>
                        <img src={assets.Waitlist} alt="" />
                    </div>
                    <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1px', height: "350px", width: "400px", alignItems: 'center', justifyContent: 'center', paddingLeft: "60px", borderRadius: "20px", border: "none" }}>
                        <div style={{ display: "flex", gap: "20px", height: "50px" }}>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" style={{ padding: "10px", borderRadius: "10px" }} />
                            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email address" style={{ borderRadius: "10px" }} />
                        </div>
                        <div style={{ display: "flex", gap: "20px", height: "50px" }}>
                            <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" style={{ padding: "10px", borderRadius: "10px" }} />
                            <select name="state" value={formData.state} onChange={handleChange} style={{ padding: "10px", width: "175px", borderRadius: "10px" }}>
                                <option value="">Select State</option>
                                {states.map((state) => (
                                    <option key={state} value={state}>{state}</option>
                                ))}
                            </select>
                        </div>
                        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Enter your message" style={{ width: "380px", borderRadius: "10px", height: "70px", paddingLeft:"10px"}}></textarea>
                        <button type="submit" style={{ width: "400px", borderRadius: "10px", height: "50px", width: "385px", marginTop: "5px" }}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EmailForm;
