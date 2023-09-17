import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/globals.css';
import theoryStyles from '../styles/theory.module.css';
import Navbar from '../components/Navbar';

const Theory = () => {
  return (
    <div className={theoryStyles.pageWrapper}>
      <Head>
        <title>Hermetic Theories by Franz Bardon</title>
        <meta name="description" content="Exploration of the core theories in Franz Bardon's teachings." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={theoryStyles.header}>
        <Navbar />
        <h1 className={theoryStyles.title}>Core Theories of Franz Bardon's Teachings</h1>
      </header>

      <main className={theoryStyles.mainContent}>
        {renderTheory("The Three Planes of Existence", "Bardon describes the universe as segmented into three primary planes: the physical, astral, and mental. Each has distinct laws and attributes, and mastering each plane is pivotal for hermetic mastery.")}
        {renderTheory("The Universal Fluid", "Bardon introduces a universal fluid or energy that is omnipresent. This fluid can be polarized into electric (positive) and magnetic (negative) energies, symbolizing the active and passive forces.")}
        {renderTheory("The Concept of Akasha", "Often termed as the ether, Akasha is seen as the fifth element or quintessence. It acts as the medium for all causality and retains universal memories and wisdom.")}
        {renderTheory("Magical Equilibrium", "A cornerstone of Bardon's teachings, Magical Equilibrium emphasizes the balance of the four elements within oneself. This balance leads to inner harmony and dominion over one's surroundings.")}
      </main>

      <footer className={theoryStyles.footer}>
        <p>© 2023 Initiation into Hermetics. All rights reserved.</p>
      </footer>
    </div>
  );
}

const renderTheory = (title, description) => (
  <section className={theoryStyles.theorySection}>
    <h2>{title}</h2>
    <p>{description}</p>
  </section>
);

export default Theory;
