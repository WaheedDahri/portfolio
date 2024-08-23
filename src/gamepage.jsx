// src/GamePage.jsx
import React from 'react';

const GamePage = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <iframe
        src="/game.html"
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="Game Page"
      />
    </div>
  );
};

export default GamePage;
