import About from "@/components/about";
import Experiences from "@/components/experiences";
import Intro from "@/components/intro";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4"> 
      <div className="lg:flex lg:flex-row lg:justify-around">
        <Intro />
        <About />
      </div>
      <Experiences />
      <Projects />
    </main>
  );
}
