"use client";

import { experiencesData } from "@/lib/data";
import { LuArrowUpRight } from "react-icons/lu";

type ExperienceProps = (typeof experiencesData)[number];

export default function Experience(experience: ExperienceProps) {
  return (
    <ol className="group/list">
      <li className="bg-gray-100 max-w-[42rem] lg:min-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <a
          className="group relative h-full grid p-2 transition-all sm:grid-cols-8 md:gap-4"
          href={experience.link}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={experience.ariaLabelTitle}>
          <header
            aria-label={experience.ariaLabelDate}
            className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide sm:col-span-2 text-gray-700 dark:text-white/70">
            {experience.date}
          </header>
          <div className="z-10 sm:col-span-6 flex flex-1 flex-col">
            <h3 className="font-medium leading-snug">
              <div>
                <div className="flex items-center gap-1 font-medium dark:font-semibold dark:text-white text-black transition-all duration-300 ease-in-out">
                  <span className="bg-left-bottom bg-gradient-to-r dark:from-pink-300 dark:to-pink-500 from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    {experience.title}
                  </span>
                  <LuArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
                </div>
              </div>
            </h3>
            <p className="mt-2 text-sm leading-normal text-gray-700 dark:text-white/70">
              {experience.description}
            </p>
            <ul className="flex flex-wrap mt-6 gap-2">
              {experience.tags.map((tag, index) => (
                <li
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                  key={index}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </a>
      </li>
    </ol>
  );
}
