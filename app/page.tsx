import About from "@/components/about";
import Contact from "@/components/contact";
import Experiences from "@/components/experiences";
import Intro from "@/components/intro";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 lg:px-10"> 
      <div className="lg:flex lg:flex-row lg:justify-between">
        <Intro />
        <About />
      </div>
      <Experiences />
      <Projects />
      <div className="mb-4 py-5 w-full backdrop-blur">
        <h2 className="text-sm font-bold uppercase tracking-widest">Contact</h2>
      </div>
      <Contact />
    </main>
  );
}
