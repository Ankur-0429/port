import About from "@/components/about";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4"> 
      <div className="lg:flex lg:flex-row lg:justify-between lg:gap-10">
        <Intro />
        <About />
      </div>
      <Experience />
      <Projects />
    </main>
  );
}
