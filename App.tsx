import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
import StatsSection from './components/StatsSection';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div className="bg-transparent text-white min-h-screen">
            <Header />
            <main>
                <HeroSection />
                <div id="features" className="scroll-mt-20">
                    <FeaturesSection />
                </div>
                <div id="how-it-works" className="scroll-mt-20">
                    <HowItWorksSection />
                </div>
                <div id="stats" className="scroll-mt-20">
                    <StatsSection />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default App;