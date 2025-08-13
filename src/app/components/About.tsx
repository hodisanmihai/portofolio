"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import book from "../assets/book.png";
import pc from "../assets/pc.png";
import card from "../assets/location.png";
import finance from "../assets/future.png";
import { useLanguage } from "./LanguageContext";
import { Download } from "lucide-react";

interface ExpandedState {
  book: boolean;
  pc: boolean;
  card: boolean;
  finance: boolean;
}

interface CardProps {
  cardName: keyof ExpandedState;
  imgSrc: StaticImageData;
  title: string;
  description: string;
  colSpan: string;
  expanded: ExpandedState;
  toggleExpand: (cardName: keyof ExpandedState) => void;
}

const Card: React.FC<CardProps> = ({
  cardName,
  imgSrc,
  title,
  description,
  colSpan,
  expanded,
  toggleExpand,
}) => {
  const getTruncatedText = (text: string, isExpanded: boolean) => {
    const sentenceEndIndex =
      text.indexOf("...") !== -1 ? text.indexOf("...") : 60;
    const truncated = text.substring(0, sentenceEndIndex);
    return isExpanded ? text : truncated;
  };

  return (
    <div
      onClick={() => toggleExpand(cardName)}
      className={`md:w-full w-[80%] ${colSpan} relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden transform cursor-pointer 
        ${
          expanded[cardName]
            ? "scale-105 duration-[1000ms]"
            : "scale-100 duration-500"
        } 
        transition-all ease-in-out`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30"></div>
      <div className="flex flex-col sm:flex-row p-6">
        <Image
          src={imgSrc}
          alt={title}
          className="w-full sm:w-auto sm:h-[130px] h-auto object-contain"
        />
        <div className="flex flex-col mt-4 sm:mt-0 sm:ml-4">
          <h2 className="text-2xl font-bold text-white/80">{title}</h2>
          <p className="text-lg text-white/70 mt-2">
            {getTruncatedText(description, expanded[cardName])}
          </p>
          {!expanded[cardName] && (
            <span className="text-orange-400 cursor-pointer mt-2">
              Read More
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const About: React.FC = () => {
  const [expanded, setExpanded] = useState<ExpandedState>({
    book: false,
    pc: false,
    card: false,
    finance: false,
  });

  const { language } = useLanguage();

  const toggleExpand = (cardName: keyof ExpandedState) => {
    setExpanded((prev) => {
      const newState: ExpandedState = {
        book: false,
        pc: false,
        card: false,
        finance: false,
      };
      if (!prev[cardName]) {
        newState[cardName] = true;
      }
      return newState;
    });
  };

  const textContent = {
    en: {
      header: { title: "About", description: "Me" },
      journey: {
        title: "My Journey",
        description:
          "From writing a small paragraph in Notepad back in 2020 to diving into full-stack development, my journey has been one of curiosity and growth. Over time, I’ve learned to embrace challenges as opportunities to learn and thrive. Now, I’m proud to be a dedicated web developer, constantly seeking new ways to grow and connect with others who share my passion for creating impactful digital experiences.",
      },
      ideas: {
        title: "Turning Ideas Into Code",
        description:
          "I’ve always embraced my creative side, whether it was exploring new design ideas or experimenting with user interfaces. Over the years, I’ve learned to blend creativity with technical skills, crafting websites that are functional, visually stunning, and user-friendly.",
      },
      origin: {
        title: "Where I’m From",
        description:
          "I’m proud to call Oradea, Romania, my home. It’s a city that inspires me with its vibrant culture, beautiful architecture, and a community that values creativity and growth. No matter where life takes me, Oradea will always hold a special place in my heart.",
      },
      vision: {
        title: "Forward Vision",
        description:
          "I’m passionate about continuous learning and pushing boundaries in web development. My focus is on creating accessible and innovative web experiences that empower users. As I grow, I aim to work on projects that leave a lasting impact, blending creativity with technology to make a difference in people’s lives.",
      },
    },
    ro: {
      header: { title: "Despre", description: "Mine" },
      journey: {
        title: "Călătoria Mea",
        description:
          "De la a scrie un mic paragraf în Notepad în 2020 până la a învăța dezvoltarea full-stack, călătoria mea a fost una de curiozitate și creștere. De-a lungul timpului, am învățat să îmbrățișez provocările ca oportunități de învățare și de a evolua. Acum sunt mândru să fiu un dezvoltator web dedicat, mereu în căutarea unor modalități noi de a crește și de a mă conecta cu alții care împărtășesc pasiunea mea de a crea experiențe digitale impactante.",
      },
      ideas: {
        title: "Transformarea Ideilor în Cod",
        description:
          "Am îmbrățișat întotdeauna latura mea creativă, fie că era vorba de explorarea unor noi idei de design sau de experimentarea interfețelor cu utilizatorii. De-a lungul anilor, am învățat să combin creativitatea cu abilități tehnice, realizând site-uri web funcționale, vizual uimitoare și ușor de utilizat.",
      },
      origin: {
        title: "De Unde Vin",
        description:
          "Sunt mândru să numesc Oradea, România, acasă. Este un oraș care mă inspiră prin cultura sa vibrantă, arhitectura sa frumoasă și o comunitate care apreciază creativitatea și creșterea. Indiferent unde mă va duce viața, Oradea va rămâne întotdeauna un loc special în inima mea.",
      },
      vision: {
        title: "Viziune Viitoare",
        description:
          "Sunt pasionat de învățarea continuă și de depășirea limitelor în dezvoltarea web. Focusul meu este pe crearea de experiențe web accesibile și inovative care să ofere utilizatorilor mai multă putere. Pe măsură ce cresc, îmi doresc să lucrez la proiecte care să lase un impact durabil, combinând creativitatea cu tehnologia pentru a face o diferență în viețile oamenilor.",
      },
    },
  };

  const currentText = textContent[language as "en" | "ro"];

  return (
    <div className="max-w-[1200px] mx-auto pt-[18px]" id="about">
      <h1 className="text-white text-center text-4xl sm:text-5xl max-w-[320px] mx-auto font-semibold p-4 mb-4">
        {currentText.header.title}{" "}
        <span className="text-orange-400">
          {currentText.header.description}
        </span>
      </h1>

      {/* CV Button */}
      <div className="text-white flex items-center max-w-[320px] text-center mx-auto font-normal p-4 mb-4">
        <a
          href="/CV-HODISAN-MIHAI-2025.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-700 hover:bg-orange-500 px-6 py-2 w-full font-semibold text-lg sm:text-xl rounded-xl flex gap-3 justify-center items-center"
        >
          <Download size={20} />{" "}
          {language === "ro" ? "Vizualizează CV" : "View my Resume"}
        </a>
      </div>

      {/* Cards Grid */}
      <div className="px-4 sm:px-6 md:mt-11 md:p-0 grid grid-cols-1 md:grid-cols-8 gap-6 place-items-center">
        <Card
          cardName="book"
          imgSrc={book}
          title={currentText.journey.title}
          description={currentText.journey.description}
          colSpan="md:col-span-5"
          expanded={expanded}
          toggleExpand={toggleExpand}
        />
        <Card
          cardName="pc"
          imgSrc={pc}
          title={currentText.ideas.title}
          description={currentText.ideas.description}
          colSpan="md:col-span-3"
          expanded={expanded}
          toggleExpand={toggleExpand}
        />
        <Card
          cardName="card"
          imgSrc={card}
          title={currentText.origin.title}
          description={currentText.origin.description}
          colSpan="md:col-span-3"
          expanded={expanded}
          toggleExpand={toggleExpand}
        />
        <Card
          cardName="finance"
          imgSrc={finance}
          title={currentText.vision.title}
          description={currentText.vision.description}
          colSpan="md:col-span-5"
          expanded={expanded}
          toggleExpand={toggleExpand}
        />
      </div>
    </div>
  );
};

export default About;
