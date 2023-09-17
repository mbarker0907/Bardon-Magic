import React, { useEffect } from 'react';
import Particles from 'particles.js';

const AkashaParticles = () => {
  useEffect(() => {
    Particles.init({
      selector: '.akasha-particles',
      maxParticles: 100,
      color: ['#8B008B'],
      connectParticles: false,
      responsive: [
        {
          breakpoint: 768,
          options: {
            maxParticles: 50,
            color: ['#8B008B'],
            connectParticles: false
          }
        }
      ]
    });
  }, []);

  return <div className="akasha-particles"></div>;
};

export default AkashaParticles;
