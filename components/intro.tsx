"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/hooks/useSectionInView";
import { useActiveSectionContext } from "@/hooks/useActiveSection";
import TypeWriter from "@/components/typewritter";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] sm:mb-0 scroll-mt-[100rem]">
      <motion.h1
        className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}>
        Ankur Ahir
      </motion.h1>
      <motion.h1
        className="mt-3 text-lg font-medium tracking-tight sm:text-xl flex flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}>
        <TypeWriter /> Developer
      </motion.h1>

      <motion.p className="my-3 max-w-xs leading-normal opacity-80">
        I build engaging and accessible web experiences.{" "}
      </motion.p>

      <motion.div
        className="flex flex-row items-center gap-2 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}>
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none transition focus:bg-gray-700 hover:bg-gray-700 active:bg-gray-600 dark:focus:bg-gray-800 dark:hover:bg-gray-800 dark:active:bg-gray-700"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}>
          Contact me{" "}
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none transition cursor-pointer borderBlack dark:bg-white/10 focus:bg-black/10 hover:bg-black/10 active:bg-black/20 dark:focus:bg-white/20 dark:hover:bg-white/20 dark:active:bg-white/30"
          href="/Resume.pdf"
          download>
          Resume{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
      </motion.div>
    </section>
  );
}
