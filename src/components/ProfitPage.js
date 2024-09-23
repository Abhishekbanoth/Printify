import React from 'react';
import profitpage from './assets/profitpage.png';

const ProfitPage = () => {
    return (
        <div style={styles.container}>
            <div style={styles.content}>
                <h1 style={styles.heading}>Make Money, Risk-Free</h1>
                <p style={styles.subheading}>You pay for fulfillment only when you make a sale</p>
                <div style={styles.profitBox}>
                    <div style={styles.profitDetails}>
                        <p style={styles.text}>
                            You sell a t-shirt <span style={styles.price}>$30</span>
                        </p>
                        <p style={styles.text}>
                            You pay for its production <span style={styles.price}>$12</span>
                        </p>
                        <hr style={styles.divider} />
                        <p style={styles.profitText}>
                            Your profit <span style={styles.profit}>$18</span>
                        </p>
                    </div>
                </div>
                <button style={styles.button}>Start selling</button>
                <p style={styles.footerText}>
                    100% Free to use · 900+ Products · Largest print network
                </p>
            </div>
            <div style={styles.imageContainer}>
                <img
                    src={profitpage}
                    alt="Profit growth"
                    style={styles.image}
                />
            </div>
        </div>
    );
};

const styles = {
    container: {
        marginTop:"30px",
        display: 'flex',
        flexDirection: 'row',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        flex: 1,
        backgroundColor: '#122a3f', 
        color: 'white',
        padding: '50px',
        margin: 0,  
        borderRadius:"25px",
    },
    heading: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        marginBottom: '20px',
    },
    subheading: {
        fontSize: '1rem',
        marginBottom: '40px',
    },
    profitBox: {
        backgroundColor: '#1e3d52',
        padding: '20px',
        borderRadius: '10px',
        marginBottom: '30px',
    },
    profitDetails: {
        color: 'white',  
        textAlign: 'left',
    },
    text: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '1.2rem',
        marginBottom: '10px',
    },
    price: {
        fontSize: '1.2rem',
    },
    divider: {
        margin: '20px 0',
        borderColor: '#394b58',
    },
    profitText: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '1.4rem',
        fontWeight: 'bold',
        color: '#28c76f',
    },
    profit: {
        fontSize: '1.4rem',
    },
    button: {
        backgroundColor: '#28c76f',
        border: 'none',
        color: 'white',
        padding: '15px 30px',
        fontSize: '1.2rem',
        cursor: 'pointer',
        borderRadius: '8px',
        marginBottom: '20px',
    },
    footerText: {
        fontSize: '0.9rem',
        color: '#c4c4c4',
    },
    imageContainer: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        padding: 0,  
        margin: 0,   
        borderRadius:"25px",
    },
    image: {
        width: '100%',
        height: 'auto',
        maxWidth: '600px',
        objectFit: 'contain',
        borderRadius:"25px",
    },
};

export default ProfitPage;
