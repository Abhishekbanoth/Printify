import React from 'react';
import create from './assets/create.png';
import handle from './assets/handle.png';
import sell from './assets/sell.png'
const FeaturesSection2 = () => {
    return (
        <div style={styles.container}>
            <div style={styles.feature}>
                <img
                    src={create}
                    alt="Create Products"
                    style={styles.image}
                />
                <h2 style={styles.title}>CREATE</h2>
                <h3 style={styles.subtitle}>custom products</h3>
                <p style={styles.description}>
                    Easily add your designs to a wide range of products using our free tools
                </p>
            </div>

            <div style={styles.feature}>
                <img
                    src={sell}
                    alt="Sell Products"
                    style={styles.image}
                />
                <h2 style={styles.title}>SELL</h2>
                <h3 style={styles.subtitle}>on your terms</h3>
                <p style={styles.description}>
                    You choose the products, sale price, and where to sell
                </p>
            </div>

            <div style={styles.feature}>
                <img
                    src={handle}
                    alt="Handle Fulfillment"
                    style={styles.image}
                />
                <h2 style={styles.title}>WE HANDLE</h2>
                <h3 style={styles.subtitle}>fulfillment</h3>
                <p style={styles.description}>
                    Once an order is placed, we automatically handle all the printing and delivery logistics
                </p>
            </div>
        </div>
    );
};


const styles = {
    container: {
        alignItems: 'flex-start',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'space-evenly',
        padding: '60px ',
        fontFamily: '"Poppins", sans-serif',
    },
    feature: {
        textAlign: 'start',
        maxWidth: '650px',
        margin: "20px"
    },
    image: {
        width: '150px',
        marginBottom: '20px',
    },
    title: {
        color: '#00b140',
        fontSize: '20px',
        fontWeight: '700',
        marginBottom: '10px',
    },
    subtitle: {
        fontSize: '22px',
        fontWeight: '600',
        marginBottom: '10px',
    },
    description: {
        fontSize: '15px',
        color: 'black',
        lineHeight: '1.6',
        maxWidth: '350px',
        margin: '0 auto',
        fontWeight: "300"

    },
};

export default FeaturesSection2;
