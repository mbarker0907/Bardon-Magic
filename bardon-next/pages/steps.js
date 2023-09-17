import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/globals.css';
import StepStyles from '../styles/steps.module.css';
import Navbar from '../components/Navbar';

const Steps = () => {
  return (
    <div>
      <Head>
        <title>Steps of Initiation</title>
        <meta name="description" content="Detailed steps of initiation into hermetics." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.pageTitle}>
        <Navbar />
      </header>

      <div className={StepStyles.container}>
        <h1>Steps of Initiation</h1>
        
        <div className={StepStyles.step}>
          <h2>Step 1: Thought Control and Discipline</h2>
          <p>Introduction to the importance of mastering one's own thoughts and achieving a level of mental discipline.</p>
        </div>
        
        <div className={StepStyles.step}>
          <h2>Step 2: Initiation into Visualization</h2>
          <p>Guidelines and techniques to develop the ability of focused visualization and imagination.</p>
        </div>

        <div className={StepStyles.step}>
          <h2>Step 3: The Magic of the Word</h2>
          <p>Exploring the power and impact of words, both internally and externally.</p>
        </div>

        <div className={StepStyles.step}>
            <h2>Step 4: Elemental Equilibrium</h2>
            <p>A deep dive into understanding and harmonizing the four elemental forces within the practitioner: Fire, Water, Air, and Earth.</p>
        </div>

        <div className={StepStyles.step}>
            <h2>Step 5: Soul (Astral) Mirror</h2>
            <p>An introspective exercise in which the practitioner creates an inventory of their virtues and vices.</p>
        </div>

        <div className={StepStyles.step}>
            <h2>Step 6: Astral Projection</h2>
            <p>Techniques and guidelines to achieve conscious out-of-body experiences.</p>
        </div>

        <div className={StepStyles.step}>
            <h2>Step 7: The Magic Psychic Training of the Soul (Astral Body)</h2>
            <p>Development of the faculties of the astral body, such as clairvoyance, clairaudience, and clairsentience.</p>
        </div>

        <div className={StepStyles.step}>
            <h2>Step 8: The Magic Physical Training of the Body</h2>
            <p>Techniques and exercises related to the physical body, including rituals for protection.</p>
        </div>

        <div className={StepStyles.step}>
            <h2>Step 9: Passive Communication with the Spirit World</h2>
            <p>Introducing methods for communing with spiritual beings.</p>
        </div>
        
        <div className={StepStyles.step}>
          <h2>Step 10: Communication with the Higher Self</h2>
          <p>Understanding the concept of the "Higher Self" and methods to establish a connection and communication with this elevated consciousness.</p>
        </div>
      </div>

      <footer className={StepStyles.footer}>
    <p>© 2023 Initiation into Hermetics. All rights reserved.</p>
</footer>

    </div>
  );
}

export default Steps;
