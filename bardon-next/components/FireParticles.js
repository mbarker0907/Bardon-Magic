import React, { useEffect } from 'react';

const FireParticles = () => {
  useEffect(() => {
    particlesJS.load('fire-particles', '/path_to_fire_particles_config.json', function() {
      console.log('Fire particles loaded');
    });
  }, []);

  return (
    <div id="fire-particles" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}></div>
  );
}

export default FireParticles;
