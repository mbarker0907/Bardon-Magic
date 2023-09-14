import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/globals.css';
import Navbar from '../components/Navbar';

const Theory = () => {
  return (
    <div>
      <Head>
        <title>Hermetic Theories by Franz Bardon</title>
        <meta name="description" content="Detailed exploration of the foundational theories according to Franz Bardon's teachings." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.pageTitle}>
        <Navbar />
      </header>

      <div id="container">
        <h1>Foundational Theories of Franz Bardon's Teachings</h1>

        <div className={styles.theorySection}>
          <h2>The Three Planes of Existence</h2>
          <p>According to Bardon, the universe is divided into three primary planes: the physical, astral, and mental. Each plane has its own laws and characteristics, and mastering each is a step towards hermetic mastery.</p>
        </div>

        <div className={styles.theorySection}>
          <h2>The Universal Fluid</h2>
          <p>This theory posits the existence of a universal fluid or energy that permeates everything. This fluid can be polarized into electric (positive) and magnetic (negative) fluids, representing active and passive forces, respectively.</p>
        </div>

        <div className={styles.theorySection}>
          <h2>The Concept of Akasha</h2>
          <p>Akasha, often referred to as the ether, is considered the fifth element or quintessence. It serves as the medium of all causes and effects, storing universal memories and knowledge.</p>
        </div>

        <div className={styles.theorySection}>
          <h2>Magical Equilibrium</h2>
          <p>One of the cornerstones of Bardon's teachings, Magical Equilibrium is about balancing the four elements within oneself, leading to inner harmony and mastery over one's environment.</p>
        </div>
      </div>

      <footer className={styles.footer}>
        <p>© 2023 Initiation into Hermetics. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Theory;
