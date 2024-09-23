import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
import HeroSection from './components/Herosection';
import FeaturesSection from './components/FeaturesSection';
import HeroSection2 from './components/HeroSection2'
import FeaturesSection2 from './components/FeaturesSection2'
import ConnectStore from './components/ConnectStore';
import CustomSolutionBanner from './components/CustomSolutionBanner';
import TestimonialPage from './components/TestimonialPage';
import ProfitPage from './components/ProfitPage';
import Footer from './components/Footer'
import Footer2 from './components/Footer2';
const App = () => {
  return (
    <div style={styles.mainContainer}>
      <NavBar />
      <HeroSection />
      <FeaturesSection/>
      <HeroSection2/>
      <FeaturesSection2/>
      <ConnectStore/>
      <CustomSolutionBanner/>
      <TestimonialPage/>
      <ProfitPage/>
      <Footer/>
      <Footer2/>
    </div>
  );
};

const styles = {
  mainContainer: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};

export default App;
