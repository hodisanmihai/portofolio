"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image"; // Import next/image for optimized images
import EnglishLang from "../assets/uk-flag.png"; // StaticImageData
import RoLang from "../assets/ro-flag.png"; // StaticImageData
import { useLanguage } from "./LanguageContext"; // Import the context

const LanguageSwitcher: React.FC = () => {
  const { language, switchLanguage } = useLanguage(); // Use the context values
  const [isAnimating, setIsAnimating] = useState(false);

  // Access the `src` property to get the string path
  const currentFlag = language === "en" ? EnglishLang.src : RoLang.src;

  // Trigger the animation on language change
  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 600); // Duration of animation
    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [language]);

  return (
    <div
      onClick={switchLanguage} // Trigger the context's language switch
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "50px",  // Width for the container
        height: "50px", // Height for the container
        borderRadius: "50%", // Circle shape for the container
        backgroundColor: isAnimating ? "#ff6600" : "#333", // Background color change during animation
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)", // Shadow for emphasis
        cursor: "pointer",
        zIndex: 1000, // Ensures it stays on top of other elements
        transition: "background-color 0.3s ease, transform 0.3s ease", // Transition for background color and transform
        transform: isAnimating
          ? "rotateY(180deg) scale(1.1)" // Rotation and scale on animation
          : "rotateY(0deg) scale(1)", // Normal state
      }}
    >
      <div
        style={{
          width: "40px", // Ensure the wrapper matches the image size
          height: "40px", // Ensure the wrapper matches the image size
          borderRadius: "50%", // Circle for the image inside the circle container
          overflow: "hidden", // Hide anything that overflows from the circle
        }}
      >
        <Image
          src={currentFlag} // Use dynamic flag
          alt={language === "en" ? "English" : "Romanian"}
          width={40}  // Set fixed width
          height={40} // Set fixed height
          style={{
            objectFit: "cover", // This ensures the image covers the circle area without distortion
            opacity: isAnimating ? 0 : 1, // Fade out flag during animation
            transition: "opacity 0.4s ease, transform 0.6s ease", // Smooth fade transition and rotation
            transform: isAnimating ? "rotateY(180deg)" : "rotateY(0deg)", // Flip the flag on animation
          }}
        />
      </div>
    </div>
  );
};

export default LanguageSwitcher;
