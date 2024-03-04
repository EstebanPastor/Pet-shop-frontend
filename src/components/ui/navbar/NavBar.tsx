import "./navbar.scss";

import { useState } from "react";

import { Menu, Close } from "@mui/icons-material";

import { Link } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleNavBar = () => {
    if (window.innerWidth < 500) {
      setOpen(!open);
    }
  };

  const menuStyle = open ? "menu open" : "menu";

  return (
    <div className="navbar">
      <div className="hamburger">
        <Menu />
      </div>
      <div className={menuStyle}>
        <ul>
          <Close className="close" onClick={toggleNavBar} />
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
