"use client";

import React, { useState } from 'react';
import Image from "next/image";
import book from "../assets/book.png";
import pc from "../assets/pc.png";
import card from "../assets/location.png";
import finance from "../assets/future.png";

// Definirea tipului pentru expanded
interface ExpandedState {
  book: boolean;
  pc: boolean;
  card: boolean;
  finance: boolean;
}

const About = () => {
  const [expanded, setExpanded] = useState<ExpandedState>({
    book: false,
    pc: false,
    card: false,
    finance: false,
  });

  const toggleExpand = (cardName: keyof ExpandedState) => {
    setExpanded((prevState) => {
      const newState = {
        book: false,
        pc: false,
        card: false,
        finance: false,
      };
      if (!prevState[cardName]) {
        newState[cardName] = true;
      }
      return newState;
    });
  };

  return (
    <div className="max-w-[1200px] mx-auto" id="about"> 
      <h1 className='text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4'>
        About <span className='text-orange-400'>Me</span>
      </h1>

      <div className="px-6 md:mt-11 md:p-0 grid md:grid-cols-8 gap-6 place-items-center">
        
        {/* Card 1 */}
        <div
          onClick={() => toggleExpand('book')}
          className={`w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden 
            ${expanded.book ? 'scale-105 max-h-auto' : 'scale-90 max-h-[250px]'} transition-all duration-500 ease-in-out transform cursor-pointer`}
        >
          <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
          <div className='flex flex-row p-6'>
            <Image src={book} alt="book" className="w-auto h-[130px]" />
            <div className='flex flex-col mt-4'>
              <h2 className="text-2xl font-bold text-white/80">My Journey</h2>
              <p className="text-lg text-white/70 mt-2">
                {expanded.book
                  ? "From writing a small paragraph in Notepad back in 2020 to diving into full-stack development, my journey has been one of curiosity and growth. Over time, I’ve learned to embrace challenges as opportunities to learn and thrive. Now, I’m proud to be a dedicated web developer, constantly seeking new ways to grow and connect with others who share my passion for creating impactful digital experiences."
                  : "From writing a small paragraph in Notepad back in 2020 ... "}
              </p>
              {!expanded.book && (
                <span
                  onClick={() => toggleExpand('book')}
                  className="text-orange-400 cursor-pointer mt-2"
                >
                  Read More
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div
          onClick={() => toggleExpand('pc')}
          className={`w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden 
            ${expanded.pc ? 'scale-105 max-h-auto' : 'scale-90 max-h-[250px]'} transition-all duration-500 ease-in-out transform cursor-pointer`}
        >
          <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
          <div className='flex flex-row p-6'>
            <Image src={pc} alt="pc" className="w-auto h-[130px]" />
            <div className='flex flex-col mt-4'>
              <h2 className="text-2xl font-bold text-white/80">Turning Ideas Into Code</h2>
              <p className="text-lg text-white/70 mt-2">
                {expanded.pc
                  ? "I’ve always embraced my creative side, whether it was exploring new design ideas or experimenting with user interfaces. Over the years, I’ve learned to blend creativity with technical skills, crafting websites that are functional, visually stunning, and user-friendly."
                  : "I’ve always embraced my creative side..."}
              </p>
              {!expanded.pc && (
                <span
                  onClick={() => toggleExpand('pc')}
                  className="text-orange-400 cursor-pointer mt-2 "
                >
                  Read More
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div
          onClick={() => toggleExpand('card')}
          className={`w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden 
            ${expanded.card ? 'scale-105 max-h-auto' : 'scale-90 max-h-[250px]'} transition-all duration-500 ease-in-out transform cursor-pointer`}
        >
          <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
          <div className='flex flex-row p-6'>
            <Image src={card} alt="card" className="w-auto h-[130px]" />
            <div className='flex flex-col mt-4'>
              <h2 className="text-2xl font-bold text-white/80">Where I’m From</h2>
              <p className="text-lg text-white/70 mt-2">
                {expanded.card
                  ? "I’m proud to call Oradea, Romania, my home. It’s a city that inspires me with its vibrant culture, beautiful architecture, and a community that values creativity and growth. No matter where life takes me, Oradea will always hold a special place in my heart."
                  : "I’m proud to call Oradea, Romania, my home. It’s a city that..."}
              </p>
              {!expanded.card && (
                <span
                  onClick={() => toggleExpand('card')}
                  className="text-orange-400 cursor-pointer mt-2"
                >
                  Read More
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div
          onClick={() => toggleExpand('finance')}
          className={`w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden 
            ${expanded.finance ? 'scale-105 max-h-auto' : 'scale-90 max-h-[250px]'} transition-all duration-500 ease-in-out transform cursor-pointer`}
        >
          <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
          <div className='flex flex-row p-6'>
            <Image src={finance} alt="finance" className="w-auto h-[130px]" />
            <div className='flex flex-col mt-4'>
              <h2 className="text-2xl font-bold text-white/80">Finance</h2>
              <p className="text-lg text-white/70 mt-2">
                {expanded.finance
                  ? "I’m passionate about continuous learning and pushing boundaries in web development. My focus is on creating accessible and innovative web experiences that empower users. As I grow, I aim to work on projects that leave a lasting impact, blending creativity with technology to make a difference in people’s lives."
                  : "I’m passionate about continuous learning and pushing ..."}
              </p>
              {!expanded.finance && (
                <span
                  onClick={() => toggleExpand('finance')}
                  className="text-orange-400 cursor-pointer mt-2 md:"
                >
                  Read More
                </span>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
