import React from "react";
import "../Styles/Projects.css";
import ProjectCard from "./Projectcard";

const projects = [
  {
    title: "Lung Cancer Prediction",
    description: "A project that predicts lung cancer based on input features using Machine Learning.",
    image: "https://i.ibb.co/stDYLVR/Screenshot-2023-12-17-130237.png", // Replace with actual image URLs
  },
  {
    title: "Voting Platform",
    description: "A platform to allow users to vote for contestants in online competitions.",
    image: "https://i.ibb.co/stDYLVR/Screenshot-2023-12-17-130237.png",
  },
  {
    title: "E-commerce Website",
    description: "An e-commerce website for selling products online with secure authentication.",
    image: "https://i.ibb.co/stDYLVR/Screenshot-2023-12-17-130237.png",
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default Projects;
