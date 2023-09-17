import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/globals.css';
import exerciseStyles from '../styles/exercises.module.css'; // Import the new module
import Navbar from '../components/Navbar';

const Exercises = () => {
  return (
    <div className={exerciseStyles.pageWrapper}>
      <Head>
        <title>Hermetic Exercises by Franz Bardon</title>
        <meta name="description" content="An overview of the practical exercises in Franz Bardon's teachings." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={exerciseStyles.header}>
        <Navbar />
        <h1>Practical Exercises in Franz Bardon's Teachings</h1>
      </header>

      <div className={exerciseStyles.container}>
        <div className={exerciseStyles.exerciseSection}>
          <h2>Concentration Exercises</h2>
          <p>Exercises designed to strengthen one's ability to focus the mind on a single point or object, a foundational skill in hermetic practice.</p>
        </div>

        <div className={exerciseStyles.exerciseSection}>
          <h2>Visualization Practices</h2>
          <p>Developing the ability to create, hold, and manipulate mental images. This skill is crucial for many advanced hermetic workings.</p>
        </div>

        <div className={exerciseStyles.exerciseSection}>
          <h2>Breathing Techniques</h2>
          <p>Learning to control and harness the breath, which is a vehicle for vital energy or prana, and is used in many magical operations.</p>
        </div>

        <div className={exerciseStyles.exerciseSection}>
          <h2>Elemental Balancing</h2>
          <p>Exercises related to understanding, invoking, and harmonizing with the elemental forces of Fire, Water, Air, and Earth.</p>
        </div>

        <div className={exerciseStyles.exerciseSection}>
          <h2>Astral Travel</h2>
          <p>Techniques to induce conscious astral projection, allowing the practitioner to explore the astral plane and its many realms.</p>
        </div>
      </div>

      <footer className={exerciseStyles.footer}>
        <p>© 2023 Initiation into Hermetics. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Exercises;
