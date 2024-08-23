


// import React, { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
// import { useNavigate } from 'react-router-dom';
// import './App.css';

// const AboutPage = () => {
//   const [fullscreenBox, setFullscreenBox] = useState(null);
//   const [visibleBox, setVisibleBox] = useState('box1');
//   const [direction, setDirection] = useState(1); // 1 for right, -1 for left
//   const [showImage, setShowImage] = useState(false); // State to manage certificate image visibility
//   const [showResume, setShowResume] = useState(false); // State to manage resume image visibility
//   const navigate = useNavigate();
//   const audioRef = useRef(null);

//   useEffect(() => {
//     if (audioRef.current) {
//       audioRef.current.play();
//     }
//   }, []);

//   const handleBoxClick = (box) => {
//     setFullscreenBox(box);
//   };

//   const handleOverlayClick = () => {
//     setFullscreenBox(null);
//   };

//   const handlePrevClick = () => {
//     setDirection(-1);
//     setVisibleBox('box1');
//   };

//   const handleNextClick = () => {
//     setDirection(1);
//     setVisibleBox('box2');
//   };

//   const handleNavigate = () => {
//     navigate('/three');
//   };

//   const handleCertificateClick = () => {
//     setShowImage(!showImage);
//   };

//   const handleResumeClick = () => {
//     setShowResume(!showResume);
//   };

//   const boxVariants = {
//     initial: { x: direction === 1 ? '100%' : '-100%', opacity: 0 },
//     animate: { x: 0, opacity: 1 },
//     exit: { x: direction === 1 ? '-100%' : '100%', opacity: 0 }
//   };

//   return (
//     <AnimatePresence>
//       <motion.div
//         className="about-page-container"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         transition={{ duration: 0.1 }}
//       >
//         <div className="background">
//           <video
//             src="https://videos.pexels.com/video-files/5122429/5122429-hd_1280_720_25fps.mp4"
//             autoPlay
//             muted
//             loop
//             className="video-background"
//           />
//           <div className="circle-net-background"></div>
//           <div className={`overlay ${fullscreenBox ? 'visible' : ''}`} onClick={handleOverlayClick}></div>
//           <div className="content">
//             <div className="boxes-container">
//               <AnimatePresence initial={false}>
//                 {visibleBox === 'box1' && (
//                   <motion.div
//                     key="box1"
//                     className={`box box1 ${fullscreenBox === 'box1' ? 'fullscreen' : ''}`}
//                     onClick={() => handleBoxClick('box1')}
//                     variants={boxVariants}
//                     initial="initial"
//                     animate="animate"
//                     exit="exit"
//                     transition={{ duration: 0.5 }}
//                     drag="x"
//                     dragConstraints={{ left: 0, right: 0 }}
//                     onDragEnd={(e, { offset, velocity }) => {
//                       if (offset.x < -100 || velocity.x < -500) {
//                         handleNextClick();
//                       } else if (offset.x > 100 || velocity.x > 500) {
//                         handlePrevClick();
//                       }
//                     }}
//                   >
//                     <h2 className="wah"><span>About</span> Me</h2>
//                     <p className="abc1">
//                       Hi, I'm Waheed Dahri, a Frontend Developer with a passion for creating beautiful and functional web interfaces. <br />
//                       "I am currently pursuing a Bachelor's degree in Computer Science at IQRA University, main campus, Karachi. <br />
//                       This is my fourth semester. I enrolled in IQRA University in October 2022."
//                       <br /><br /> <br /><br />
//                       To ensure the boxes are displayed in a row, we can adjust the CSS styles and ensure the layout is handled using Flexbox. <br />
//                       We'll update the AboutPage component to apply specific classes to each box and make the necessary changes in the CSS to achieve the desired layout
//                     </p>
//                     <button className="btn1" onClick={handleResumeClick}>My Resume</button>
//                   </motion.div>
//                 )}
//                 {visibleBox === 'box2' && (
//                   <motion.div
//                     key="box2"
//                     className={`box box2 ${fullscreenBox === 'box2' ? 'fullscreen' : ''}`}
//                     onClick={() => handleBoxClick('box2')}
//                     variants={boxVariants}
//                     initial="initial"
//                     animate="animate"
//                     exit="exit"
//                     transition={{ duration: 0.5 }}
//                     drag="x"
//                     dragConstraints={{ left: 0, right: 0 }}
//                     onDragEnd={(e, { offset, velocity }) => {
//                       if (offset.x < -100 || velocity.x < -500) {
//                         handleNextClick();
//                       } else if (offset.x > 100 || velocity.x > 500) {
//                         handlePrevClick();
//                       }
//                     }}
//                   >
//                     <h2 className="wah"><span>My</span> Skills</h2>
//                     <p className="abc2">
//                       I have a strong background in HTML, CSS, JavaScript, and React.js, and I love learning new technologies and improving my skills. <br />
//                       To ensure the boxes are displayed in a row, we can adjust the CSS styles and ensure the layout is handled using Flexbox. <br />
//                       We'll update the AboutPage component to apply specific classes to each box and make the necessary changes in the CSS to achieve the desired layout <br />
//                       <h2 className="wah"><span6>E</span6>xperience</h2>
//                       "I have four months of experience as a Certified Frontend Developer at 360XpertSolution Software House."<br />
//                     </p>
//                     <button className="btn1" onClick={handleCertificateClick}>Certificate</button>
//                     <button onClick={handleNavigate} className="button" style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
//                       <FontAwesomeIcon className='fa-arrow-right' icon={faArrowRight} style={{ height: '20px', color: 'white', marginBottom: '' }} />
//                       <span className="tooltip">Next</span>
//                     </button>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           </div>
//         </div>
//         <button className="nav-button left" onClick={handlePrevClick}>‹</button>
//         <button className="nav-button right" onClick={handleNextClick}>›</button>
//       </motion.div>
//       <audio ref={audioRef} src='/audiomy.mp3' autoPlay />

