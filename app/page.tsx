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
      <div className="-mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12">
        <h2 className="text-sm font-bold uppercase tracking-widest">Contact</h2>
      </div>
      <Contact />
    </main>
  );
}
