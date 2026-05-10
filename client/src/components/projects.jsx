import React from "react";
import Card from "./card";
const Projects = () => {
  return (
    <>
      <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-2">
        <Card
          title="Inventra"
          imageUrl="/landing page.png"
          description="A inventory Management application made using mern stack. In this project, I worked on both frontend and backend as it was a final year project."
        />
        <Card
          title="User Enquiry Form"
          imageUrl="/userForm.png"
          description="A fullstack crud app for getting user enquiry and showing them. Made using MERN stack."
        />

      </div>
    </>
  );
};

export default Projects;
