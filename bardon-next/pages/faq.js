import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/globals.css';
import Navbar from '../components/Navbar';

const FAQ = () => {
  return (
    <div>
      <Head>
        <title>FAQ - Initiation into Hermetics</title>
        <meta name="description" content="Frequently Asked Questions about Hermeticism and Bardon's teachings." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.pageTitle}>
        <Navbar />
      </header>

      <div id="container">
        <h1>Frequently Asked Questions</h1>

        <div className={styles.faqSection}>
          <h2>1. What is Hermeticism?</h2>
          <p>Hermeticism is a spiritual, philosophical, and esoteric tradition based on the teachings attributed to Hermes Trismegistus. It emphasizes the interconnectedness of all things and the study of alchemy, astrology, and theurgy.</p>
        </div>

        <div className={styles.faqSection}>
          <h2>2. Who was Franz Bardon?</h2>
          <p>Franz Bardon was a notable 20th-century Hermetic adept, known for his writings on Hermeticism, particularly "Initiation Into Hermetics."</p>
        </div>

        <div className={styles.faqSection}>
          <h2>3. What are the elemental forces in Hermeticism?</h2>
          <p>The elemental forces in Hermeticism are Earth, Water, Air, Fire, and Spirit (or Akasha). These elements are considered fundamental energies that constitute the universe.</p>
        </div>

        <div className={styles.faqSection}>
          <h2>4. What is the purpose of Hermetic rituals?</h2>
          <p>Hermetic rituals are designed to align practitioners with cosmic and elemental forces, aiding in spiritual transformation, protection, and the attainment of knowledge.</p>
        </div>

        <div className={styles.faqSection}>
          <h2>5. Are Hermetic teachings related to religion?</h2>
          <p>While Hermeticism has spiritual aspects, it is not a religion. Instead, it's a philosophical and esoteric tradition that can complement various religious beliefs.</p>
        </div>

        <div className={styles.faqSection}>
          <h2>6. What are the benefits of practicing Hermetic exercises?</h2>
          <p>Practitioners often experience enhanced intuition, self-awareness, spiritual growth, and a deeper understanding of the universe and oneself.</p>
        </div>

        <div className={styles.faqSection}>
          <h2>7. How long does it take to see results from Hermetic practices?</h2>
          <p>Like any spiritual practice, the results vary from individual to individual. Dedication, sincerity, and consistent practice are crucial for progress.</p>
        </div>

        <div className={styles.faqSection}>
          <h2>8. Is Hermeticism related to modern magic practices?</h2>
          <p>Yes, many modern magical systems have roots in or have been influenced by Hermetic principles.</p>
        </div>

        <div className={styles.faqSection}>
          <h2>9. Can anyone learn and practice Hermeticism?</h2>
          <p>Yes, while guidance from knowledgeable sources can be beneficial, anyone with genuine interest and dedication can delve into Hermetic teachings.</p>
        </div>

        <div className={styles.faqSection}>
          <h2>10. Are there any risks involved in practicing Hermetic exercises?</h2>
          <p>As with any deep spiritual or esoteric practice, it's essential to approach Hermetic exercises with respect, understanding, and caution. Incorrect practices can lead to mental and spiritual imbalances.</p>
        </div>

        <div className={styles.faqSection}>
          <h2>11. How are alchemy and Hermeticism connected?</h2>
          <p>Alchemy, which involves the transmutation of base materials into gold or the quest for the philosopher's stone, shares philosophical foundations with Hermeticism. Both emphasize transformation, both externally and internally.</p>
        </div>

        <div className={styles.faqSection}>
          <h2>12. What is the "Emerald Tablet" in Hermeticism?</h2>
          <p>The "Emerald Tablet" is a foundational Hermetic text, often summarized by the phrase "As above, so below." It encapsulates the idea of the macrocosm's reflection in the microcosm.</p>
        </div>

        <div className={styles.faqSection}>
          <h2>13. Can Hermetic principles be applied to daily life?</h2>
          <p>Absolutely. Many practitioners integrate Hermetic wisdom into their daily lives, finding it enhances their understanding of themselves and the world around them.</p>
        </div>

        <div className={styles.faqSection}>
          <h2>14. What's the significance of the term "Initiation" in Hermeticism?</h2>
          <p>Initiation in Hermeticism refers to the process of spiritual awakening and the stages of progressing deeper into esoteric knowledge and self-mastery.</p>
        </div>

        <div className={styles.faqSection}>
          <h2>15. How does Hermeticism view the concept of God or a higher power?</h2>
          <p>In Hermeticism, God is often viewed as "The All" or the infinite force from which everything emanates and to which everything returns. It's a panentheistic perspective where everything exists within this infinite force.</p>
        </div>

      </div>

      <footer className={styles.footer}>
        <p>© 2023 Initiation into Hermetics. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default FAQ;
