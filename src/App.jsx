import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import TechStack from "./components/TechStack";

function App() {
  return (
    <>
      <div className="selection:bg-cyan-100 selection:text-black">
        <div className="-z-10 fixed h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] "></div>
        </div>
        <div className="mx-auto px-6 container">
          <Navbar />
          <Hero />
          <TechStack />
          <Project />
        </div>
        <About />
      </div>
    </>
  );
}

export default App;
