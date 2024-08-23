// import React from 'react';

// const SettingsMenu = ({ onChangeProfileImage, onRewriteContent, onChangeBackgroundVideo, onSetBackgroundImage }) => {
//   return (
//     <div className="settings-menu">
//       <ul>
//         <li onClick={onChangeProfileImage}>Change Profile Image</li>
//         <li onClick={onRewriteContent}>Rewrite Content</li>
//         <li onClick={onChangeBackgroundVideo}>Change Background Video</li>
//         <li onClick={onSetBackgroundImage}>Set Background Image</li>
//       </ul>
//     </div>
//   );
// };

// export default SettingsMenu;

import React from 'react';

const SettingsMenu = ({ 
  onChangeProfileImage, 
  onRewriteContent, 
  onChangeBackgroundVideo, 
  onChangeBackgroundaudio, 
  onSetBackgroundImage, 
  onDeleteBackgroundVideo,
  onSaveBackgroundVideo 
}) => {
  return (
    <div className="settings-menu">
      <ul>
        <li onClick={onChangeProfileImage}>Change Profile Image</li>
        <li onClick={onRewriteContent}>Rewrite Content</li>
        <li onClick={onChangeBackgroundVideo}>Change Background Video</li>
        <li onClick={onSaveBackgroundVideo}>Save Background audio</li>
        <li onClick={onSetBackgroundImage}>Set Background Image</li>
        <li onClick={onDeleteBackgroundVideo}>Delete Background Video</li>
        <li onClick={onSaveBackgroundVideo}>Save Background Video</li>
      </ul>
    </div>
    
  );
};

export default SettingsMenu;

