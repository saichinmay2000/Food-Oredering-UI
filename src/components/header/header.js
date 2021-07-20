import React from "react";
import "./scss/header.scss";
import { NavLink } from "react-router-dom";
import { HiMenuAlt2 } from "react-icons/hi";
import { RiShoppingCartLine } from "react-icons/ri";
function Header() {
  return (
    <div className="header">
      <div className="menu">
        <p>
          <HiMenuAlt2 size={25} />
        </p>
      </div>
      <div className="lorem">
        <p className="ipsum">
          Lorem <span>Ipsum</span>
        </p>
      </div>
      <div className="cart">
        <p>
          <RiShoppingCartLine size={25} />
        </p>
      </div>
    </div>
  );
}

export default Header;
