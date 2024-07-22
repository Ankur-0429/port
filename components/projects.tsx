"use client";

import React from "react";
import { projectsData } from "@/lib/data";
import Project from "./project";
import useSectionInView from "@/hooks/useSectionInView";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="mb-28">
      <div className="-mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12">
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