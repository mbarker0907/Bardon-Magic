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
    <ElementCard type="fire" title="Fire" description="Fire represents the principle of activity, transformation, and willpower. In Bardon's teachings, it's not just a physical flame but a symbol of our inner drive, passion, and the spark of our spirit. Mastery over the fire element allows the magician to harness their inner strength, overcome obstacles, and manifest their desires." />

    {/* Water Card */}
    <ElementCard type="water" title="Water" description="Water embodies the principle of fluidity, emotion, and intuition. It's the realm of feelings, dreams, and the subconscious mind. By understanding the water element, the magician learns to navigate their emotions, develop deep intuition, and connect with the astral plane." />

    {/* Air Card */}
    <ElementCard type="air" title="Air" description="Air signifies the realm of the mind, intellect, and communication. It's about thoughts, ideas, and the bridges between people. Mastery over the air element empowers the magician with sharp intellect, clarity of thought, and effective communication skills." />

    {/* Earth Card */}
    <ElementCard type="earth" title="Earth" description="Earth stands for stability, materiality, and grounding. It's the foundation upon which all is built. By connecting with the earth element, the magician learns to stay grounded, manifest their ideas into reality, and understand the physical world's intricacies." />

    {/* Akasha Card */}
    <ElementCard type="akasha" title="Akasha" description="Akasha, or the ether, is the quintessence from which all elements arise. It's the binding force, the cosmic memory, and the space where all potentials exist. By tapping into the Akasha, the magician accesses the universal wisdom, understands past, present, and future, and realizes the interconnectedness of all things." />
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