//       <AnimatePresence>
//         {showImage && (
//           <motion.div 
//             className="image1-container"
//             initial={{ opacity: 0, scale: 0.5 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.5 }}
//             transition={{ duration: 0.5 }}
//           >
//             <img src="./pikmy3.jpeg" alt="Certificate" className="centered-image" />
//             <div className="close-button" title='close' onClick={handleCertificateClick}></div>
//           </motion.div>
//         )}
//       </AnimatePresence>
      
//       <AnimatePresence>
//         {showResume && (
//           <motion.div 
//             className="image2-container"
//             initial={{ opacity: 0, scale: 0.5 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.5 }}
//             transition={{ duration: 0.5 }}
//           >
//             <img src="./pick10.jpg" alt="Resume" className="centered-image2" />
//             <div className="close-button1" title='close' onClick={handleResumeClick}></div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </AnimatePresence>
//   );
// };

// export default AboutPage;



import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './App.css';
// import {} from "./"

const AboutPage = () => {
  const [fullscreenBox, setFullscreenBox] = useState(null);
  const [visibleBox, setVisibleBox] = useState('box1');
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left
  const [showImage, setShowImage] = useState(false); // State to manage certificate image visibility
  const [showResume, setShowResume] = useState(false); // State to manage resume image visibility
  const [doubleClick, setDoubleClick] = useState(false); // State to track double-click
  const navigate = useNavigate();
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, []);

  const handleBoxClick = (box) => {
    setFullscreenBox(box);
  };

  const handleOverlayClick = () => {
    setFullscreenBox(null);
  };

  const handlePrevClick = () => {
    setDirection(-1);
    setVisibleBox('box1');
  };

  const handleNextClick = () => {
    setDirection(1);
    setVisibleBox('box2');
  };

  const handleNavigate = () => {
    navigate('/three');
  };

  const handleCertificateClick = () => {
    setShowImage(!showImage);
  };

  const handleResumeClick = () => {
    setShowResume(!showResume);
  };

  const handleResumeDoubleClick = () => {
    setDoubleClick(true);
    setTimeout(() => setDoubleClick(false), 300); // Reset after 300ms
  };

  const boxVariants = {
    initial: { x: direction === 1 ? '100%' : '-100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: direction === 1 ? '-100%' : '100%', opacity: 0 }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="about-page-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.1 }}
      >
        <div className="background">
          <video
            src="https://videos.pexels.com/video-files/5122429/5122429-hd_1280_720_25fps.mp4"
            autoPlay
            muted
            loop
            className="video-background"
          />
          <div className="circle-net-background"></div>
          <div className={`overlay ${fullscreenBox ? 'visible' : ''}`} onClick={handleOverlayClick}></div>
          <div className="content">
            <div className="boxes-container">
              <AnimatePresence initial={false}>
                {visibleBox === 'box1' && (
                  <motion.div
                    key="box1"
                    className={`box box1 ${fullscreenBox === 'box1' ? 'fullscreen' : ''}`}
                    onClick={() => handleBoxClick('box1')}
                    variants={boxVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(e, { offset, velocity }) => {
                      if (offset.x < -100 || velocity.x < -500) {
                        handleNextClick();
                      } else if (offset.x > 100 || velocity.x > 500) {
                        handlePrevClick();
                      }
                    }}
                  >
                    <h2 className="wah"><span>About</span> Me</h2>
                    <p className="abc1">
                      Hi, I'm Waheed Dahri, a Frontend Developer with a passion for creating beautiful and functional web interfaces. <br />
                      "I am currently pursuing a Bachelor's degree in Computer Science at IQRA University, main campus, Karachi. <br />
                      This is my fourth semester. I enrolled in IQRA University in October 2022."
                    <h2 className="wah"><span>My</span>Skills</h2>
                    "Frontend Developer skilled in HTML, CSS, JavaScript, React.js, and Node.js. Passionate about creating engaging web interfaces and building dynamic web applications. Let's connect and innovate together! Currently working with server-side technologies and aspiring to become a full MERN stack developer. Recently, I have also been working with UX and UI design using Figma."
                    </p>
                    <button className="btn1" onClick={handleResumeClick}>My Resume</button>
                  </motion.div>
                )}
                {visibleBox === 'box2' && (
                  <motion.div
                    key="box2"
                    className={`box box2 ${fullscreenBox === 'box2' ? 'fullscreen' : ''}`}
                    onClick={() => handleBoxClick('box2')}
                    variants={boxVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(e, { offset, velocity }) => {
                      if (offset.x < -100 || velocity.x < -500) {
                        handleNextClick();
                      } else if (offset.x > 100 || velocity.x > 500) {
                        handlePrevClick();
                      }
                    }}
                  >
                    <h2 className="wah"> <span>My</span> Projects</h2>
                    <p className="abc2">
                    "I have created an attractive and dynamic e-commerce website with complete functionality, including a payment method. I also developed a fully animated food website with a unique interface. Additionally, I've built a Tic Tac Toe game with custom logic, a Netflix website, and a Quiz website."
                      <h2 className="wah"><span6>E</span6>xperience</h2>
                      "I have four months of experience as a Certified Frontend Developer at 360XpertSolution Software House. Recently, I interned at Code Alpha and Prodigy Infotech, where I focused on full stack development."<br />
                    </p>
                    <button className="btn1" onClick={handleCertificateClick}>Certificate</button>
                    <button onClick={handleNavigate} className="button" style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
                      <FontAwesomeIcon className='fa-arrow-right' icon={faArrowRight} style={{ height: '20px', color: 'white', marginBottom: '' }} />
                      <span className="tooltip">Next</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
        <button className="nav-button left" onClick={handlePrevClick}>‹</button>
        <button className="nav-button right" onClick={handleNextClick}>›</button>
      </motion.div>
      <audio ref={audioRef} src='/audiomy.mp3' autoPlay />

      <AnimatePresence>
        {showImage && (
          <motion.div 
            className="image1-container"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <img src="./pikmy3.jpeg" alt="Certificate" className="centered-image" />
            <div className="close-button" title='close' onClick={handleCertificateClick}></div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {showResume && (
          <motion.div 
            className="image2-container"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <a href="./pick10.jpg" download>
              <img 
                src="./pick10.jpg" 
                alt="Resume" 
                className="centered-image2" 
                onDoubleClick={handleResumeDoubleClick} 
              />
            </a>
            <div className="close-button1" title='close' onClick={handleResumeClick}></div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatePresence>
  );

};

export default AboutPage;



