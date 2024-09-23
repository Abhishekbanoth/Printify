import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube, faTiktok, faReddit } from '@fortawesome/free-brands-svg-icons';
import logoImage from './assets/logo (1).svg'; 
const Footer = () => {
    return (
        <div style={styles.footerContainer}>
            <div style={styles.topSection}>
                <img src={logoImage} alt="Logo" style={styles.logoImage} />
                <div style={styles.iconContainer}>
                    <FontAwesomeIcon icon={faFacebook} style={styles.icon} />
                    <FontAwesomeIcon icon={faInstagram} style={styles.icon} />
                    <FontAwesomeIcon icon={faLinkedin} style={styles.icon} />
                    <FontAwesomeIcon icon={faTwitter} style={styles.icon} />
                    <FontAwesomeIcon icon={faYoutube} style={styles.icon} />
                    <FontAwesomeIcon icon={faTiktok} style={styles.icon} />
                    <FontAwesomeIcon icon={faReddit} style={styles.icon} />
                </div>
            </div>
            <div style={styles.footerContent}>
                <div style={styles.column}>
                    <h3 style={styles.columnHeading}>Integrations</h3>
                    <ul style={styles.list}>
                        <li>Shopify</li>
                        <li>Etsy</li>
                        <li>eBay</li>
                        <li>Amazon</li>
                        <li>TikTok Shop</li>
                        <li>PrestaShop</li>
                        <li>BigCommerce</li>
                        <li>Wix</li>
                        <li>WooCommerce</li>
                        <li>Squarespace</li>
                        <li>Printify API</li>
                        <li>Printify Pop-Up Store</li>
                        <li>Shutterstock</li>
                    </ul>
                </div>
                <div style={styles.column}>
                    <h3 style={styles.columnHeading}>Discover</h3>
                    <ul style={styles.list}>
                        <li>Blog</li>
                        <li>Guides</li>
                        <li>Products</li>
                        <li>Etsy print-on-demand</li>
                        <li>Shopify print-on-demand</li>
                        <li>Woocommerce print-on-demand</li>
                        <li>Wix print-on-demand</li>
                        <li>Squarespace print-on-demand</li>
                        <li>Make Your Own Shirt</li>
                        <li>Brands</li>
                        <li>Pricing</li>
                        <li>Shipping Rates</li>
                        <li>Mockup Generator</li>
                    </ul>
                </div>
                <div style={styles.column}>
                    <h3 style={styles.columnHeading}>Start selling</h3>
                    <ul style={styles.list}>
                        <li>Custom T-shirts</li>
                        <li>Custom Hoodies</li>
                        <li>Custom Mugs</li>
                        <li>Custom Socks</li>
                        <li>Custom Backpacks</li>
                        <li>Custom Branding</li>
                        <li>Sell on Etsy</li>
                        <li>Sell on Social Media</li>
                        <li>Free T-shirt Designs</li>
                        <li>Custom Products</li>
                        <li>Custom All-Over-Print Hoodies</li>
                        <li>Start a Clothing Line</li>
                        <li>Start POD Business</li>
                        <li>Bulk Orders</li>
                        <li>Transfering To Printify</li>
                    </ul>
                </div>
                <div style={styles.column}>
                    <h3 style={styles.columnHeading}>Printify</h3>
                    <ul style={styles.list}>
                        <li>Print on Demand</li>
                        <li>Print Providers</li>
                        <li>Experts Program</li>
                        <li>Printify Express Delivery</li>
                        <li>Become a Partner</li>
                        <li>About</li>
                        <li>Printify Quality Promise</li>
                        <li>Jobs</li>
                        <li>Webinars</li>
                        <li>Printing Profits Podcast</li>
                        <li>Contact Us</li>
                        <li>Affiliate</li>
                        <li>Contact Sales</li>
                        <li>POD Glossary</li>
                        <li>Network Fulfillment Status</li>
                        <li>Merchant Protection</li>
                        <li>Security</li>
                        <li>Sitemap</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

const styles = {
    footerContainer: {
        marginTop:"60px",
        backgroundColor: '#ffffff',
        padding: '0', 
        borderTop: '1px solid #eee',
    },
    topSection: {
        marginTop:"60px",
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '30px',
        padding: '0 30px', 
    },
    logoImage: {
        marginLeft:"70px",
        width: '150px',
        height: 'auto',
    },
    iconContainer: {
        marginRight:"100px",
        display: 'flex',
        gap: '15px',
    },
    footerContent: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        width: '100%', 
        padding: '0 30px', 
        maxWidth:"2500px"
    },
    column: {
        flex: '1 1 23%',
        padding: '80px', 
        minWidth: '200px',
    },
    columnHeading: {
        fontSize: '17px',
        fontWeight: 'bold',
        marginBottom: '20px',
    },
    list: {
        listStyleType: 'none',
        padding: 0,
        margin: "5px 5px",
        fontSize: '14px',
        lineHeight: '1.8',
    },
    icon: {
        fontSize: '1.7rem',
        color: '#28c76f',
        cursor: 'pointer',
    },
};

export default Footer;
