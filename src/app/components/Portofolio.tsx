"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGitAlt, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import projectphoto from "../assets/project.jpg";
import proj1Cover from "../assets/proj1.jpg";

const projects = [
    {
        title: "HM-Media",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error tempora consectetur dolor inventore quis officiis deserunt animi natus corrupti, excepturi eum numquam! Voluptatum culpa explicabo incidunt itaque ad ipsa placeat.",
        devStack: "#",
        link: "https://hm-design.ro",
        git: "https://github.com/hodisanmihai/services",
        videoSrc: "/hm-design.mov",
        phoneCover: "/mobile-cover-2.jpg"
    },
    {
        title: "Auto Service",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error tempora consectetur dolor inventore quis officiis deserunt animi natus corrupti, excepturi eum numquam! Voluptatum culpa explicabo incidunt itaque ad ipsa placeat.",
        devStack: "#",
        link: "https://premiumrentequip.ro",
        git: "https://github.com/hodisanmihai/premiumrent",
        videoSrc: "/hm-design.mov",
        phoneCover: proj1Cover,
    },

];

const Portofolio = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div className="text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-40" id="portofolio">
            <h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold my-12">
                My <span className="text-orange-400">Projects</span>
            </h1>

            <div className="max-w-[1000px] mx-auto mt-40 space-y-24">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 75 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className={`border-b border-white/20 mt-12 px-6 md:px-0 flex flex-col${index % 2 === 1 ? " md:flex-row-reverse gap-12" : " md:flex-row"}`}
                        onMouseEnter={() => !isMobile && setHoveredIndex(index)}
                        onMouseLeave={() => !isMobile && setHoveredIndex(null)}
                    >
                        <div className="space-y-2 max-w-[550px]">
                            <h2 className="text-7xl my-4 text-white/70">{`0${index + 1}`}</h2>
                            <h2 className="text-4xl">{project.title}</h2>
                            <p className="text-lg text-white/70 break-words p-4">{project.desc}</p>
                            <div className="flex flex-row md:flex-row items-start md:items-center gap-4 md:gap-6 mt-4">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-lg md:text-2xl text-orange-400 font-semibold hover:text-orange-300"
                                >
                                    <FaExternalLinkAlt />
                                </a>
                                <a
                                    href={project.git}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-white/70 hover:text-orange-400 font-semibold"
                                >
                                    <FaGitAlt className="text-2xl md:text-3xl" />
                                    <span className="text-lg md:text-xl">GitHub</span>
                                </a>
                            </div>
                        </div>

                        <div className="flex justify-center items-center relative">
                            <div className="aspect-w-3 aspect-h-2 w-full md:w-[500px]">
                                {isMobile ? (
                                    <Image
                                        src={project.phoneCover}
                                        alt={`${project.title} mobile view`}
                                        width={500}
                                        height={350}
                                        className="h-full w-full object-cover border rounded border-gray-700"
                                    />
                                ) : (
                                    hoveredIndex === index ? (
                                        <motion.video
                                            src={project.videoSrc}
                                            autoPlay
                                            loop
                                            muted
                                            className="h-full w-full object-cover border rounded border-gray-700 opacity-100 transition-opacity duration-300 ease-in-out"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.9, ease: "easeInOut" }}
                                        />
                                    ) : (
                                        <motion.div
                                            className="h-full w-full object-cover border rounded border-gray-700"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.9, ease: "easeInOut" }}
                                        >
                                            <Image
                                                src={projectphoto}
                                                alt={project.title}
                                                width={500}
                                                height={350}
                                                className="h-full w-full object-cover border rounded border-gray-700"
                                            />
                                        </motion.div>
                                    )
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Portofolio;