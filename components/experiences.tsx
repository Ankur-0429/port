"use client";

import React from "react";
import { experiencesData } from "@/lib/data";
import useSectionInView from "@/hooks/useSectionInView";
import Experience from "./experience";

export default function Experiences() {
  const { ref } = useSectionInView("Experience", 0.5);

  return (
    <section ref={ref} id="experience" className="scroll-mt-28 mb-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {experiencesData.map((experience, index) => (
          <Experience key={index} {...experience} />
        ))}
      </div>
    </section>
  );
}
