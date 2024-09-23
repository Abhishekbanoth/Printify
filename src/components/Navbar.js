import React, { useState } from 'react';
import logo from './assets/logo (1).svg';

const NavBar = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [hoveredLink, setHoveredLink] = useState(null);

    const handleMouseEnter = (dropdown) => {
        setActiveDropdown(dropdown);
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
    };

    const handleLinkHover = (link) => {
        setHoveredLink(link);
    };

    const handleLinkLeave = () => {
        setHoveredLink(null);
    };

    return (
        <header style={styles.navbar}>
            <div style={styles.logoContainer}>
                <img src={logo} alt="Printify" style={styles.logo} />
            </div>
            
            <nav>
                <ul style={styles.navList}>
                    <li 
                        style={styles.navItem} 
                        onMouseEnter={() => handleLinkHover('catalog')}
                        onMouseLeave={handleLinkLeave}
                    >
                        <a href="#catalog" style={{ ...styles.navLink, color: hoveredLink === 'catalog' ? '#00b140' : 'black' }}>
                            Catalog
                        </a>
                    </li>

                    <li 
                        style={styles.navItem} 
                        onMouseEnter={() => { handleMouseEnter('howItWorks'); handleLinkHover('howItWorks'); }} 
                        onMouseLeave={() => { handleMouseLeave(); handleLinkLeave(); }}
                    >
                        <a href="#how-it-works" style={{ ...styles.navLink, color: hoveredLink === 'howItWorks' ? '#00b140' : 'black' }}>
                            How it works 
                            <span style={styles.dropdownIcon}>▼</span>
                        </a>
                        {activeDropdown === 'howItWorks' && (
                            <ul style={styles.dropdownList}>
                                <li><a href="#how-printify-works" style={styles.dropdownLink}>How Printify Works</a></li>
                                <li><a href="#print-on-demand" style={styles.dropdownLink}>Print On Demand</a></li>
                                <li><a href="#quality-promise" style={styles.dropdownLink}>Printify Quality Promise</a></li>
                                <li><a href="#what-to-sell" style={styles.dropdownLink}>What to Sell?</a></li>
                            </ul>
                        )}
                    </li>

                    <li 
                        style={styles.navItem} 
                        onMouseEnter={() => handleLinkHover('pricing')}
                        onMouseLeave={handleLinkLeave}
                    >
                        <a href="#pricing" style={{ ...styles.navLink, color: hoveredLink === 'pricing' ? '#00b140' : 'black' }}>
                            Pricing
                        </a>
                    </li>

                    <li 
                        style={styles.navItem} 
                        onMouseEnter={() => handleLinkHover('blog')}
                        onMouseLeave={handleLinkLeave}
                    >
                        <a href="#blog" style={{ ...styles.navLink, color: hoveredLink === 'blog' ? '#00b140' : 'black' }}>
                            Blog
                        </a>
                    </li>

                    <li 
                        style={styles.navItem} 
                        onMouseEnter={() => { handleMouseEnter('services'); handleLinkHover('services'); }} 
                        onMouseLeave={() => { handleMouseLeave(); handleLinkLeave(); }}
                    >
                        <a href="#services" style={{ ...styles.navLink, color: hoveredLink === 'services' ? '#00b140' : 'black' }}>
                            Services 
                            <span style={styles.dropdownIcon}>▼</span>
                        </a>
                        {activeDropdown === 'services' && (
                            <ul style={styles.dropdownList}>
                                <li><a href="#printify-studio" style={styles.dropdownLink}>Printify Studio</a></li>
                                <li><a href="#express-delivery" style={styles.dropdownLink}>Printify Express Delivery</a></li>
                                <li><a href="#transfer-products" style={styles.dropdownLink}>Transfer Products</a></li>
                                <li><a href="#order-in-bulk" style={styles.dropdownLink}>Order In Bulk</a></li>
                                <li><a href="#experts-program" style={styles.dropdownLink}>Experts Program</a></li>
                            </ul>
                        )}
                    </li>

                    <li 
                        style={styles.navItem} 
                        onMouseEnter={() => { handleMouseEnter('useCases'); handleLinkHover('useCases'); }} 
                        onMouseLeave={() => { handleMouseLeave(); handleLinkLeave(); }}
                    >
                        <a href="#use-cases" style={{ ...styles.navLink, color: hoveredLink === 'useCases' ? '#00b140' : 'black' }}>
                            Use-cases 
                            <span style={styles.dropdownIcon}>▼</span>
                        </a>
                        {activeDropdown === 'useCases' && (
                            <ul style={styles.dropdownList}>
                                <li><a href="#merch-for-fans" style={styles.dropdownLink}>Merch for Fans</a></li>
                                <li><a href="#merch-for-ecommerce" style={styles.dropdownLink}>Merch for eCommerce</a></li>
                                <li><a href="#merch-for-enterprises" style={styles.dropdownLink}>Merch for Enterprises</a></li>
                                <li><a href="#grow-your-store" style={styles.dropdownLink}>Grow Your Store</a></li>
                            </ul>
                        )}
                    </li>

                    <li 
                        style={styles.navItem} 
                        onMouseEnter={() => { handleMouseEnter('help'); handleLinkHover('help'); }} 
                        onMouseLeave={() => { handleMouseLeave(); handleLinkLeave(); }}
                    >
                        <a href="#help" style={{ ...styles.navLink, color: hoveredLink === 'help' ? '#00b140' : 'black' }}>
                            Need help? 
                            <span style={styles.dropdownIcon}>▼</span>
                        </a>
                        {activeDropdown === 'help' && (
                            <ul style={styles.dropdownList}>
                                <li><a href="#help-center" style={styles.dropdownLink}>Help Center</a></li>
                                <li><a href="#contacts" style={styles.dropdownLink}>Contacts</a></li>
                                <li><a href="#my-requests" style={styles.dropdownLink}>My Requests</a></li>
                            </ul>
                        )}
                    </li>
                </ul>
            </nav>

            <button style={styles.storeButton}>My store</button>
        </header>
    );
};

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'white',
        boxShadow: '0 4px 2px -2px gray',
    },
    logoContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '30px', 
    },
    logo: {
        height: '40px', 
        width: 'auto',
    },
    navList: {
        display: 'flex',
        listStyle: 'none',
        justifyContent: 'space-around',
        width: '100%',
        fontFamily: '"Poppins", sans-serif',
        position: 'relative',
        padding: '0',
        fontSize: '15px',
        
    },
    navItem: {
        position: 'relative',
        margin: '10px 10px',
        
    },
    navLink: {
        textDecoration: 'none',
        color: 'black',
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        transition: 'color 0.3s ease',
    },
    dropdownIcon: {
        marginLeft: '5px',
        fontSize: '12px',
    },
    storeButton: {
        padding: '10px 20px',
        backgroundColor: '#00b140',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginRight: '30px',
        fontWeight: 'bold',
        fontSize: '17px',
        fontFamily: '"Poppins", sans-serif',
    },
    dropdownList: {
        position: 'absolute',
        top: '100%',
        left: '0',
        backgroundColor: 'white',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        listStyle: 'none',
        padding: '10px',
        marginTop: '10px',
        zIndex: 1000,
    },
    dropdownLink: {
        display: 'block',
        padding: '8px 12px',
        color: 'black',
        textDecoration: 'none',
        whiteSpace: 'nowrap',
    },
};

export default NavBar;
