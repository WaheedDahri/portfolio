
// import React, { useEffect, useState, useRef } from 'react';
// import { motion } from 'framer-motion';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight, faCog } from '@fortawesome/free-solid-svg-icons';
// import { useNavigate } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import './App.css';
// import ContactPage from './ContactPage';
// import SettingsMenu from './settingmenu';
// import threeboxes from './threeboxes';

// const HomePage = () => {
//   const initialProfileImageUrls = [
//     '/picmy.jpg',
//     '/picmy1.jpg',
//     '/picmy.jpg',
//   ];

//   const backgroundVideoUrls = [
//     'https://videos.pexels.com/video-files/5636815/5636815-hd_1280_720_59fps.mp4' 
//   ];

//   const [profileImageUrls, setProfileImageUrls] = useState(initialProfileImageUrls);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
//   const [selectedColor, setSelectedColor] = useState('#3efa05');
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [showContact, setShowContact] = useState(false);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [showSettings, setShowSettings] = useState(false);
//   const [userImageUrl, setUserImageUrl] = useState(null);
//   const [userVideoUrl, setUserVideoUrl] = useState(null);

//   const navigate = useNavigate();
//   const audioRef = useRef(null); // Create a reference for the audio element

//   useEffect(() => {
//     const handleMouseMove = (event) => {
//       setMousePosition({ x: event.clientX, y: event.clientY });
//     };

//     const imageIntervalId = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % profileImageUrls.length);
//       setSelectedColor((prevColor) => (prevColor === '#3efa05' ? 'rgb(255, 123, 0)' : 'grey'));
//     }, 4000);

//     const videoIntervalId = setInterval(() => {
//       setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % backgroundVideoUrls.length);
//     }, 4000);

//     window.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       clearInterval(imageIntervalId);
//       clearInterval(videoIntervalId);
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, [profileImageUrls, backgroundVideoUrls]);

//   useEffect(() => {
//     // Play the audio when the component mounts
//     if (audioRef.current) {
//       audioRef.current.play();
//     }
//   }, []);

//   const handleNavigate = () => {
//     setIsAnimating(true);
//     setTimeout(() => {
//       navigate('/about');
//     }, 500); // Duration of the slide animation
//   };

//   const handleChangeProfileImage = () => {
//     const input = document.createElement('input');
//     input.type = 'file';
//     input.accept = 'image/*';
//     input.onchange = (event) => {
//       const file = event.target.files[0];
//       if (file) {
//         const reader = new FileReader();
//         reader.onload = (e) => {
//           const newImageUrl = e.target.result;
//           setUserImageUrl(newImageUrl);
//         };
//         reader.readAsDataURL(file);
//       }
//     };
//     input.click();
//   };

//   const handleRewriteContent = () => {
//     // Logic to rewrite content
//     console.log("Content rewritten");
//   };

//   const handleChangeBackgroundVideo = () => {
//     const input = document.createElement('input');
//     input.type = 'file';
//     input.accept = 'video/*';
//     input.onchange = (event) => {
//       const file = event.target.files[0];
//       if (file) {
//         const reader = new FileReader();
//         reader.onload = (e) => {
//           const newVideoUrl = e.target.result;
//           console.log('New video URL:', newVideoUrl); // Debugging
//           setUserVideoUrl(newVideoUrl);
//           const backgroundVideo = document.querySelector('.background-video');
//           if (backgroundVideo) {
//             backgroundVideo.load(); // Try loading the new video
//             backgroundVideo.play(); // Play the new video
//           } else {
//             console.error('Background video element not found.');
//           }
//         };
//         reader.onerror = (error) => {
//           console.error('Error reading file:', error);
//         };
//         reader.readAsDataURL(file);
//       }
//     };
//     input.click();
//   };

//   const handleSetBackgroundImage = () => {
//     // Logic to set background image
//     console.log("Background image set");
//   };

