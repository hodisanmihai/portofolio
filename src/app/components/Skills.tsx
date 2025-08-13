"use client";

import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJsSquare,
  FaGitAlt,
  FaBootstrap,
  FaSass,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFramer,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";
import { useLanguage } from "./LanguageContext";

const skillIcons = [
  { Icon: FaHtml5, label: "HTML" },
  { Icon: FaCss3Alt, label: "CSS" },
  { Icon: FaJsSquare, label: "JavaScript" },
  { Icon: FaReact, label: "React" },
  { Icon: SiTailwindcss, label: "Tailwind" },
  { Icon: FaBootstrap, label: "Bootstrap" },
  { Icon: FaGitAlt, label: "Git" },
  { Icon: FaFigma, label: "Figma" },
  { Icon: SiFramer, label: "Framer" },
  { Icon: FaSass, label: "Sass" },
  { Icon: SiTypescript, label: "TypeScript" },
  { Icon: SiNextdotjs, label: "Next.js" },
];

const Skills = () => {
  const { language } = useLanguage();

  return (
    <div className="bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-16 sm:py-24">
      <div className="text-white max-w-screen-lg w-full mx-auto px-4 text-center">
        {/* Multilingual Title */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
          {language === "en" ? "My Skills" : "Skill-urile Mele"}
        </h2>

        {/* Skill Icons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 sm:gap-8 place-items-center">
          {skillIcons.map(({ Icon, label }, index) => (
            <div
              key={index}
              className="w-full max-w-[160px] aspect-square flex flex-col items-center justify-center bg-white/10 p-4 rounded-xl transform transition-transform hover:scale-105"
            >
              <Icon className="text-white" size={60} />
              <p className="mt-3 text-sm sm:text-base">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
