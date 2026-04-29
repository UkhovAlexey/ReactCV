import Project from "../components/Project/Project";
import { projects } from "./../helpers/projectsList";
import '../styles/projects.css'

const Projects = () => {
  return (
    <>
      <h2 className="text-title">Projects</h2>
      <ul className="projects">
        {projects.map((project) => (
          <Project
            key={project.id}
            id={project.id}
            title={project.title}
            img={project.img}
          />
        ))}
      </ul>
    </>
  );
};

export default Projects;
