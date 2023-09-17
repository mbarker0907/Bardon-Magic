import React, { useEffect } from 'react';
import Particles from 'particles.js';

const EarthParticles = () => {
  useEffect(() => {
    Particles.init({
      selector: '.earth-particles',
      maxParticles: 100,
      color: ['#FFD700'],
      connectParticles: false,
      responsive: [
        {
          breakpoint: 768,
          options: {
            maxParticles: 50,
            color: ['#FFD700'],
            connectParticles: false
          }
        }
      ]
    });
  }, []);

  return <div className="earth-particles"></div>;
};

export default EarthParticles;
