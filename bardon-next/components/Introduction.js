// Introduction.js
import Link from 'next/link';
import styles from '../styles/landing.module.css';

const Introduction = () => {
    return (
        <section className={styles.introduction}>
            <div className={styles.introText}>
                <h2>Why Franz Bardon?</h2>
                <p>In an age where mysticism and science converge, Bardon's insights offer a profound look into the laws of nature, the cosmos, and the deeper self. Dive deep into practical exercises, rituals, and theories that unlock the secrets of Hermetic science.</p>
                <Link href="/theory" className={styles.ctaButton}>Explore the Theory</Link>
            </div>
        </section>
    );
}

export default Introduction;
