import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Introduction from '../components/Introduction';
import Testimonials from '../components/Testimonials';
import styles from '../styles/globals.css';

const Home = () => {
    return (
        <div>
            <header>
                <Navbar />
            </header>

            <main className={styles.container}>
                <HeroSection />
                <Introduction />
                <Testimonials />
            </main>

            <footer className={styles.footer}>
                <p>© 2023 Bardon Magic Web App. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Home;
