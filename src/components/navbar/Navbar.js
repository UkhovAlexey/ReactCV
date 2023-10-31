import { NavLink } from "react-router-dom";
// import BtnDarkMode from "../BtnDarkMode/BtnDarkMode";
import "./navbar.css";

const activeLink = "nav-list__link nav-list__link--active";
const normalLink = "nav-list__link";

const Navbar = () => {
  return (
    <nav className="nav">
        <div className="nav-row">

          <NavLink to="/" className="logo">
            
          </NavLink>

          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                to="/contacts"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Contacts
              </NavLink>
            </li>
            {/* <li> <BtnDarkMode /></li> */}
          </ul>

        </div>
        </nav>
  );
};

export default Navbar;
