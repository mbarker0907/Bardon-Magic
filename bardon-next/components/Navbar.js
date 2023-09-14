import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const isDefaultVisible = () => {
        if (typeof window !== 'undefined') {
            return window.innerWidth > 768;
        }
        return false;
    };

    const [navVisible, setNavVisible] = useState(isDefaultVisible());

    useEffect(() => {
        const handleResize = () => {
            setNavVisible(isDefaultVisible());
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {navVisible && (
                <button 
                    className="hamburger" 
                    aria-label="Close Navigation"
                    onClick={() => setNavVisible(!navVisible)}>
                    &#9776; {/* This is the Unicode character for the close (x) icon */}
                </button>
            )}
            {!navVisible && (
                <button 
                    className="hamburger" 
                    aria-label="Toggle Navigation"
                    onClick={() => setNavVisible(!navVisible)}>
                    &#9776; {/* This is the Unicode character for the hamburger icon */}
                </button>
            )}
            {navVisible && (
                <nav>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/bio">Biography</Link></li>
                        <li><Link href="/steps">Steps</Link></li>
                        <li><Link href="/theory">Theory</Link></li>
                        <li><Link href="/exercises">Exercises</Link></li>
                        <li><Link href="/magic">Magic of the Elements</Link></li>
                        <li><Link href="/rituals">Rituals & Practice</Link></li>
                        <li><Link href="/glossary">Glossary</Link></li>
                        <li><Link href="/resources">Resources</Link></li>
                        <li><Link href="/faq">FAQ</Link></li>
                        <li><Link href="/testimonials">Testimonials & Experiences</Link></li>
                    </ul>
                </nav>
            )}
        </>
    );
};

export default Navbar;
