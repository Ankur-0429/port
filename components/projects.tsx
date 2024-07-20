"use client";

import React from "react";
import { projectsData } from "@/lib/data";
import Project from "./project";
import useSectionInView from "@/hooks/useSectionInView";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <div className="md:flex lg:flex-row md: gap-4">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}