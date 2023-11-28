import Project from "../components/project/Project";
import { projects } from "./../helpers/projectsList";
import '../styles/projects.css'

const Projects = () => {
  return (
      <>
        <h2 className="text-title">Projects</h2>
        <ul className="projects">
          {projects.map((project, index) => {
            return (
              <Project
                key={project.id}
                title={project.title}
                img={project.img}
                index={index}
              />
            );
          })}
        </ul>
        </>
  );
};

export default Projects;
