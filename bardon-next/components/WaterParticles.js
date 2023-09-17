import React, { useEffect } from 'react';
import Particles from 'particles.js';

const WaterParticles = () => {
  useEffect(() => {
    Particles.init({
      selector: '.water-particles',
      maxParticles: 100,
      color: ['#32CD32'],
      connectParticles: false,
      responsive: [
        {
          breakpoint: 768,
          options: {
            maxParticles: 50,
            color: ['#32CD32'],
            connectParticles: false
          }
        }
      ]
    });
  }, []);

  return <div className="water-particles"></div>;
};

export default WaterParticles;
