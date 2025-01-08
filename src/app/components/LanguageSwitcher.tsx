"use client";

import React, { useState, useEffect } from "react";
import EnglishLang from "../assets/uk-flag.png"; 
import RoLang from "../assets/ro-flag.png"; 
import { useLanguage } from "./LanguageContext";
import Image from "next/image";

const LanguageSwitcher: React.FC = () => {
  const { language, switchLanguage } = useLanguage(); 
  const [isAnimating, setIsAnimating] = useState(false);

 
  const currentFlag = language === "en" ? EnglishLang.src : RoLang.src;
 
  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 600); 
    return () => clearTimeout(timer); 
  }, [language]);

  return (
    <div
      onClick={switchLanguage} 
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        backgroundColor: isAnimating ? "#ff6600" : "#333",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)", 
        cursor: "pointer",
        zIndex: 1000,
        transition: "background-color 0.3s ease, transform 0.3s ease", 
        transform: isAnimating
          ? "rotateZ(180deg) scale(1.1)" 
          : "rotateY(0deg) scale(1)",
      }}
    >
      <Image
        src={currentFlag} 
        alt={language === "en" ? "English" : "Romanian"}
        style={{
          width: "35px",
          height: "35px",
          borderRadius: "50%",
          opacity: isAnimating ? 0 : 1,
          transition: "opacity 0.4s ease, transform 0.6s ease", 
          transform: isAnimating ? "rotateZ(180deg)" : "rotateY(0deg)", 
        }}
      />
    </div>
  );
};

export default LanguageSwitcher;
