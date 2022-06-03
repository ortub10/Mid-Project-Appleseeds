import { NavLink } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <nav className="header">
      <ul>
        <li>
          <NavLink to="../">Home</NavLink>
        </li>
        <li>
          <NavLink to="../../projects"> My Projects</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Header;
