import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/globals.css';
import landingStyles from '../styles/landing.module.css';
import Navbar from '../components/Navbar'; // Removed .js for clarity


    const Home = () => {
        return (
            <div>
                <header>
                    <Navbar />
                </header>

            <main className={landingStyles.container}>
                <section className={landingStyles.heroSection}>

                    <h1>Discover the Mystical Teachings of Franz Bardon</h1>
                    <p>Embark on a transformative journey through "Initiation into Hermetics", the very foundation of Hermetic wisdom.</p>
                    <Link href="/bio" className={landingStyles.ctaButton}>Begin Your Journey</Link>

                </section>

                <section className={landingStyles.introduction}>
                    <div className={landingStyles.introText}>
                        <h2>Why Franz Bardon?</h2>
                        <p>
                            In an age where mysticism and science converge, Bardon's insights offer a profound look into the laws of nature, the cosmos, and the deeper self. Dive deep into practical exercises, rituals, and theories that unlock the secrets of Hermetic science.
                        </p>
                        <Link href="/theory" className={landingStyles.ctaButton}>Explore the Theory</Link>
                    </div>
                </section>

                <section className={landingStyles.testimonials}>
                    <h2>What Seekers Say</h2>
                    <blockquote>
                        "Bardon's teachings transformed my understanding of the universe. This platform made it all so accessible."
                        <footer>- A Modern Hermeticist</footer>
                    </blockquote>
                    <Link href="/testimonials" className={landingStyles.ctaButton}>Read More Testimonials</Link>
                </section>
            </main>

            <footer className={styles.footer}>
                <p>© 2023 Bardon Magic Web App. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Home;
