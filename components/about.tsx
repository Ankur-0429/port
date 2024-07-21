"use client";

import React from "react";
import { motion } from "framer-motion";
import useSectionInView from "@/hooks/useSectionInView";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 lg:w-1/2"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      aria-label="About Me"
      id="about">
      <p className="mb-4 text-gray-700 dark:text-white/70">
        Back in 2017, I decided to build a pathfinding visualizer using HTML and
        CSS and realized my path for web development. Fast-forward to today, and
        I had the privilage to work for a{" "}
        <a
          className="group font-medium dark:font-semibold dark:text-white text-black transition-all duration-300 ease-in-out"
          href="https://www.lockheedmartin.com/en-us/index.html" target="_blank" rel="noreferrer noopener" aria-label="huge coorporation (opens in a new tab)">
          <span className="bg-left-bottom bg-gradient-to-r dark:from-pink-300 dark:to-pink-500 from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            huge coorporation
          </span>
        </a>
        , a{" "}
        <a
          className="group font-medium dark:font-semibold dark:text-white text-black transition-all duration-300 ease-in-out"
          href="https://www.nutanix.com" target="_blank" rel="noreferrer noopener" aria-label="huge coorporation (opens in a new tab)">
          <span className="bg-left-bottom bg-gradient-to-r dark:from-pink-300 dark:to-pink-500 from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            cloud infrastructure company
          </span>
        </a>
        , and for{" "}
        <a
          className="group font-medium dark:font-semibold dark:text-white text-black transition-all duration-300 ease-in-out"
          href="https://github.com/Solutions-Challenge/Green-day-frontend.git" target="_blank" rel="noreferrer noopener" aria-label="huge coorporation (opens in a new tab)">
          <span className="bg-left-bottom bg-gradient-to-r dark:from-pink-300 dark:to-pink-500 from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            myself
          </span>
        </a>
        . 
      </p>

      <p className="text-gray-700 dark:text-white/70">
        Today, my main focus is completing my masters in computer science and engineering, with emphasis on distributed systems and GPU programming. 
      </p>
    </motion.section>
  );
}
