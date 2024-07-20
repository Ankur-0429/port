import About from "@/components/about";
import Intro from "@/components/intro";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <div className="lg:flex lg:flex-row lg:justify-between lg:gap-10">
        <Intro />
        <About />
      </div>
    </main>
  );
}
