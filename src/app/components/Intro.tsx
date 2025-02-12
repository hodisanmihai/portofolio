'use client';
import React, { useEffect, useState } from "react";

const IntroAnimation = () => {
  const [screenOpen, setScreenOpen] = useState(false);
  const [showElements, setShowElements] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [showMainContent, setShowMainContent] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("overflow-hidden", "h-screen"); // Disable scrolling
  
    const screenTimeout = setTimeout(() => setScreenOpen(true), 500);
    const elementsTimeout = setTimeout(() => setShowElements(true), 3000);
    const fadeOutTimeout = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setShowMainContent(true);
        document.documentElement.classList.remove("overflow-hidden", "h-screen"); // Re-enable scrolling
      }, 1000);
    }, 8000);

    return () => {
      clearTimeout(screenTimeout);
      clearTimeout(elementsTimeout);
      clearTimeout(fadeOutTimeout);
      document.documentElement.classList.remove("overflow-hidden", "h-screen");
    };
  }, []);

  return (
    <>
      <div id="intro" className={fadeOut ? 'fade-out' : ''}>
        <div className={`laptop ${screenOpen ? 'screen-open' : ''}`}>
          <div className="screen">
            <div className={`content-wrapper ${showElements ? 'show-elements' : ''}`}>
              <h2 id="typing-text">
                Hodisan Mihai | Portfolio
              </h2>
              <div className="loading-bar">
                <div className="progress"></div>
              </div>
            </div>
          </div>
          <div className="keyboard"></div>
        </div>
      </div>
      
     
    </>
  );
};

export default IntroAnimation;