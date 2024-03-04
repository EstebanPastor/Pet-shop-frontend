import "./navbar.scss";

import { Menu } from "@mui/icons-material";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="hamburger">
        <Menu />
      </div>
      <div className="menu">
        <ul>
          <li>
            <Link className="brand" to={"/"}>
              Pet Store
            </Link>
          </li>
          <li>
            <Link to={"/products"}>Products</Link>
          </li>
          <li>
            <Link to={"/products/add"}>Add products</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
