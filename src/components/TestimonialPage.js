import React from 'react';
import review1 from './assets/review1.png';
import review2 from './assets/review2.png';
import review3 from './assets/review3.png'
const TestimonialPage = () => {
    const styles = {
        container: {
            width: '100%',
            padding: '50px 0',
            backgroundColor: '#f7f8fa',
            textAlign: 'center',
        },
        heading: {
            fontSize: '40px',
            fontWeight: '700',
            color: '#1E2D40',
            marginBottom: '10px',
        },
        subHeading: {
            fontSize: '18px',
            color: '#5f6c7b',
            maxWidth: '600px',
            margin: '0 auto',
        },
        cardContainer: {
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            marginTop: '50px',
        },
        card: {
            backgroundColor: '#fff',
            borderRadius: '15px',
            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
            padding: '20px',
            width: '300px',
            textAlign: 'left',
        },
        profileImg: {
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            marginBottom: '10px',
        },
        profileInfo: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: '15px',
        },
        profileName: {
            fontWeight: '700',
            fontSize: '18px',
            margin: '0 0 0 15px',
        },
        storeLink: {
            fontSize: '14px',
            color: '#4CAF50',
            marginLeft: '15px',
        },
        rating: {
            color: '#FFB400',
            margin: '5px 0',
        },
        reviewText: {
            fontSize: '14px',
            color: '#5f6c7b',
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.heading}>Trusted by over 8M sellers around the world</div>
            <div style={styles.subHeading}>
                Whether you are just getting started or run an enterprise-level e-commerce business, we do everything we can to ensure a positive merchant experience.
            </div>

            
            <div style={styles.cardContainer}>
                <div style={styles.card}>
                    <div style={styles.profileInfo}>
                        <img
                            src={review1}
                            alt="Robert"
                            style={styles.profileImg}
                        />
                        <div>
                            <div style={styles.profileName}>Robert A. Voltaire</div>
                            <div style={styles.storeLink}>Store link</div>
                        </div>
                    </div>
                    <div style={styles.rating}>★★★★★</div>
                    <div style={styles.reviewText}>
                        Printify has been an incredible service for us musicians unable to keep large amounts of inventory - now we can create designs previously too expensive to print without having to have 1,000 shirts in our jam space. Thanks Printify!
                    </div>
                </div>

                <div style={styles.card}>
                    <div style={styles.profileInfo}>
                        <img
                            src={review2}
                            alt="Quinten"
                            style={styles.profileImg}
                        />
                        <div>
                            <div style={styles.profileName}>Quinten Barney</div>
                            <div style={styles.storeLink}>Etsy Merchant</div>
                        </div>
                    </div>
                    <div style={styles.rating}>★★★★★</div>
                    <div style={styles.reviewText}>
                        We chose Printify because of their offerings as well as their incredibly low prices. After several years, we've come to find that their customer service is also top-notch, and their platform just keeps getting better and better.
                    </div>
                </div>

                <div style={styles.card}>
                    <div style={styles.profileInfo}>
                        <img
                            src={review3}
                            alt="Nikki"
                            style={styles.profileImg}
                        />
                        <div>
                            <div style={styles.profileName}>Nikki</div>
                            <div style={styles.storeLink}>Store link</div>
                        </div>
                    </div>
                    <div style={styles.rating}>★★★★★</div>
                    <div style={styles.reviewText}>
                        Printify has been amazing as we grow our business, for the product options we can make for our customers. Customer Service team is great and the whole process a breeze.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialPage;
