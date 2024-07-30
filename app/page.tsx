import About from "@/components/about";
import Contact from "@/components/contact";
import Experiences from "@/components/experiences";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 lg:px-10 max-w-screen-2xl mx-auto"> 
      <div className="lg:flex lg:flex-row lg:justify-between">
        <Intro />
        <About />
      </div>
      <Experiences />
      <div className="mb-4 py-5 w-full backdrop-blur">
        <h2 className="text-sm font-bold uppercase tracking-widest">Technologies</h2>
      </div>
      <div className="mb-28">
      <Skills />
      </div>
      <Projects />
      <div className="mb-4 py-5 w-full backdrop-blur">
        <h2 className="text-sm font-bold uppercase tracking-widest">Contact</h2>
      </div>
      <Contact />
    </main>
  );
}
