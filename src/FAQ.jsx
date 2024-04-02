import React, { useState } from 'react';
import { assets } from './assets/assets';

const FarmhubInfo = () => {
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const toggleExpansion = (question) => {
    setExpandedQuestion(question === expandedQuestion ? null : question);
  };

  const faqData = [
    {
      question: 'What is Farmhub?',
      answer: 'Farmhub is an online farmers market connecting consumers directly with local farmers. We offer a wide range of fresh produce, sourced directly from the farm to your table.',
    },
    {
      question: 'How does Farmhub work?',
      answer: 'Farmhub is an online farmers market connecting consumers directly with local farmers. We offer a wide range of fresh produce, sourced directly from the farm to your table.',
    },
    {
      question: 'What is Buy with Others on Farmhub?',
      answer: 'Buy with Others on Farmhub allows customers to combine their orders with others in their area to meet minimum order requirements and reduce delivery costs.',
    },
    {
      question: 'Is Farmhub available in my area?',
      answer: 'Farmhub is continuously expanding to new areas. Please check our website or contact customer support to see if we deliver to your location.',
    },
    // Add more FAQ items as needed
  ];

  return (
    <div className="" style={{ height: "500px", paddingTop: "100px", marginBottom:"50px" }}>
      <div className="Faa" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div className="Faq" style={{ display: "flex", flexDirection: "row", gap: "50px", alignItems: "center" }}>
          <div className="im" style={{ marginTop: "80px" }}>
            <img src={assets.FAQ} alt="" />
          </div>
          <div className="que" style={{ marginTop: "20px" }}>
            <h1 style={{ marginBottom: "40px" }}>Frequently Asked Questions</h1>
            {faqData.map((faq, index) => (
              <div key={index} style={{ marginBottom: "40px" }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: "20px" }}>
                  <div>
                    <p>Q: {faq.question}</p>
                  </div>
                  <div style={{ marginLeft: `${(index + 4) * 10}px`, cursor: 'pointer' }} onClick={() => toggleExpansion(faq.question)}>
                    {expandedQuestion === faq.question ? '-' : '+'}
                  </div>
                </div>
                {expandedQuestion === faq.question && (
                  <div style={{ marginTop: '10px', marginLeft: '30px' }}>
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmhubInfo;
