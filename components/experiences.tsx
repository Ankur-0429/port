
"use client";

import React from "react";
import { experiencesData } from "@/lib/data";
import useSectionInView from "@/hooks/useSectionInView";
import Experience from "./experience";

export default function Experiences() {
  const { ref } = useSectionInView("Experience", 0.5);

  return (
    <section ref={ref} id="experience" className="mb-28">
      <div className="-mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12">
        <h2 className="text-sm font-bold uppercase tracking-widest">Experience</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {experiencesData.map((experience, index) => (
          <React.Fragment key={index}>
            <Experience {...experience} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}