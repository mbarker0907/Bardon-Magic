import React from 'react';
import Link from 'next/link';
import styles from '../styles/globals.css';
import testimonialStyles from '../styles/testimonials.css'; // Assuming you'll have a specific stylesheet for testimonials.
import Navbar from '../components/Navbar';  // Import the Navbar component

const testimonialsData = [
    {
        quote: "Bardon's teachings transformed my understanding of the universe. This platform made it all so accessible.",
        author: "A Modern Hermeticist"
    },
    {
        quote: "Through Bardon's guidance, I found a deeper connection to the natural world and my own inner spirit.",
        author: "A Mystic Practitioner"
    },
    // Add more testimonials as needed...
];

const Testimonials = () => {
    return (
        <div>

            <header className={styles.pageTitle}>
            <Navbar />
            </header>

            

            <main className={testimonialStyles.container}>
                <section className={testimonialStyles.introSection}>
                    <h1>What Seekers Say</h1>
                    <p>Read the experiences of those who embarked on the journey of Hermetic wisdom with Franz Bardon's teachings.</p>
                </section>

                <section className={testimonialStyles.testimonialsList}>
                    {testimonialsData.map((testimonial, index) => (
                        <blockquote key={index} className={testimonialStyles.testimonial}>
                            "{testimonial.quote}"
                            <footer>- {testimonial.author}</footer>
                        </blockquote>
                    ))}
                </section>
            </main>

            <footer className={styles.footer}>
                <p>© 2023 Bardon Magic Web App. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Testimonials;
