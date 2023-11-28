import { NavLink } from "react-router-dom";
import "./navbar.css";
import ToggleColorSchemeButton from "../Theme/ToggleColorSchemeButton"

const activeLink = "nav-list__link nav-list__link--active";
const normalLink = "nav-list__link";

const Navbar = () => {
  return (
    <nav className="nav">
        <div className="nav-row">
          <NavLink to="/" className="logo">
          </NavLink>
          <ul className="nav-list">
            <li >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Home
              </NavLink>
            </li>
            <li >
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Projects
              </NavLink>
            </li>
            <li >
              <NavLink
                to="/contacts"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Contacts
              </NavLink>
            </li>
            <li>
            <ToggleColorSchemeButton/>
            </li>
          </ul>
        </div>
        </nav>
  );
};

export default Navbar;
