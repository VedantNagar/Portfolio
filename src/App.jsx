import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] selection:bg-cyan-100 selection:text-cyan-200">
        <div className="mx-auto px-8 container">
          <Navbar />
        </div>
      </div>
    </>
  );
}

export default App;
