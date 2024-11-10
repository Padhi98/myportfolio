import React, { useState, useEffect } from 'react';

const LanternToggle = ({ isDark, onToggle }) => {
  const [isSwinging, setIsSwinging] = useState(false);
  const [onSound] = useState(new Audio('/On Sound.mp3'));
  const [offSound] = useState(new Audio('/Off Sound.mp3'));

  // Preload the audio files
  useEffect(() => {
    onSound.load();
    offSound.load();
  }, []);

  const handleClick = () => {
    setIsSwinging(true);
    
    // Play the appropriate sound based on the current state
    // When isDark is true, we're turning it off, and vice versa
    if (isDark) {
      offSound.currentTime = 0; // Reset audio to start
      offSound.play();
    } else {
      onSound.currentTime = 0; // Reset audio to start
      onSound.play();
    }
    
    onToggle();
    
    setTimeout(() => {
      setIsSwinging(false);
    }, 1000);
  };

  return (
    <div 
      className="fixed top-0 right-8 z-50 cursor-pointer select-none"
      onClick={handleClick}
    >
      {/* Ceiling Mount - static part */}
      <div className="w-6 h-2 bg-gray-600 rounded-b-lg mx-auto" />
      
      {/* Swinging Container - set transform origin to top center */}
      <div className={`relative origin-top ${isSwinging ? 'animate-swing' : ''}`} 
           style={{ transformBox: 'fill-box', transformOrigin: 'top center' }}>
        {/* Long Cord with Pull Switch */}
        <div className="relative w-0.5 h-32 bg-gradient-to-b from-gray-400 to-gray-600 mx-auto">
          {/* Pull Switch */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 
            w-3 h-5 bg-gray-700 rounded-full
            before:content-[''] before:absolute before:top-full before:left-1/2 
            before:transform before:-translate-x-1/2 before:w-1.5 before:h-3 
            before:bg-gray-800 before:rounded-b-sm" />
        </div>

        {/* Lantern Body */}
        <div className={`relative w-10 h-16 ${isDark ? 'bg-yellow-500' : 'bg-gray-300'} 
          rounded-lg transition-colors duration-300 shadow-lg
          ${isDark ? 'shadow-yellow-200/50' : ''}`}>
          
          {/* Lantern Top */}
          <div className={`absolute -top-2 left-1/2 transform -translate-x-1/2 
            w-8 h-3 ${isDark ? 'bg-yellow-600' : 'bg-gray-400'} rounded-t-lg`} />
          
          {/* Light Effect */}
          <div className={`absolute inset-0 rounded-lg ${isDark ? 'animate-pulse' : ''} 
            ${isDark ? 'bg-yellow-400 opacity-50' : 'bg-transparent'}`}>
            
            {/* Light Rays when lit */}
            {isDark && (
              <div className="absolute -inset-4 bg-yellow-200/20 rounded-full blur-xl animate-glow" />
            )}
          </div>
          {/* Glass Effect */}
          <div className="absolute inset-2 bg-white/10 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default LanternToggle;