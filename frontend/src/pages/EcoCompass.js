import React from 'react';
import { ContentSection } from '../components/ContentSection';
import { CallToAction } from '../components/CallToAction';
import { Header } from '../components/Header';
import { contentData } from '../constants/contentData';
import LandingPage from '../components/LandingPage'; // Import the LandingPage component
import EcoCompassGuide from '../components/EcoCompassGuide';
import Footer from '../components/Footer'; // Import the Footer component

export const EcoCompass = () => {
    return (
      <>
        {/* Header placed outside of the container */}
        <Header />
        <div>
          {/* LandingPage component */}
          <LandingPage />
  
          <div>
            <div>
              {contentData.map((section, index) => (
                <ContentSection
                  key={index}
                  image={section.image}
                  title={section.title}
                  description={section.description}
                  imageFirst={section.imageFirst}
                />
              ))}
              <CallToAction /> {/* CallToAction without styles */}
            </div>
            <EcoCompassGuide /> {/* EcoCompassGuide without styles */}
          </div>
        </div>
        <Footer /> {/* Footer component added here */}
      </>
    );
};
