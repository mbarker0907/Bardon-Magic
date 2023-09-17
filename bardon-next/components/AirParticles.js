import React, { useEffect } from 'react';
import Particles from 'particles.js';

const AirParticles = () => {
  useEffect(() => {
    Particles.init({
      selector: '.air-particles',
      maxParticles: 100,
      color: ['#1E90FF'],
      connectParticles: false,
      responsive: [
        {
          breakpoint: 768,
          options: {
            maxParticles: 50,
            color: ['#1E90FF'],
            connectParticles: false
          }
        }
      ]
    });
  }, []);

  return <div className="air-particles"></div>;
};

export default AirParticles;
