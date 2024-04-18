// import React, { useState } from 'react';
// import emailjs from 'emailjs-com';
// import { assets } from './assets/assets';
// import styled from 'styled-components';


// const EmailForm = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         phone: '',
//         state: '',
//         message: ''
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (Object.values(formData).some((val) => val === '')) {
//             alert('All fields must be filled out');
//         } else {
//             emailjs.send('service_hi0k9uq', 'template_e4nvqqm', formData, '0qmTYEoFkvFutAuJF')
//                 .then((result) => {
//                     console.log(result.text);
//                     alert('Email sent successfully!');
//                     setFormData({
//                         name: '',
//                         email: '',
//                         phone: '',
//                         state: '',
//                         message: ''
//                     });
//                 }, (error) => {
//                     console.log(error.text);
//                 });
//             console.log(formData);
//         }
//     };

//     const states = [
//         "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River",
//         "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina",
//         "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau",
//         "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"
//     ];


//     return (
//         <div className="waitlist" id='waitlist' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//             <div className="handleForm" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
//                 <div className="ALL" style={{ width: "1200px", display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: "20px" }}>
//                     <div className="" style={{ height: "200px", width: "500px" }}>
//                         <img src={assets.Waitlist} alt="" />
//                     </div>
//                     <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1px', height: "350px", width: "500px", alignItems: 'center', justifyContent: 'center', paddingLeft: "60px", borderRadius: "20px", border: "none", backgroundColor: "#E7F0E699" }}>
//                         <div style={{ display: "flex", gap: "20px", height: "50px" }}>
//                             <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" style={{ padding: "10px", borderRadius: "10px" }} />
//                             <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email address" style={{ borderRadius: "10px" }} />
//                         </div>
//                         <div style={{ display: "flex", gap: "20px", height: "50px" }}>
//                             <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" style={{ padding: "10px", borderRadius: "10px" }} />
//                             <select name="state" value={formData.state} onChange={handleChange} style={{ padding: "10px", width: "175px", borderRadius: "10px" }}>
//                                 <option value="">State</option>
//                                 {states.map((state) => (
//                                     <option key={state} value={state}>{state}</option>
//                                 ))}
//                             </select>
//                         </div>
//                         <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Enter your message" style={{ width: "380px", borderRadius: "10px", height: "70px", paddingLeft: "10px" }}></textarea>
//                         <button type="submit" style={{ width: "400px", borderRadius: "10px", height: "50px", width: "385px", marginTop: "5px", backgroundColor: "#16A34A" }}>Join Waitlist</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default EmailForm;



import React, { useState } from "react";
import { assets } from "./assets/assets";

const statesInNigeria = [
    "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River",
    "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "FCT", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano",
    "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo",
    "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"
];

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [state, setState] = useState("");
    const [info, setInfo] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phoneError, setPhoneError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate email and phone number
        if (!validateEmail(email)) {
            setEmailError("Please enter a valid email address");
            return;
        } else {
            setEmailError("");
        }

        if (!validatePhone(phone)) {
            setPhoneError("Please enter a valid phone number");
            return;
        } else {
            setPhoneError("");
        }

        // Handle form submission here
        console.log("Form submitted with data:", { name, email, phone, state, info });
    };

    const validateEmail = (email) => {
        // Basic email validation
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validatePhone = (phone) => {
        // Basic phone number validation
        return /^\d{10}$/.test(phone);
    };

    return (
        <div className="">
            <div className="waitlist" id='waitlist' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="Destopwait">
                    <div className="handleform" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingRight: "10px" }}>
                        <div className="ALL" style={{ width: "1230px", display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: "20px" }}>
                            <div className="mobveiwwait" style={{ height: "200px", width: "500px" }}>
                                <img src={assets.Waitlist} alt="" />
                            </div>
                            <div className="Destopveiw">

                                <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1px', height: "350px", width: "500px", alignItems: 'center', justifyContent: 'center', paddingLeft: "60px", borderRadius: "20px", border: "none", backgroundColor: "#E7F0E699" }} >
                                    <div className="mobwait" style={{ display: "flex", gap: "20px", paddingLeft: "65px" }}>
                                        <label>
                                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" required className="mobwat" style={{ padding: "15px" }} />
                                        </label>
                                        <label>
                                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email address" required className="mobwat" style={{ padding: "15px" }} />
                                            <span className="error">{emailError}</span>
                                        </label>
                                    </div>
                                    <div className="mobwait" style={{ display: "flex", gap: "20px", paddingLeft: "65px" }}>
                                        <label>
                                            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter your phone number" required style={{ padding: "15px" }} />
                                            <span className="error">{phoneError}</span>
                                        </label>
                                        <label>
                                            <select value={state} onChange={(e) => setState(e.target.value)} required style={{ padding: "15px", width: "200px" }}>
                                                <option value="" style={{ padding: "15px" }}>Select State</option>
                                                {statesInNigeria.map((state, index) => (
                                                    <option key={index} value={state} style={{ padding: "15px" }}>{state}</option>
                                                ))}
                                            </select>
                                        </label>
                                    </div>
                                    <div className="" style={{ paddingLeft: "65px" }}>
                                        <label>
                                            <textarea value={info} onChange={(e) => setInfo(e.target.value)} placeholder="Tell us something" required style={{ padding: "25px", width: "420px" }} />
                                        </label>
                                    </div>
                                    <div className="" style={{ paddingLeft: "60px" }}>
                                        <button type="submit" style={{ padding: "15px", paddingRight: "75px", width: "500px", background: "transparent", paddingLeft: "5px", cursor: "pointer" }}>
                                            <img src={assets.Frame2} alt="" />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="moblieviewwait" >
                    <form onSubmit={handleSubmit} style={{ display: 'flex', gridTemplateColumns: '1fr',  height: "570px", width: "350px", alignItems: 'center', justifyContent: 'center', borderRadius: "20px", border: "none", backgroundColor: "#E7F0E699", flexDirection:"column", gap:'20px'}} >
                            <label>
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" required className="mobwat" style={{ padding: "25px", width:"320px" }} />
                            </label>
                            <label>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email address" required className="mobwat" style={{ padding: "25px", width:"320px" }} />
                                <span className="error">{emailError}</span>
                            </label>
                        
                            <label>
                                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter your phone number" required style={{ padding: "25px", width:"320px" }} />
                                <span className="error">{phoneError}</span>
                            </label>
                            <label>
                                <select value={state} onChange={(e) => setState(e.target.value)} required style={{ padding: "25px", width: "320px" }}>
                                    <option value="" style={{ padding: "15px" }}>Select State</option>
                                    {statesInNigeria.map((state, index) => (
                                        <option key={index} value={state}>{state}</option>
                                    ))}
                                </select>
                            </label>
            
                            <label>
                                <textarea value={info} onChange={(e) => setInfo(e.target.value)} placeholder="Tell us something" required style={{ padding: "30px", width:"320px" }}/>
                            </label>
                        
                        <div className="" style={{width:"320px"}} >
                            <button type="submit" style={{backgroundColor:"transparent"}} >
                                <img src={assets.Frame2} alt=""/>
                            </button>
                        </div>
                    </form>
                </div>
            </div>


        </div>
    );
};

export default Form;
