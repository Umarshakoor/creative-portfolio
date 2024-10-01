import { CgNotes } from "react-icons/cg";
import { BiHome } from "react-icons/bi";
import { BsBag } from "react-icons/bs";
import { BiSolidContact } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./navmenu.css";

const navMenu = [
  {
    id: 1,
    title: "Home",
    icon: <BiHome style={{ fontSize: "15px" }} />,
    path: "/",
  },
  {
    id: 2,
    title: "Resume",
    icon: <CgNotes />,
    path: "/resume",
  },
  {
    id: 3,
    title: "Work",
    icon: <BsBag />,
    path: "/work",
  },
  {
    id: 4,
    title: "Contact",
    icon: <BiSolidContact />,
    path: "/contact",
  },
];

const Navbar = () => {
  return (
    <div className="nav-div">
      <ul className="nav-ul">
        {navMenu.map((item, i) => (
          <li key={i} className="">
            <Link to={item.path} className="nav-link">
              <div className="item-icon">{item.icon}</div>
              <div className="item-title">{item.title}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
