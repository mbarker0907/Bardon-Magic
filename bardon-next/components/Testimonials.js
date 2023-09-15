// Testimonials.js
import Link from 'next/link';
import styles from '../styles/landing.module.css';

const Testimonials = () => {
    return (
        <section className={styles.testimonials}>
            <h2>What Seekers Say</h2>
            <blockquote>
                "Bardon's teachings transformed my understanding of the universe. This platform made it all so accessible."
                <footer>- A Modern Hermeticist</footer>
            </blockquote>
            <Link href="/testimonials" className={styles.ctaButton}>Read More Testimonials</Link>
        </section>
    );
}

export default Testimonials;
