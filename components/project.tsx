"use client";

import { projectsData } from "@/lib/data";
import Image from "next/image";
import { LuArrowUpRight } from "react-icons/lu";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
  ariaLabelTitle
}: ProjectProps) {
  return (
    <a
      className="group mb-3 sm:mb-8 last:mb-0"
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={ariaLabelTitle}>
      <div className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="p-4 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <div className="flex items-center gap-1 font-medium dark:font-semibold dark:text-white text-black transition-all duration-300 ease-in-out">
            <span className="bg-left-bottom bg-gradient-to-r dark:from-pink-300 dark:to-pink-500 from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              {title}
            </span>
            <LuArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
          </div>
          <p className="mt-2 text-sm leading-normal text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}>
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          priority
          className="absolute hidden sm:block top-8 -right-0 w-[14.25rem] rounded-t-lg
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-[initial]"
        />
      </div>
    </a>
  );
}
