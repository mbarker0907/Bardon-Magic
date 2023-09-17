import React from 'react';
import Link from 'next/link';
import styles from '../styles/globals.css';
import bioStyles from '../styles/bio.module.css';
import Navbar from '../components/Navbar';

const Biography = () => {
    return (
        <div className={bioStyles.pageWrapper}>
            <Navbar />
            
            <div className={bioStyles.container}>
                <h1 className={bioStyles.title}>Biography of Franz Bardon</h1>

                <div className={bioStyles.bardonImage}>
                    <img src="/franz.jpeg" alt="Franz Bardon" />
                </div>

                <div className={bioStyles.bardonBio}>
                    <p>
                        Franz Bardon (1909 – 1958) was a Czech occultist and healer best known for his three works on Hermeticism: "Initiation into Hermetics", "The Practice of Magical Evocation", and "The Key to the True Quabbalah". He is considered one of the most significant figures in the field of Hermeticism in the 20th century.
                    </p>
                    <p>
                        Born in Katherein near Opava in what was then the Austro-Hungarian Empire, Bardon displayed remarkable spiritual skills from a young age. Throughout his life, he pursued the understanding and mastery of magical practices, leading to his profound teachings and literature.
                    </p>
                    <p>
                        His works, particularly "Initiation into Hermetics", provide practical steps and exercises to attain spiritual realization and mastery over the physical and astral realms. Bardon's legacy continues to inspire occultists and spiritual seekers around the world.
                    </p>
                </div>
            </div>

            <footer className={bioStyles.footer}>
                <p>© 2023 Initiation into Hermetics Web App. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Biography;
