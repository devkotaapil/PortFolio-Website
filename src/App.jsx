import React from "react";
import Navbar from "./components/navbar";
import Introduction from "./components/introduction";
import SkillStack from "./components/skillStack";
import Projects from "./components/projects";
function App() {
  return (
    <>
      <nav className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mx-4 my-4 border-b-2 border-black px-2 md:px-0">
        <Navbar />
      </nav>
      <main className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Introduction />
        <div className="border-b-2 border-black mb-0">
          <h2 className="text-center font-bold text-2xl">Used Tech</h2>
           <SkillStack/>
        </div>
       
        <div className="mt-5">
          <h2 className="text-center font-bold text-2xl md">Projects</h2>
          <Projects/>
        </div>
        
      </main>
    </>
  );
}

export default App;
