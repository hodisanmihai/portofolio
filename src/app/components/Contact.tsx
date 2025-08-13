"use client";

import React from "react";
import Image from "next/image";
import phone from "../assets/phone.png";
import mail from "../assets/mail.png";
import { useLanguage } from "./LanguageContext";

const Contact = () => {
  const { language } = useLanguage();

  return (
    <div className="w-full max-w-[1000px] mx-auto flex flex-col lg:flex-row text-white/70 p-4 sm:p-8 rounded-lg gap-8 md:mt-6">
      {/* Contact Info */}
      <div className="flex justify-center items-center" id="contact">
        <ul className="space-y-4">
          <a
            href="tel:0742592669"
            className="flex items-center transform transition-transform hover:scale-110"
          >
            <Image
              src={phone}
              alt="phone"
              className="w-12 h-auto sm:w-20 mr-4 sm:mr-6"
            />
            <p className="text-base sm:text-xl break-all">0742-592-669</p>
          </a>
          <a
            href="mailto:mihaihodisan@gmail.com"
            className="flex items-center transform transition-transform hover:scale-110"
          >
            <Image
              src={mail}
              alt="email"
              className="w-12 h-auto sm:w-20 mr-4 sm:mr-6"
            />
            <p className="text-base sm:text-xl break-all">
              mihaihodisan@gmail.com
            </p>
          </a>
        </ul>
      </div>

      {/* Form */}
      <div className="bg-white/10 p-4 sm:p-6 rounded-xl w-full">
        <h2 className="text-3xl sm:text-5xl font-bold text-orange-400 mb-4">
          {language === "en" ? "Let's connect" : "Hai să ne conectăm"}
        </h2>
        <p className="text-white/70 mb-6">
          {language === "en"
            ? "Send me a message and let's schedule a call"
            : "Trimite-mi un mesaj și hai să programăm un apel"}
        </p>
        <form
          action="https://formspree.io/f/xqaaglqo"
          method="POST"
          className="space-y-4"
        >
          <input
            type="text"
            name="firstName"
            className="w-full bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder={language === "en" ? "First Name" : "Prenume"}
          />
          <input
            type="text"
            name="lastName"
            className="w-full bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder={language === "en" ? "Last Name" : "Nume"}
          />
          <input
            type="email"
            name="email"
            className="w-full bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Email"
          />
          <input
            type="tel"
            name="phone"
            className="w-full bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder={language === "en" ? "Phone" : "Telefon"}
          />
          <textarea
            className="w-full bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 min-h-[120px]"
            placeholder={language === "en" ? "Your Message" : "Mesajul Tău"}
          />
          <button className="bg-orange-700 hover:bg-orange-500 text-white px-6 py-2 w-full font-semibold text-xl rounded-xl">
            {language === "en" ? "Send Message" : "Trimite Mesajul"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
