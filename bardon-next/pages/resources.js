import React from 'react';
import Link from 'next/link';
import styles from '../styles/globals.css';
import resourceStyles from '../styles/resources.css';  // Assuming you'd create a CSS module for resources
import Navbar from '../components/Navbar';  // Import the Navbar component

const Resources = () => {
    return (
        <div>

            <header className={styles.pageTitle}>
            <Navbar />
            </header>



            <main className={resourceStyles.container}>
                <section className={resourceStyles.intro}>
                    <h1>Essential Resources for the Aspiring Hermeticist</h1>
                    <p>Navigate the rich tapestry of Hermeticism with these invaluable resources.</p>
                </section>

                <section className={resourceStyles.books}>
                    <h2>Foundational Texts</h2>
                    <ul>
                        <li>"The Kybalion" by the Three Initiates</li>
                        <li>"Hermetica" by Brian Copenhaver</li>
                        <li>"The Corpus Hermeticum" by Hermes Trismegistus</li>
                        <li>"The Practice of Magical Evocation" by Franz Bardon</li>
                    </ul>
                </section>

                <section className={resourceStyles.forums}>
                    <h2>Online Communities</h2>
                    <ul>
                        <li><a href="https://www.hermetics.net/">Hermetics.net Forum</a></li>
                        <li><a href="https://www.reddit.com/r/Hermetics/">Reddit's Hermetics Community</a></li>
                    </ul>
                </section>

                <section className={resourceStyles.additionalMaterials}>
                    <h2>Supplementary Materials</h2>
                    <ul>
                        <li><a href="http://www.sacred-texts.com/">Sacred Texts Archive</a></li>
                        <li><a href="https://www.golden-dawn.com/">Golden Dawn's Library</a></li>
                    </ul>
                </section>
            </main>

            <footer className={styles.footer}>
                <p>© 2023 Bardon Magic Web App. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Resources;
