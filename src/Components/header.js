import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import "../App.css";
import "../fonts";
import { IconContext } from "react-icons";

function Header() {
  // Navbar Menu Toggle
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav className={open ? "collapse" : "collapse-btn"}>
        <a className="navbar-brand" href="#">
          <img src={require("../logo.png")} alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          <IconContext.Provider
            value={{ size: "50px", className: "icon-menu" }}
          >
            <div>{open ? <GrClose /> : <FiMenu />}</div>
          </IconContext.Provider>
        </button>
        <div className="navbar-nav">
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Service</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li class="call">
              <a>
                <FontAwesomeIcon icon="phone-alt" className="icon-call" /> +123
                345 678
              </a>
            </li>
          </ul>
        </div>
        <button class="btn-signup brand-primary" type="submit">
          Sign up
        </button>
      </nav>
    </header>
  );
}

export default Header;
