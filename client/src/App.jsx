import React from "react";
import Navbar from "./components/navbar";
import Introduction from "./components/introduction";
import SkillStack from "./components/skillStack";
import Projects from "./components/projects";
import Education from "./components/education";
import Contact from "./components/contact";
function App() {
  return (
    <>
      <nav className="sticky  top-0 z-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between mx-4 my-4 py-1 px-2 md:px-0">
        <Navbar />
      </nav>
      <main className="mx-auto w-full max-w-6xl px-2 sm:px-4 md:px-6">
        <div name="introduction">
          <Introduction id="introduction" />
        </div>

        <div className="border-b-2 border-black mb-0">
          <h2 className="text-center font-bold text-xl sm:text-2xl">
            Used Tech
          </h2>
          <SkillStack />
        </div>

        <div name="projects" className="mt-5">
          <h2 className="text-center font-bold text-xl sm:text-2xl">
            Projects
          </h2>
          <Projects id="projects" />
        </div>
        <div name="education" className="mt-5">
          <Education id="education" />
        </div>

        <div name="contact" className="mt-5">
          <Contact id="contact" />
        </div>
      </main>
    </>
  );
}

export default App;
