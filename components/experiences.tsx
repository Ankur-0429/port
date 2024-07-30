
"use client";

import React from "react";
import { experiencesData } from "@/lib/data";
import useSectionInView from "@/hooks/useSectionInView";
import Experience from "./experience";

export default function Experiences() {
  const { ref } = useSectionInView("Experience", 0.5);

  return (
    <section ref={ref} id="experience" aria-label="Experience" className="mb-28">
      <div className="mb-4 py-5 backdrop-blur">
        <h2 className="text-sm font-bold uppercase tracking-widest">Experience</h2>
      </div>
      <div className="flex flex-wrap justify-between gap-4">
        {experiencesData.map((experience, index) => (
          <React.Fragment key={index}>
            <Experience {...experience} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}