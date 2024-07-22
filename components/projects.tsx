"use client";

import React from "react";
import { projectsData } from "@/lib/data";
import Project from "./project";
import useSectionInView from "@/hooks/useSectionInView";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" aria-label="Projects" className="mb-28">
      <div className="mb-4 py-5 backdrop-blur">
        <h2 className="text-sm font-bold uppercase tracking-widest">Projects</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}