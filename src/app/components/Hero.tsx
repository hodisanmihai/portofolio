"use client";
import Image from "next/image";
import cursor from "../assets/icon1.png";
import lighting from "../assets/icon2.png";
import { motion } from "framer-motion";
import profilepic from "../assets/profilepic.png";
import React from "react";
import { useLanguage } from "../components/LanguageContext";
const Hero = () => {
  const { language } = useLanguage(); 

 
  const textContent: Record<"en" | "ro", { greeting: string; name: string; profession: string }> = {
    en: {
      greeting: "Hi, I am",
      name: "Hodisan Mihai",
      profession: "I am a front-end developer",
    },
    ro: {
      greeting: "Salut, sunt",
      name: "Hodisan Mihai",
      profession: "Sunt un dezvoltator front-end",
    },
  };

  const currentText = textContent[language as "en" | "ro"];

  return (
    <div className="py-24 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBAF6E_80%)]">
      <div
        className="absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2 bg-[radial-gradient(closest-side,#000_80%,#2B1942)]"
      ></div>

      <div className="relative">
        <div className="text-7xl md:text-8xl font-bold text-center">
          <h1 className="text-[#98B4CE]">{currentText.greeting}</h1>
          <h1 className="text-[#E48A57]">{currentText.name}</h1>
        </div>

        <motion.div
          className="absolute left-[320px] top-[350px] md:left-[425px]"
          drag
        >
          <Image
            src={cursor}
            alt="cursor"
            className="w-[100px] h-[100px] md:w-[170px] md:h-[170px]"
            draggable="false"
          />
        </motion.div>

        <motion.div
          className="absolute left-[20px] top-[375px] md:left-[1000px]"
          drag
        >
          <Image
            src={lighting}
            className="w-auto h-[170px]  md:h-[190px]"
            alt="lighting"
            draggable="false"
          />
        </motion.div>

        <motion.div
          className="absolute left-[200px] top-[400px] hidden md:block"
          drag
        >
          <Image
            src={lighting}
            className="w-auto h-[170px] md:h-[190px]"
            alt="lighting"
            draggable="false"
          />
        </motion.div>

        <motion.div
          className="absolute right-[100px] top-[425px] hidden md:block"
          drag
        >
          <Image
            src={cursor}
            alt="cursor"
            className="w-[100px] h-[100px] md:w-[170px] md:h-[170px]"
            draggable="false"
          />
        </motion.div>

        <p className="text-center text-xl max-w-[500px] mx-auto mt-8 text-white/80">
          {currentText.profession}
        </p>

        <Image
          src={profilepic}
          alt="profilepic"
          className="h-auto w-[200px] md:w-[250px] mx-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
