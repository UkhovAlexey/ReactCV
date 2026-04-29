import { NavLink } from "react-router-dom";
import "./project.css";

const Project = ({ id, title, img }) => {
  return (
    <NavLink to={`/project/${id}`}>
      <li className="project">
        <img src={img} alt={title} className="project__img" />
        <h3 className="project-caption text-normal">{title}</h3>
      </li>
    </NavLink>
  );
};

export default Project;
