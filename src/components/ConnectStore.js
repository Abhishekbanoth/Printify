import React from 'react';
import img from './assets/connectstore.png';

const ConnectStore = () => {
  const styles = {
    container: {
      textAlign: 'center',
      marginTop: '50px',
      marginBottom: '100px',
      padding: '0 20px', // Added padding for smaller screens
    },
    title: {
      fontSize: '36px',
      marginBottom: '10px',
    },
    description: {
      fontSize: '18px',
      marginBottom: '50px',
      color: '#6c757d',
    },
    img: {
      width: '100%',
      maxWidth: '1200px',
      height: 'auto',
    },
    // Media query for responsiveness
    '@media (max-width: 768px)': {
      title: {
        fontSize: '28px',
      },
      description: {
        fontSize: '16px',
      },
    },
    '@media (max-width: 576px)': {
      title: {
        fontSize: '24px',
      },
      description: {
        fontSize: '14px',
      },
      img: {
        maxWidth: '100%', // Adjust image for very small screens
      },
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Connect your store</h2>
      <p style={styles.description}>
        Printify easily integrates with major e-commerce platforms and marketplaces
      </p>
      <div>
        <img src={img} alt="connectstore" style={styles.img} />
      </div>
    </div>
  );
};

export default ConnectStore;
