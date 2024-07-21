
"use client";

import React from "react";
import { experiencesData } from "@/lib/data";
import useSectionInView from "@/hooks/useSectionInView";
import Experience from "./experience";

export default function Experiences() {
  const { ref } = useSectionInView("Experience", 0.5);

  return (
    <section ref={ref} id="experience" className="scroll-mt-28 mb-28">
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