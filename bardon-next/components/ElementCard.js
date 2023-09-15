import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styles from '../styles/elements.module.css';

const ElementCard = ({ title, description, type }) => {
  const [flipped, setFlipped] = useState(false);

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <div className={`${styles.cardContainer} ${styles[type]}`} onClick={() => setFlipped(!flipped)}>
      {/* Card Front */}
      <animated.div 
        className={`${styles.cardFace} ${styles.cardFront}`}
        style={{ 
          opacity: opacity.to(o => 1 - o),
          transform
        }}
      >
        <h2>{title}</h2>
      </animated.div>

      {/* Card Back */}
      <animated.div 
        className={`${styles.cardFace} ${styles.cardBack}`}
        style={{
          opacity,
          transform: transform.to(t => `${t} rotateX(180deg)`)
        }}
      >
        <p>{description}</p>
      </animated.div>
    </div>
  );
}

export default ElementCard;
