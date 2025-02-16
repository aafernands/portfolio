"use client";

import React from "react";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToSection = () => {
    const section = document.getElementById("about");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative dark:bg-black py-9 px-2 overflow-hidden min-h-screen flex items-center">
      {/* Aurora Animated Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <motion.div
          className="absolute w-[300%] h-[300%] bg-[radial-gradient(circle_at_50%_50%,rgba(255,77,77,0.3),rgba(26,115,232,0.3),rgba(142,68,173,0.3),transparent)]"
          animate={{
            x: ["0%", "0%", "0%"], // Moves left and right
            y: ["-20%", "20%", "-20%"], // Moves up and down
            scale: [1, 1.3, 1], // Pulsates in size
            rotate: [0, 0, 0], // Slight rotation effect
          }}
          transition={{
            repeat: Infinity,
            duration: 30, // Smooth aurora movement speed
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16 p-8 pb-20 sm:p-20">
        
        {/* Left: Profile Image */}
        <div className="relative flex justify-center items-center">
          <Image
            src="/aboutPhoto.png"
            alt="Alex Fernandes"
            width={500}
            height={500}
            sizes="80vw"
            className="rounded-full w-[250px] h-[250px] border-4 border-white shadow-lg"
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
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
          onClick={scrollToSection}
        >
          <FaChevronDown className="text-white text-4xl animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
}
