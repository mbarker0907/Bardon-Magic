// HeroSection.js
import Link from 'next/link';
import styles from '../styles/landing.module.css';

const HeroSection = () => {
    return (
        <section className={styles.heroSection}>
            <h1>Discover the Mystical Teachings of Franz Bardon</h1>
            <p>Embark on a transformative journey through "Initiation into Hermetics", the very foundation of Hermetic wisdom.</p>
            <Link href="/bio" className={styles.ctaButton}>Begin Your Journey</Link>
        </section>
    );
}

export default HeroSection;
