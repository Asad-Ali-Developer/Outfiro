import { NavLink } from "react-router-dom";
import { navLinks } from "../../data";

interface Props {
  containerStyles: string;
  toggleMenu: () => void;
}

const Navbar = ({ containerStyles, toggleMenu }: Props) => {
  return (
    <div className={containerStyles}>
      {navLinks.map((link, index) => (
        <NavLink
          key={index}
          onClick={toggleMenu}
          className={({ isActive }) => `${isActive ? "active-link" : ""} px-3 py-2`}
          to={link.path}
        >
          {link.title}
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;
