"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type LanguageContextType = {
  language: string;
  switchLanguage: () => void;
};

// Create the context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Provider Component
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState("en");

  const switchLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "ro" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom Hook for accessing context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export default LanguageContext;
