import React from 'react';

const CustomSolutionBanner = () => {
    const styles = {
        container: {
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '40px 0',
        },
        banner: {
            width: '70%',
            height: '120px',
            backgroundColor: '#E6F8E6',
            borderRadius: '20px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 30px',
        },
        text: {
            color: '#2E7D32',
            fontSize: '25px',
            fontWeight: '600',
            zIndex: '2',
            maxWidth: "400px",
            marginLeft: "70px",
        },
        button: {
            padding: '10px 20px',
            backgroundColor: '#fff',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            color: '#2E7D32',
            fontWeight: '500',
            marginRight: "40px",
            cursor: 'pointer',
            boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
            transition: 'background-color 0.3s ease',
        },
        buttonHover: {
            backgroundColor: '#2E7D32',
            color: '#fff',
        },
        greenOverlay: {
            position: 'absolute',
            right: '0',
            top: '0',
            height: '100%',
            width: '35%',
            background: 'linear-gradient(to right, #A5D6A7, #00C853)',
            borderTopRightRadius: '20px',
            borderBottomRightRadius: '20px',
            zIndex: '1',
        },
        buttonWrapper: {
            zIndex: '2',
        },
        // Internal CSS for responsiveness
        '@media (max-width: 768px)': {
            banner: {
                flexDirection: 'column',
                height: 'auto',
                padding: '20px',
            },
            text: {
                fontSize: '20px',
                marginLeft: '0',
                textAlign: 'center',
            },
            button: {
                marginRight: '0',
                marginTop: '10px',
            },
        },
    };

    const [hover, setHover] = React.useState(false);

    const handleMouseEnter = () => setHover(true);
    const handleMouseLeave = () => setHover(false);

    return (
        <div style={styles.container}>
            <div style={styles.banner}>
                <div style={styles.text}>Are you a large business looking for custom solutions?</div>
                <div style={styles.greenOverlay}></div>
                <div style={styles.buttonWrapper}>
                    <button
                        style={hover ? { ...styles.button, ...styles.buttonHover } : styles.button}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        Talk to sales
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CustomSolutionBanner;
