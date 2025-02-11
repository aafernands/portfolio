"use client";

import React from "react";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion"; // Direct import

export default function HeroSection() {
  const scrollToSection = () => {
    const section = document.getElementById("about");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="dark:bg-black py-16 px-6">
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16 min-h-screen p-8 pb-20 sm:p-20">
        
        {/* Left: Image */}
        <div className="flex justify-center">
          <Image
            src="/aboutPhoto.png" // Replace with your photo path
            alt="Alex Fernandes"
            width={500}
            height={500}
            sizes="80vw"
            className="rounded-lg w-full h-auto"
          />
        </div>

        {/* Right: Text Content */}
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start gap-8">
          <h1 className="text-gray-900 dark:text-white text-4xl font-thin font-roboto">
            <span className="text-8xl font-thin">ALEX</span>
            <br />
            FERNANDES
          </h1>
          <p className="text-[14px]">THE JOURNEY OF A FRONT-END WEB DEVELOPER</p>
          <p className="text-[18px]">Welcome to my portfolio.</p>
        </div>

        {/* Pulsating Arrow */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 10, 0] }} // Pulsating effect
          transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
          onClick={scrollToSection}
        >
          <FaChevronDown className="text-black dark:text-white text-4xl animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
}
