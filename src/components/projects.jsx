import React from "react";
import Card from "./card";
const Projects = () => {
  return (
    <>
      <div className="grid grid-cols-3">
        <Card
          title="Inventra"
          imageUrl="./public/landing page.png"
          description="A inventory Management application made using mern stack. In this project, I worked on both frontend and backend as it was a final year project."
        />
      </div>
    </>
  );
};

export default Projects;
