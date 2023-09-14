import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/globals.css';
import Navbar from '../components/Navbar';  // Import the Navbar component



function Glossary() {
    return (
        <>
            <Head>
                <title>Glossary - Initiation into Hermetics</title>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="/styles/global.css" />
                <link rel="stylesheet" href="/glossary.css" />
            </Head>

            <header className={styles.pageTitle}>
            <Navbar />
            </header>


            

            <div id="container">
                <h1>Glossary for Initiation into Hermetics</h1>
                <p>This glossary is a compilation of terms and concepts essential for understanding the principles of Hermeticism as presented in "Initiation into Hermetics".</p>

                <h2>Akasha</h2>
                <p>The fifth element, often referred to as the ether or spirit. It is the underlying essence from which the other four elements spring.</p>

                <h2>Elemental Forces</h2>
                <p>The basic energies of nature: Earth, Water, Air, Fire, and Akasha. Each has its own qualities, attributes, and influences.</p>

                <h2>Kabbalah</h2>
                <p>A mystical and symbolic framework for understanding the universe, often integrated with hermetic practices.</p>

                <h2>Mercury Principle</h2>
                <p>In alchemical thought, one of the three foundational principles. Represents fluidity, adaptability, and the connection between the divine and the material.</p>

                {/* More glossary entries can be added similarly */}
            </div>

            <footer>
                <p>&copy; 2023 Initiation into Hermetics. All Rights Reserved.</p>
            </footer>
        </>
    );
}

export default Glossary;
