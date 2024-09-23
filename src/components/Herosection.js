import React from 'react';
import hero from './assets/hero.png'
const HeroSection = () => {
    return (
        <section style={styles.heroSection}>
            <div style={styles.heroContent}>
                <h1 style={styles.heading}>Create and sell custom products</h1>
                <ul style={styles.benefits}>
                    <li style={styles.benefitItem}><span style={styles.checkmark}>✔</span> 100% Free to use</li>
                    <li style={styles.benefitItem}><span style={styles.checkmark}>✔</span> 900+ High-Quality Products</li>
                    <li style={styles.benefitItem}><span style={styles.checkmark}>✔</span> Largest global print network</li>
                </ul>
                <div style={styles.ctaButtons}>
                    <button style={styles.startFreeButton}>Start for free</button>
                    <button style={styles.howItWorksButton}>How it works?</button>
                </div>
                <p style={styles.trustedText}>Trusted by over 8M sellers around the world</p>
            </div>
            <div style={styles.heroImage}>
                <img src={hero} alt="Custom Product Example" style={styles.image} />
            </div>
        </section>
    );
};

const styles = {
    heroSection: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '100px 50px',
        width: '100%',
        maxWidth: '1200px',
        marginTop: '20px',
        fontFamily: '"Poppins", sans-serif',
    },
    heroContent: {
        maxWidth: '550px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    heading: {
        fontSize: '53px',
        fontWeight: '600',
        marginBottom: '10px',
        lineHeight: '1.2',
        color: '#1d1d1d',
    },
    benefits: {
        listStyle: 'none',
        padding: 0,
        marginBottom: '30px',
    },
    benefitItem: {
        fontSize: '1.1rem',
        fontWeight: '500',
        display: 'flex',
        alignItems: 'center',
        color: '#333',
    },
    checkmark: {
        color: '#00b140',
        fontWeight: 'bold',
        fontSize: '1.5rem',
        marginRight: '10px',
    },
    ctaButtons: {
        display: 'flex',
        gap: '20px',
        marginBottom: '10px',
    },
    startFreeButton: {
        padding: '14px 24px',
        fontSize: '1.1rem',
        backgroundColor: '#00b140',
        color: 'white',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        fontWeight: '500',
        fontFamily: '"Poppins", sans-serif',
    },
    howItWorksButton: {
        padding: '14px 24px',
        fontSize: '1.1rem',
        backgroundColor: 'white',
        color: 'black',
        border: '1px solid gray',
        borderRadius: '5px',
        cursor: 'pointer',
        fontWeight: '500',
        fontFamily: '"Poppins", sans-serif',
    },
    trustedText: {
        fontSize: '0.9rem',
        color: '#00b140',
        fontWeight: 'bold',
    },
    heroImage: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',  
        
    },
    image: {
        width: '750px', 
        marginLeft:"30px"
    },
};


export default HeroSection;
