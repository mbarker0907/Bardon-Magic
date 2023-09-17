// ParticlesBackground.js
import React, { useEffect } from 'react';
import Particles from 'particles.js';

const ParticlesBackground = () => {
  useEffect(() => {
    Particles.init({
      selector: '.particles',
      maxParticles: 200,
      // other options...
    });
  }, []);

  return <div className="particles"></div>;
};

export default ParticlesBackground;
