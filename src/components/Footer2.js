import React from 'react';

const Footer2 = () => {
    return (
        <div style={styles.footerContainer}>
            <div style={styles.footerTop}>
                <div style={styles.linksContainer}>
                    <a href="/" style={styles.link}>Intellectual Property Policy</a>
                    <a href="/" style={styles.link}>Terms of Service</a>
                    <a href="/" style={styles.link}>Privacy Policy</a>
                    <a href="/" style={styles.link}>Security</a>
                </div>
            </div>
            <div style={styles.footerBottom}>
                <p>© 2024 Printify, Inc. All rights reserved.</p>
            </div>
        </div>
    );
};

const styles = {
    footerContainer: {
        backgroundColor: '#f6f6f7',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: '20px 0',
        borderTop: '1px solid #ddd',
    },
    footerTop: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        maxWidth: '1200px',
        marginBottom: '10px',
    },
    linksContainer: {
        marginLeft:"380px",
        display: 'flex',
        gap: '15px',
    },
    link: {
        textDecoration: 'none',
        color: '#888',
        fontSize: '14px',
        cursor: 'pointer',
        transition: 'color 0.3s ease',
    },
    footerBottom: {
        textAlign: 'center',
        fontSize: '14px',
        color: '#888',
        fontWeight:"bold"
    },
};

export default Footer2;