//   return (
//     <div className={`homepage-container ${isAnimating ? 'slide-out' : ''}`}>
//       <div className="settings-icon" onClick={() => setShowSettings(!showSettings)}>
//         <FontAwesomeIcon icon={faCog} />
//       </div>
//       {showSettings && (
//         <SettingsMenu
//           onChangeProfileImage={handleChangeProfileImage}
//           onRewriteContent={handleRewriteContent}
//           onChangeBackgroundVideo={handleChangeBackgroundVideo}
//           onSetBackgroundImage={handleSetBackgroundImage}
//         />
//       )}
//       <div
//         className="custom-cursor"
//         style={{
//           left: `${mousePosition.x}px`,
//           top: `${mousePosition.y}px`,
//           backgroundColor: selectedColor,
//           boxShadow: `0 4px 8px ${selectedColor === '#3efa05' ? ' rgb(255, 123, 0)' : 'rgba(255, 255, 0, 0.3)'}`,
//         }}
//       ></div>
//       <video autoPlay loop muted className="background-video">
//         <source src={userVideoUrl || backgroundVideoUrls[currentVideoIndex]} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <div className="net-background"></div> {/* Net background element */}
//       <audio ref={audioRef} src='/audiomy.mp3' autoPlay /> {/* Add your audio file path */}
//       <div className={`content-wrapper ${showContact ? 'blurred-background' : ''}`}>
//         <motion.div
//           className="image-container"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 2 }}
//           key={userImageUrl || currentImageIndex}
//           whileHover={{ scale: 1.1 }}
//           drag
//         >
//           <motion.img
//             src={userImageUrl || profileImageUrls[currentImageIndex]}
//             alt="Profile"
//             className="profile-image"
//             drag
//             style={{ borderColor: selectedColor }}
//           />
//         </motion.div>
//         <motion.div
//           className="text-container"
//           initial={{ y: -50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 1, duration: 1.5 }}
//           whileHover={{ scale: 1.1 }}
//           drag
//         >
//           <h1>Welcome to My Portfolio</h1>
//           <motion.h2
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1.5, duration: 1.5 }}
//           >
//             {`I am a Passionate `}
//             <span style={{ color: selectedColor }}>Frontend Developer</span> Waheed Dahri
//           </motion.h2>
//           <p className='p2'>
//             Passionate about creating engaging web interfaces and building <br /> dynamic web applications. Let's connect and innovate together.
//           </p>
//           <button
//             className="button1"
//             style={{ backgroundColor: selectedColor }}
//             onClick={() => {
//               setShowContact(!showContact);
//             }}
//           >
//             {showContact ? 'Hide Contact' : 'Contact Info'}
//           </button>
//           <button onClick={handleNavigate} className="button" style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
//             <FontAwesomeIcon className='fa-arrow-right' icon={faArrowRight} style={{ height: '20px', color: 'white' }} />
//             <span className="tooltip">Next</span>
//           </button>
//         </motion.div>
//         {showContact && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: showContact ? 1 : 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <ContactPage onBack={() => setShowContact(false)} />
//           </motion.div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HomePage;

import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCog } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import ContactPage from './ContactPage';
import SettingsMenu from './settingmenu';

