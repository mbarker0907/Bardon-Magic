import React from 'react';
import ElementCard from '../components/ElementCard';  // Adjust the path if necessary
import Navbar from '../components/Navbar';  // Assuming Navbar is a separate component
import styles from '../styles/elements.module.css';  // Assuming you want to use the same styles as the home page, adjust the path if necessary

const Magic = () => {
  return (
      <div>
          {/* Header with Navbar */}
          <header>
              <Navbar />
          </header>

          {/* Main content area */}
          <main className={styles.container}>
              {/* If you have any hero section or intro for this page, include them here */}

              {/* Element Cards */}
              <div className={styles.cardsContainer}> 
    {/* Fire Card */}
    <ElementCard type="fire" title="Fire" description="The element of passion, desire and energy." />

    {/* Water Card */}
    <ElementCard type="water" title="Water" description="The element of emotion, intuition and deep insight." />

    {/* Air Card */}
    <ElementCard type="air" title="Air" description="The element of intellect, logic and communication." />

    {/* Earth Card */}
    <ElementCard type="earth" title="Earth" description="The element of stability, foundation and physical sensation." />

    {/* Akasha Card */}
    <ElementCard type="akasha" title="Akasha" description="The ethereal element representing spirit and space." />
</div>

          </main>

          {/* Footer */}
          <footer className={styles.footer}>
              <p>© 2023 Bardon Magic Web App. All rights reserved.</p>
          </footer>
      </div>
  );
}

export default Magic;
