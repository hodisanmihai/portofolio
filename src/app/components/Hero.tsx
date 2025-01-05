"use client";
import Image from "next/image";
import cursor from "../assets/icon1.png";
import lighting from "../assets/icon2.png";
import { motion } from "framer-motion";
import profilepic from "../assets/profilepic.png";
import React from "react";

const Hero = () => {
  return (
    <div className="py-24 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBAF6E_80%)]">
      <div
        className="absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2 bg-[radial-gradient(closest-side,#000_80%,#2B1942)]"
      ></div>

      <div className="relative">
        <div className="text-8xl font-bold text-center">
          <h1 className="text-[#98B4CE]">Hi, I am</h1>
          <h1 className="text-[#E48A57]">Hodisan Mihai</h1>
        </div>

        <motion.div
          className="absolute left-[320px] top-[350px] md:left-[520px]"
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
          className="absolute left-[20px] top-[350px] md:left-[1200px]"
          drag
        >
          <Image
            src={lighting}
            className="w-[100px] h-[170px] md:w-[120px] md:h-[190px]"
            alt="lighting"
            draggable="false"
          />
        </motion.div>

        <motion.div
className="absolute left-[200px] top-[450px] hidden md:block"
          drag
        >
          <Image
            src={lighting}
            className="w-[100px] h-[170px] md:w-[120px] md:h-[190px]" 
            alt="lighting"
            draggable="false"
          />
        </motion.div>

        <motion.div
          className="absolute right-[200px] top-[450px] hidden md:block"          
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
          I am a front-end developer
        </p>

        <Image
          src={profilepic}
          alt="profilepic"
          className="h-auto w-auto mx-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
