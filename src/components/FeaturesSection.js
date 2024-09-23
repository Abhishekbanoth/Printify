import React from 'react';
import profit from './assets/profit.png';
import robust from './assets/robust.png';
import selection from './assets/selection.png';

const FeaturesSection = () => {
    return (
        <section style={styles.section}>
            <div style={styles.feature}>
                <div style={styles.iconWrapper}>
                    <img
                        src={profit}
                        alt="Higher Profits"
                        style={styles.image}
                    />
                </div>
                <h3 style={styles.title}>Higher Profits</h3>
                <p style={styles.description}>
                    We offer some of the lowest prices in the industry because print providers continuously
                    compete to win your business.
                </p>
            </div>

            <div style={styles.feature}>
                <div style={styles.iconWrapper}>
                    <img
                        src={robust}
                        alt="Robust Scaling"
                        style={styles.image}
                    />
                </div>
                <h3 style={styles.title}>Robust Scaling</h3>
                <p style={styles.description}>
                    Easily handle peak holiday seasons, with our wide network of partners and automatic
                    routing functionality.
                </p>
            </div>

            <div style={styles.feature}>
                <div style={styles.iconWrapper}>
                    <img
                        src={selection}
                        alt="Best Selection"
                        style={styles.image}
                    />
                </div>
                <h3 style={styles.title}>Best Selection</h3>
                <p style={styles.description}>
                    With 900+ products and top-quality brands, you can choose the best products for your
                    business.
                </p>
            </div>
        </section>
    );
};

const styles = {
    section: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'start',
        padding: '60px ',
        fontFamily: '"Poppins", sans-serif',
    },
    feature: {
        textAlign: 'start',
        maxWidth: '500px',
        margin:"20px"
    },
    iconWrapper: {
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        backgroundColor: '#e0f7ec',
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'start',
        marginBottom: '35px',
        overflow: 'hidden',
    },
    image: {
        width: '100%', 
        height: '100%', 
        objectFit: 'contain', 
    },
    title: {
        fontSize: '20px',
        fontWeight: '600',
        marginBottom: '10px',
        color: '#333',
    },
    description: {
        fontSize: '15px',
        color: 'black',
        lineHeight: '1.6',
        maxWidth: '350px',
        margin: '0 auto',
        fontWeight:"300"
    },
};

export default FeaturesSection;
