import { useParams } from "react-router-dom";
import { projects } from "./../helpers/projectsList";

import BtnRect from "../components/BtnRect/BtnRect";
import gitHubIconLinks from "./../img/iconsLinks/gitHubLinkIcon.png";
import linkIcon from "./../img/iconsLinks/linkIcon.png";
import backArrow from "./../img/iconsLinks/backArrow.png";

import '../styles/project.css'

const Project = () => {
  const { id } = useParams();
  const project = projects[id];

  return (
    <>
      {/* <main className="section"> */}
        {/* <div className="container"> */}
          <div className="project-details">
            <h1 className="text-header">{project.title}</h1>
            <img
              src={project.imgBig}
              alt="{project.title}"
              className="project-details__cover"
            />
            <div className="project-details__desc">
              <p className="text-header">{project.type}</p>
              <p className="text-normal">{project.stack}</p>
              <p className="text-normal">{project.discription}</p>
            </div>
            <div className="btnLinks">
              {project.gitHubLink && (
                <BtnRect
                  link={project.gitHubLink}
                  img={gitHubIconLinks}
                  text="Watch on GitHub"
                  target="_blank"
                />
              )}
              {project.link && (
                <BtnRect
                  link={project.link}
                  img={linkIcon}
                  text="Open website"
                  target="_blank"
                />
              )}
              <BtnRect 
                link="/projects" 
                img={backArrow}
                text="Go back"
                target="_self"
                />
            </div>
          </div>
        {/* </div> */}
      {/* </main> */}
    </>
  );
};

export default Project;
