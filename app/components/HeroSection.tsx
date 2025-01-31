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
    <section className="bg-white dark:bg-black py--10">
      <div
        className="relative grid grid-rows-[20px_1fr_0px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
        style={{ overflow: "hidden" }}
      >
        {/* Pulsating Arrow */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer "
          animate={{ y: [0, 10, 0] }} // Pulsating effect
          transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
          onClick={scrollToSection}
        >
<FaChevronDown className="text-black dark:text-white text-4xl animate-pulse shadow-blue-glow" />
</motion.div>


        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div
            className="text-gray-900 dark:text-white text-4xl font-thin font-roboto text-center sm:text-left"
          >
            <span className="text-8xl font-thin font-roboto text-center sm:text-left">
              ALEX
            </span>
            <br />
            FERNANDES
          </div>
          <p className="text-[14px]">THE JOURNEY OF A FRONT-END WEB DEVELOPER</p>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <Image
              src="/aboutPhoto.png" // Replace with your photo path
              alt="Alex Fernandes"
              width="0"
              height="0"
              sizes="100vw"
              className=" w-screen h-auto"
            />
          </div>
          <p className="text-[18px]">Welcome to my portfolio.</p>
        </main>
      </div>


    </section>






  );
};
