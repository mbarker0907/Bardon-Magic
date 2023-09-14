import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/globals.css';
import Navbar from '../components/Navbar';

const MagicOfTheElements = () => {
  return (
    <div>
      <Head>
        <title>Magic of the Elements</title>
        <meta name="description" content="Franz Bardon's perspective on elemental magic." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.pageTitle}>
        <Navbar />
      </header>

      <div id="container">
        <h1>Magic of the Elements: Bardon's Perspective</h1>

        <div className={styles.elementSection}>
          <h2>Element of Fire</h2>
          <p>The element of Fire represents willpower, transformative energy, and passion. In Bardon's teachings, working with the Fire element facilitates personal transformation and the harnessing of one's will.</p>
        </div>

        <div className={styles.elementSection}>
          <h2>Element of Water</h2>
          <p>Water embodies emotions, intuition, and the flow of life. Engaging with the Water element, a practitioner learns to balance emotions and harness intuition.</p>
        </div>

        <div className={styles.elementSection}>
          <h2>Element of Air</h2>
          <p>Representing the intellect and thoughts, the Air element emphasizes clarity of mind, communication, and intellectual exploration.</p>
        </div>

        <div className={styles.elementSection}>
          <h2>Element of Earth</h2>
          <p>The Earth element stands for stability, physicality, and grounding. Engaging with Earth enables grounding of energies and fortifying the physical body.</p>
        </div>

        <div className={styles.elementSection}>
          <h2>Element of Akasha (Spirit)</h2>
          <p>Often referred to as the "fifth element," Akasha represents the all-encompassing spirit or ether. It is the binding force between the elements and serves as a bridge between the material and spiritual realms.</p>
        </div>

      </div>

      <footer className={styles.footer}>
        <p>© 2023 Initiation into Hermetics. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default MagicOfTheElements;