const HomePage = () => {
  const initialProfileImageUrls = [
    '/picmy.jpg',
    '/picmy1.jpg',
    '/picmy.jpg',
  ];

  const backgroundVideoUrls = [
    'https://videos.pexels.com/video-files/5636815/5636815-hd_1280_720_59fps.mp4'
  ];

  const [profileImageUrls, setProfileImageUrls] = useState(initialProfileImageUrls);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState('#3efa05');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showContact, setShowContact] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [userImageUrl, setUserImageUrl] = useState(null);
  const [userVideoUrl, setUserVideoUrl] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();
  const audioRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    const imageIntervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % profileImageUrls.length);
      setSelectedColor((prevColor) => (prevColor === '#3efa05' ? 'rgb(255, 123, 0)' : 'grey'));
    }, 4000);

    const videoIntervalId = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % backgroundVideoUrls.length);
    }, 4000);

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearInterval(imageIntervalId);
      clearInterval(videoIntervalId);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [profileImageUrls, backgroundVideoUrls]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, []);

  const handleNavigate = () => {
    setIsAnimating(true);
    setTimeout(() => {
      navigate('/about');
    }, 500);
  };

  const handleChangeProfileImage = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = async (event) => {
      const file = event.target.files[0];
      if (file) {
        const formData = new FormData();
        formData.append('file', file);

        try {
          const res = await axios.post('http://localhost:5000/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          setUserImageUrl(res.data.filePath);
          setErrorMessage('');
        } catch (err) {
          console.error('Error uploading image:', err.response ? err.response.data : err.message);
          setErrorMessage('Error uploading image. Please try again.');
        }
      }
    };
    input.click();
  };

  const handleChangeBackgroundVideo = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'video/*';
    input.onchange = async (event) => {
      const file = event.target.files[0];
      if (file) {
        const formData = new FormData();
        formData.append('file', file);

        try {
          const res = await axios.post('http://localhost:5000/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          setUserVideoUrl(res.data.filePath);
          setErrorMessage('');
        } catch (err) {
          console.error('Error uploading video:', err.response ? err.response.data : err.message);
          setErrorMessage('Error uploading video. Please try again.');
        }
      }
    };
    input.click();
  };

  return (
    <div className={`homepage-container ${isAnimating ? 'slide-out' : ''}`}>
      <div className="settings-icon" onClick={() => setShowSettings(!showSettings)}>
        <FontAwesomeIcon icon={faCog} />
      </div>
      {showSettings && (
        <SettingsMenu
          onChangeProfileImage={handleChangeProfileImage}
          onRewriteContent={() => console.log("Content rewritten")}
          onChangeBackgroundVideo={handleChangeBackgroundVideo}
          onSetBackgroundImage={() => console.log("Background image set")}
        />
      )}
      <div
        className="custom-cursor"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          backgroundColor: selectedColor,
          boxShadow: `0 4px 8px ${selectedColor === '#3efa05' ? ' rgb(255, 123, 0)' : 'rgba(255, 255, 0, 0.3)'}`,
        }}
      ></div>
      <video autoPlay loop muted className="background-video">
        <source src={userVideoUrl || backgroundVideoUrls[currentVideoIndex]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="net-background"></div>
      <audio ref={audioRef} src='/audiomy.mp3' autoPlay />
      <div className={`content-wrapper ${showContact ? 'blurred-background' : ''}`}>
        <motion.div
          className="image-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          key={userImageUrl || currentImageIndex}
          whileHover={{ scale: 1.1 }}
          drag
        >
          <motion.img
            src={userImageUrl || profileImageUrls[currentImageIndex]}
            alt="Profile"
            className="profile-image"
            drag
            style={{ borderColor: selectedColor }}
          />
        </motion.div>
        <motion.div
          className="text-container"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
          whileHover={{ scale: 1.1 }}
          drag
        >
          <h1>Welcome to My Portfolio</h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1.5 }}
          >
            {`I am a Passionate `}
            <span style={{ color: selectedColor }}>Frontend Developer</span> Waheed Dahri
          </motion.h2>
          <p className='p2'>
            Passionate about creating engaging web interfaces and building <br /> dynamic web applications. Let's connect and innovate together.
          </p>
          <button
            className="button1"
            style={{ backgroundColor: selectedColor }}
            onClick={() => setShowContact(!showContact)}
          >
            {showContact ? 'Hide Contact' : 'Contact Info'}
          </button>
          <button onClick={handleNavigate} className="button" style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
            <FontAwesomeIcon className='fa-arrow-right' icon={faArrowRight} style={{ height: '20px', color: 'white' }} />
            <span className="tooltip">Next</span>
          </button>
        </motion.div>
        {showContact && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showContact ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <ContactPage onBack={() => setShowContact(false)} />
          </motion.div>
        )}
        {errorMessage && (
          <div className="error-message">
            {errorMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
















































