import React from 'react';
import './App.css';
import studentImage from './student_image.jpg'; // Ensure you have this image in the src folder or adjust the path

const App = () => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <img src={studentImage} alt="Student" style={styles.image} />
        <h1 style={styles.mainHeading}>Web Developer Resume</h1>
      </div>
      <div style={styles.section}>
        <h2 style={styles.sectionHeading}>About Me</h2>
        <p style={styles.text}>Dedicated web developer specializing in React.js with a passion for creating dynamic and responsive web applications. Strong problem-solving skills and a keen eye for detail.</p>
      </div>
      <div style={styles.section}>
        <h2 style={styles.sectionHeading}>Skills</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>React.js</li>
          <li style={styles.listItem}>JavaScript (ES6+)</li>
          <li style={styles.listItem}>HTML5 & CSS3</li>
          <li style={styles.listItem}>RESTful APIs</li>
          <li style={styles.listItem}>Git & GitHub</li>
          <li style={styles.listItem}>Responsive Web Design</li>
        </ul>
      </div>
      <div style={styles.section}>
        <h2 style={styles.sectionHeading}>Projects</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}><strong>Project 1:</strong> Description of the first project, highlighting the technologies used and the functionality.</li>
          <li style={styles.listItem}><strong>Project 2:</strong> Description of the second project, emphasizing the key features and your role in its development.</li>
          <li style={styles.listItem}><strong>Project 3:</strong> Description of the third project, focusing on the challenges faced and how they were overcome.</li>
        </ul>
      </div>
      <div style={styles.section}>
        <h2 style={styles.sectionHeading}>Experience</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}><strong>Internship at XYZ Company:</strong> Description of your role, the tasks you performed, and the skills you developed.</li>
          <li style={styles.listItem}><strong>Freelance Projects:</strong> Details about the freelance projects you have worked on, including client feedback and the technologies used.</li>
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '80%',
    margin: '0 auto',
    backgroundColor: 'black',
    color: 'yellow',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    textAlign: 'center',
    padding: '20px',
  },
  mainHeading: {
    fontSize: '24px',
  },
  image: {
    borderRadius: '50%',
    width: '150px',
    height: '150px',
  },
  section: {
    padding: '20px',
  },
  sectionHeading: {
    fontSize: '18px',
    borderBottom: '2px solid yellow',
    paddingBottom: '10px',
  },
  text: {
    fontSize: '14px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    fontSize: '14px',
    padding: '5px 0',
  },
};

export default App;
