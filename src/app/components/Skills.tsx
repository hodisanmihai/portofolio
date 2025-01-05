"use client";

import { div } from 'framer-motion/client';
import React from 'react'
import {   FaHtml5, 
  FaCss3Alt, 
  FaReact, 
  FaJsSquare,
  FaGitAlt, 
  FaBootstrap,
  FaSass,
  FaFigma,
} from 'react-icons/fa';

import { SiTailwindcss, SiFramer,SiTypescript ,SiNextdotjs} from 'react-icons/si';


const skillIcons = [
  { icon: <FaHtml5 size={140} />, label: "HTML" },
  { icon: <FaCss3Alt size={140} />, label: "CSS" },
  { icon: <FaJsSquare size={140} />, label: "JavaScript" },

  { icon: <FaReact size={140} />, label: "React" },
  { icon: <SiTailwindcss size={140} />, label: "Tailwind" },
  { icon: <FaBootstrap size={140} />, label: "Bootstrap" },

  { icon: <FaGitAlt size={140} />, label: "Git" },

  { icon: <FaFigma size={140} />, label: "Figma" },
  { icon: <SiFramer size={140} />, label: "Framer" },

  { icon: <FaSass size={140} />, label: "Sass" },
  { icon: <SiTypescript size={140} />, label: "TypeScript" },

  { icon: <SiNextdotjs size={140} />, label: "Next.js" },
];




const Skills = () => {
  return (
    <div className='bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-32' >
        
        <div className='text-white w-[400px] md:min-w-[950px] mx-auto p-8 text-center'>
  <h2 className='text-6xl font-bold mb-4'>What I Do</h2>

  <div className='grid grid-cols-2 md:grid-cols-4 gap-10 justify-center'>
    {skillIcons.map((skill, index) => (
      <div
        key={index}
        className=' h-[160px] w-[160px] md:h-[220px] md:w-[220px] flex flex-col items-center justify-between bg-white/10 p-4 rounded-xl transform transition-transform hover:scale-105'
      >
        {skill.icon && (
          <div >
            {skill.icon}
          </div>
        )}
        <p className='mt-2'>{skill.label}</p>
      </div>
    ))}
  </div>
</div>



    </div>
  )
}

export default Skills