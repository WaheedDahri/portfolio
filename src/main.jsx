


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import HomePage from './App.jsx';
// import AboutPage from './Aboutpage.jsx';
// import ContactPage from './ContactPage.jsx';
// import ThreeBoxes from './threeboxes.jsx';
// import GamePage from './gamepage.jsx';
// import QuizPage from './Quizpage.jsx';
// import netflixPage from './netflixpage.jsx'; // Ensure this matches the file name exactly

// import './App.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/contact" element={<ContactPage />} />
//         <Route path="/three" element={<ThreeBoxes />} />
//         <Route path="/game" element={<GamePage />} />
//         <Route path="/Quiz" element={<QuizPage />} /> {/* Use lowercase "q" for the path */}
//         <Route path="/netflix" element={<netflixPage />} />
//       </Routes>
//     </Router>
//   </React.StrictMode>
// );

// Import necessary modules
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// // Import your components
// import HomePage from './App.jsx';
// import AboutPage from './Aboutpage.jsx';
// import ContactPage from './ContactPage.jsx';
// import ThreeBoxes from './threeboxes.jsx';
// import GamePage from './gamepage.jsx';
// import QuizPage from './Quizpage.jsx';
// import netflixPage from './netflixpage.jsx'; 

// // Import CSS file
// import './App.css';

// // Render the application
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/contact" element={<ContactPage />} />
//         <Route path="/three" element={<ThreeBoxes />} />
//         <Route path="/game" element={<GamePage />} />
//         <Route path="/Quiz" element={<QuizPage />} /> {/* Corrected path name to lowercase */}
//         <Route path="/netflix" element={<NetflixPage />} /> {/* Corrected component name */}
//       </Routes>
//     </Router>
//   </React.StrictMode>
// );



import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './App.jsx';
import AboutPage from './Aboutpage.jsx';
import ContactPage from './ContactPage.jsx';
import ThreeBoxes from './threeboxes.jsx';
import GamePage from './gamepage.jsx';
import QuizPage from './Quizpage.jsx';
import NetflixPage from "./netflixpage.jsx";



import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/three" element={<ThreeBoxes />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/netflix" element={<NetflixPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

