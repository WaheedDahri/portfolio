



// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhone, faEnvelope, faMapMarkerAlt, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
// import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import './ContactPage.css';

// const ContactPage = ({ onBack }) => {
//   const [isDayMode, setIsDayMode] = useState(true);

//   const toggleMode = () => {
//     setIsDayMode(prevMode => !prevMode);
//   };

//   return (
//     <div className={`contact-page-overlay ${isDayMode ? 'day-mode' : 'night-mode'}`}>
//       <div className="contact-page-container">
//         <div className="rotating-container">
//           <div className="rotating-line"></div>
//         </div>
//         <div className="header-icons" onClick={toggleMode}>
//           {isDayMode ? <FontAwesomeIcon icon={faSun} className="day-icon" /> : <FontAwesomeIcon icon={faMoon} className="night-icon" />}
//         </div>
//         <h1 className="header"><span className="highlight">W</span>aheed Dahri</h1>
//         <hr />
//         <h2 className="subheader typing-animation">Contact Information</h2>
//         <ul className="contact-list">
//           <li className="contact-item">
//             <div className="contact-icon-container">
//               <FontAwesomeIcon icon={faPhone} className="contact-icon" />
//               <span className="contact-icon-tooltip" aria-label="Phone">Phone</span>
//             </div>
//             <div className="contact-text-container">
//               <span className="contact-detail">03142100927</span>
//               <span className="contact-text-tooltip" aria-label="Copy">Copy</span>
//             </div>
//           </li>
//           <li className="contact-item">
//             <div className="contact-icon-container">
//               <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
//               <span className="contact-icon-tooltip" aria-label="Email">Email</span>
//             </div>
//             <div className="contact-text-container">
//               <span className="contact-detail">dahriwaheed45@gmail.com</span>
//               <span className="contact-text-tooltip" aria-label="Copy">Copy</span>
//             </div>
//           </li>
          // <li className="contact-item">
          //   <div className="contact-icon-container">
          //     <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
          //     <span className="contact-icon-tooltip" aria-label="Location">Location</span>
          //   </div>
          //   <span className="contact-detail">Defence view, Karachi, Pakistan</span>
          // </li>
          // <li className="contact-item">
          //   <div className="contact-icon-container">
          //     <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
          //     <span className="contact-icon-tooltip" aria-label="LinkedIn Profile">LinkedIn Profile</span>
          //   </div>
          //   <span className="contact-detail">
          //     <a href="https://www.linkedin.com/in/waheed-dahri-073014309/">LinkedIn profile</a>
          //   </span>
          // </li>
//         </ul>
//         <button className="button5" onClick={onBack} aria-label="Go back">Back</button>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './App.css';


const ContactPage = ({ onBack }) => {
  const [isDayMode, setIsDayMode] = useState(true);
  const [copiedMessage, setCopiedMessage] = useState('');

  const toggleMode = () => {
    setIsDayMode(prevMode => !prevMode);
  };

  const handleCopy = (value, title, abc) => {
    navigator.clipboard.writeText(value);
    setCopiedMessage(`Copied ${title}`);
    setTimeout(() => setCopiedMessage(''), 3000); // Reset message after 2 seconds
    
    // Update the tooltip text dynamically
    const contactTextTooltip = document.getElementById(`contact-text-tooltip-${abc}`);
    if (contactTextTooltip) {
      contactTextTooltip.textContent = "Copied";
      setTimeout(() => {
        contactTextTooltip.textContent = "Copy";
      }, 3000); // Reset tooltip text after 2 seconds
    }
  };

  return (
    <div className={`contact-page-overlay ${isDayMode ? 'day-mode' : 'night-mode'}`}>
      <div className="contact-page-container">
        <div className="rotating-container">
          <div className="rotating-line"></div>
        </div>
        <div className="header-icons" onClick={toggleMode}>
          {isDayMode ? <FontAwesomeIcon icon={faSun} className="day-icon" /> : <FontAwesomeIcon icon={faMoon} className="night-icon" />}
        </div>
        <h1 className="header"><span className="highlight">W</span>aheed Dahri</h1>
        <hr />
        <h2 className="subheader typing-animation">Contact Information</h2>
        <ul className="contact-list">
          <li className="contact-item" onClick={() => handleCopy('03142100927', 'Phone', 0)}>
            <div className="contact-icon-container">
              <FontAwesomeIcon icon={faPhone} className="contact-icon" />
              <span className="contact-icon-tooltip" aria-label="Phone">Phone</span>
            </div>
            <div className="contact-text-container">
              <span className="contact-detail">03142100927</span>
              <span id={`contact-text-tooltip-0`} className="contact-text-tooltip" aria-label="Copy">Copy</span>
            </div>
          </li>
          <li className="contact-item" onClick={() => handleCopy('dahriwaheed45@gmail.com', 'Email', 1)}>
            <div className="contact-icon-container">
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              <span className="contact-icon-tooltip" aria-label="Email">Email</span>
            </div>
            <div className="contact-text-container">
              <span className="contact-detail">dahriwaheed45@gmail.com</span>
              <span id={`contact-text-tooltip-1`} className="contact-text-tooltip" aria-label="Copy">Copy</span>
            </div>
          </li>
          <li className="contact-item">
            <div className="contact-icon-container">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
              <span className="contact-icon-tooltip" aria-label="Location">Location</span>
            </div>
            <span className="contact-detail">Defence view, Karachi, Pakistan</span>
          </li>
          <li className="contact-item">
            <div className="contact-icon-container">
              <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
              <span className="contact-icon-tooltip" aria-label="LinkedIn Profile">LinkedIn Profile</span>
            </div>
            <span className="contact-detail">
              <a href="https://www.linkedin.com/in/waheed-dahri-073014309/">LinkedIn profile</a>
            </span>
          </li>
        </ul>
        <button className="button5" onClick={onBack} aria-label="Go back">Back</button>
      </div>
      {copiedMessage && <div className="copied-message">{copiedMessage}</div>}
    </div>
  );
};

export default ContactPage;















