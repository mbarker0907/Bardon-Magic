import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/globals.css';
import Navbar from '../components/Navbar';

const RitualsAndPractice = () => {
  return (
    <div>
      <Head>
        <title>Rituals and Practice</title>
        <meta name="description" content="Rituals central to the hermetic practice." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.pageTitle}>
        <Navbar />
      </header>

      <div id="container">
        <h1>Rituals in Hermetic Practice</h1>

        <p>The art of ritual is not only an essential facet of the hermetic practice but is also a bridge that connects the practitioner to the vast realms of cosmic consciousness. By engaging in these rituals, an adept doesn't just perform an act; they set forth powerful vibrations that resonate with the universe's fundamental energies.</p>

        <div className={styles.ritualSection}>
          <h2>Hermetic Circle Ritual</h2>
          <p>The Hermetic Circle Ritual is more than a mere ceremonial act. When performed with dedication, this ritual becomes a conduit that brings together the macrocosm and microcosm. While it sets up a protective barrier against intrusive energies, its true purpose is to attune the practitioner's energy to that of the universal forces. This alignment facilitates a smoother flow of cosmic energy, aiding the practitioner in their spiritual endeavors.</p>
        </div>

        <div className={styles.ritualSection}>
          <h2>Rituals of Element Invocation</h2>
          <p>Elemental forces are the building blocks of the universe in hermetic beliefs. Recognizing their significance, hermeticists have designed specific rituals to invoke each element. These rituals are not just about summoning elemental energies but understanding, respecting, and integrating them into one's being:</p>
          <ul>
            <li><strong>Earth:</strong> Symbolizes stability, grounding, and physicality.</li>
            <li><strong>Water:</strong> Represents emotions, intuition, and flow.</li>
            <li><strong>Air:</strong> Embodies intellect, clarity, and communication.</li>
            <li><strong>Fire:</strong> Signifies transformation, willpower, and passion.</li>
            <li><strong>Spirit (Akasha):</strong> Denotes the overarching cosmic consciousness binding all elements.</li>
          </ul>
        </div>

        <div className={styles.ritualSection}>
          <h2>Meditative Rituals</h2>
          <p>Hermeticism understands the transformative power of meditation. Meditative rituals in hermetic practice are journeys deep within the self, aiming to awaken dormant energies and align oneself with the cosmic rhythm. They transcend beyond standard meditation practices by incorporating sacred symbols, mantras, and visualizations. These rituals serve as tools for self-discovery, cosmic attunement, and spiritual elevation.</p>
        </div>

      </div>

      <footer className={styles.footer}>
        <p>© 2023 Initiation into Hermetics. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default RitualsAndPractice;
