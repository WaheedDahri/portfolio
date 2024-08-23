
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './App.css';

const ThreeBoxes = () => {
  const navigate = useNavigate();
  const [zoom, setZoom] = useState(false);

  const handleClick = (path) => {
    setZoom(true);
    setTimeout(() => {
      if (path) {
        navigate(path); // Navigate to internal route
      } else {
        window.location.href = '/netflix.html'; // Navigate to external HTML file
      }
    }, 300); // Duration should match the CSS animation duration
  };

  const handleExternalClick = (url) => {
    setZoom(true);
    setTimeout(() => {
      window.location.href = url; // Navigate to external HTML file
    }, 300); // Duration should match the CSS animation duration
  };

  const slideAnimation = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 100 },
  };

  return (
    <div className='container10'>
      <video autoPlay muted loop className="video-background">
        <source src="https://videos.pexels.com/video-files/2611250/2611250-uhd_2560_1440_30fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div>
        <div className="container-group">
          <div className="container6">
            <motion.div
              className={`box6 ${zoom ? 'zoomed' : ''}`}
              onClick={() => handleClick('/game')}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={slideAnimation}
              transition={{ duration: 0.5 }}
            >
              <div className='abcr'>
                <h1>Game Website</h1>
                <p>_____________________</p><br />
                <p>_________________ </p><br />
                <button className='wah12'><b>Show Project</b></button>
              </div>
            </motion.div>
            <motion.div
              className={`box6 ${zoom ? 'zoomed' : ''}`}
              onClick={() => handleExternalClick('/netflix.html')} // This will navigate to netflix.html
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={slideAnimation}
              transition={{ duration: 0.5 }}
            >
              <div className='abcr'>
                <h1>Netflix Website</h1>
                <p>_____________________</p><br />
                <p>_________________ </p><br />
                <button className='wah12'><b>Show Project</b></button>
              </div>
            </motion.div>
            <motion.div
              className={`box6 ${zoom ? 'zoomed' : ''}`}
              onClick={() => handleExternalClick('/quiz.html')} // This will navigate to quiz.html
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={slideAnimation}
              transition={{ duration: 0.5 }}
            >
              <div className='abcr'>
                <h1>Quiz <br /> Website</h1>
                <p>_____________________</p><br />
                <p>_________________ </p><br />
                <button className='wah12'><b>Show Project</b></button>
              </div>
            </motion.div>
          </div>
        </div>
        
        <div className="container-group">
          <div className="container6">
            <motion.div
              className="box6"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={slideAnimation}
              transition={{ duration: 0.5 }}
            >
              <div className='abcr'>
                <h1>Quiz <br /> Website</h1>
                <p>_____________________</p><br />
                <p>_________________ </p><br />
                <button className='wah12'><b>Show Project</b></button>
              </div>
            </motion.div>
            <motion.div
              className="box6"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={slideAnimation}
              transition={{ duration: 0.5 }}
            >
              <div className='abcr'>
                <h1>Quiz <br /> Website</h1>
                <p>_____________________</p><br />
                <p>_________________ </p><br />
                <button className='wah12'><b>Show Project</b></button>
              </div>
            </motion.div>
            <motion.div
              className="box6"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={slideAnimation}
              transition={{ duration: 0.5 }}
            >
              <div className='abcr'>
                <h1>Quiz <br /> Website</h1>
                <p>_____________________</p><br />
                <p>_________________ </p><br />
                <button className='wah12'><b>Show Project</b></button>
              </div>
            </motion.div>
          </div>  
          
        </div>
      </div>
    </div>
  );
};

export default ThreeBoxes;