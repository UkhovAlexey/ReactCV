import { NavLink } from "react-router-dom";
import "./style.css";

const activeLink = "nav-list__link nav-list__link--active";
const normalLink = "nav-list__link";

const BtnRect = ({ link, img, text, target }) => {
  let output;
  if (target === "_blank") {
    output = (
      <a href={link} target={target} rel="noreferrer" className="btn-outline">
        <img src={img} alt="" />
        {text}
      </a>
    );
  } else {
    output = (
      <NavLink
        to="/projects"
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
      >
        <a href="#" target={target} rel="noreferrer" className="btn-outline">
          <img src={img} alt="" />
          {text}
        </a>
      </NavLink>
    );
  }
  return <div>{output}</div>;
};

export default BtnRect;
