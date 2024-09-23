import React from 'react';
import hero2 from './assets/hero2.png'
const HeroSection2 = () => {
    return (
        <section style={styles.container}>
            <div style={styles.productImageSection}>
                <img
                    src={hero2}
                    alt="Product collage"
                    style={styles.productImage}
                />
            </div>

            <div className="container "style={styles.textSection}>
                <h2 style={styles.heading}>
                    Easily add your design to a wide range of products
                </h2>
                <p style={styles.subtext}>
                    With our free design tools, you can easily add your custom designs to
                    t-shirts, mugs, phone cases, and hundreds of other products.
                </p>
                <a href="/all-products" style={styles.link}>
                    All products →
                </a>
            </div>
        </section>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '50px',
        fontFamily: '"Poppins", sans-serif',
        backgroundColor: '#f9fafb',
    },
    productImageSection: {
        flex: 1,
        backgroundColor: '#f9fafb',
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    productImage: {
        width: '80%',
        height: 'auto',
        borderRadius: '10px',
    },
    textSection: {
        flex: 1,
        paddingLeft: '50px',
        // width:"500px"
    },
    heading: {
        fontSize: '2rem',
        fontWeight: '600',
        marginBottom: '20px',
        color: '#1d1d1d',
        lineHeight: '1.3',
    },
    subtext: {
        fontSize: '1rem',
        color: '#6f6f6f',
        marginBottom: '30px',
        maxWidth: '500px',
    },
    link: {
        fontSize: '1rem',
        fontWeight: '500',
        color: '#00b140',
        textDecoration: 'none',
    },
};

export default HeroSection2;
