import React, { useState, useEffect, useRef } from 'react';

const LanternToggle = ({ isDark, onToggle }) => {
  const [isSwinging, setIsSwinging] = useState(false);
  const [intensity, setIntensity] = useState(1);
  const intensityRef = useRef(1);
  const [onSound] = useState(new Audio('/On Sound.mp3'));
  const [offSound] = useState(new Audio('/Off Sound.mp3'));
  const frameRef = useRef();
  
  useEffect(() => {
    const loadAudio = async () => {
      try {
        await Promise.all([
          onSound.load(),
          offSound.load()
        ]);
      } catch (error) {
        console.error('Error loading audio files:', error);
      }
    };
    
    loadAudio();
    
    return () => {
      onSound.pause();
      offSound.pause();
      onSound.currentTime = 0;
      offSound.currentTime = 0;
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  useEffect(() => {
    const animate = () => {
      if (isDark) {
        intensityRef.current = 0.96 + Math.random() * 0.08;
        setIntensity(intensityRef.current);
      }
      frameRef.current = requestAnimationFrame(animate);
    };

    if (isDark) {
      animate();
    } else {
      setIntensity(1);
      cancelAnimationFrame(frameRef.current);
    }

    return () => cancelAnimationFrame(frameRef.current);
  }, [isDark]);

  const handleClick = () => {
    setIsSwinging(true);
    
    try {
      if (isDark) {
        offSound.currentTime = 0;
        offSound.play().catch(e => console.error('Error playing off sound:', e));
      } else {
        onSound.currentTime = 0;
        onSound.play().catch(e => console.error('Error playing on sound:', e));
      }
    } catch (error) {
      console.error('Error playing audio:', error);
    }
    
    onToggle();
    
    setTimeout(() => {
      setIsSwinging(false);
    }, 2000);
  };

  return (
    <div 
      className="fixed top-0 right-8 z-50 cursor-pointer select-none"
      onClick={handleClick}
    >
      {/* Ceiling Mount */}
      <div className="w-4 h-1.5 bg-gradient-to-b from-gray-700 to-gray-600 rounded-b mx-auto" />
      
      {/* Cord Container */}
      <div 
        className={`relative origin-top ${isSwinging ? 'animate-swing' : 'animate-sway'}`}
        style={{ transformBox: 'fill-box', transformOrigin: 'top center' }}
      >
        {/* Minimal Cord */}
        <div className="relative mx-auto" style={{ height: '100px' }}>
          <div className="absolute left-1/2 w-[1px] h-full bg-gradient-to-b from-gray-500 to-gray-600 transform -translate-x-1/2">
            {/* Subtle cord details */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-500 via-gray-400 to-gray-500 opacity-20"></div>
          </div>
          
          {/* Pull Switch */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 
            w-2 h-4 bg-gradient-to-b from-gray-600 to-gray-800 rounded-full shadow
            before:content-[''] before:absolute before:top-full before:left-1/2 
            before:transform before:-translate-x-1/2 before:w-1 before:h-2 
            before:bg-gradient-to-b before:from-gray-700 before:to-gray-900 before:rounded-b-sm">
            <div className="absolute inset-x-0 top-1 h-1/2 bg-gradient-to-r from-gray-500 via-gray-400 to-gray-500 rounded-full opacity-30"></div>
          </div>
        </div>

        {/* Lantern Body */}
        <div 
          className={`relative w-8 h-12 ${isDark ? 'bg-yellow-500' : 'bg-gray-300'} 
            rounded transition-colors duration-300 shadow-lg
            ${isDark ? 'animate-flicker shadow-yellow-200/50' : ''}`}
          style={{
            filter: isDark ? `brightness(${intensity * 100}%)` : 'none',
          }}
        >
          {/* Lantern Top */}
          <div 
            className={`absolute -top-1.5 left-1/2 transform -translate-x-1/2 
              w-6 h-2 ${isDark ? 'bg-yellow-600' : 'bg-gray-400'} rounded-t
              shadow-sm transition-colors duration-300`}
          />
          
          {/* Light Effect */}
          <div 
            className={`absolute inset-0 rounded
              ${isDark ? 'bg-gradient-to-b from-yellow-400 via-yellow-500 to-yellow-600 opacity-90' : 'bg-transparent'}`}
          >
            {/* Dynamic Light Rays */}
            {isDark && (
              <>
                <div className="absolute -inset-3 bg-yellow-200/20 rounded-full blur-lg animate-glow" />
                <div className="absolute -inset-6 bg-yellow-100/10 rounded-full blur-xl" 
                  style={{
                    opacity: intensity * 0.3,
                    transform: `scale(${1 + (1 - intensity) * 0.1})`,
                  }}
                />
              </>
            )}
          </div>
          
          {/* Glass Effect */}
          <div className="absolute inset-1 bg-gradient-to-b from-white/20 via-white/10 to-transparent rounded">
            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent rounded-t"></div>
          </div>

          {/* Metal Frame Details */}
          <div className="absolute inset-x-0 top-0 h-full">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-400/20 to-transparent"></div>
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gray-400/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanternToggle;