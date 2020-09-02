import React, { Component } from "react";
import { FaTwitter, FaFacebookF, FaGoogle, FaInstagram } from "react-icons/fa";
import "../App.css";
import "../fonts";

function Header() {
  return (
    <div className="footer">
      <div className="nav-items-logo">
        <img class="logo" src={require("../logo.png")} />

        <p>
          <span className="line">__</span> WE create beauty
        </p>
      </div>
      <div className="nav-items middle">
        <ul>
          <li>
            <a>Store</a>
          </li>
          <li>
            <a>Catalog</a>
          </li>

          <li>
            <a>Popular</a>
          </li>
          <li>
            <a>Features</a>
          </li>
        </ul>
        <ul>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Catalog</a>
          </li>
          <li>
            <a>Popular</a>
          </li>
          <li>
            <a>Features</a>
          </li>
        </ul>
        <ul>
          <li>
            <a>Catalog</a>
          </li>
          <li>
            <a>Catalog</a>
          </li>
          <li>
            <a>Popular</a>
          </li>
          <li>
            <a>Features</a>
          </li>
        </ul>
        <div className="nav-items icons">
          <ul>
            <li>
              <a>
                <FaTwitter />
              </a>
            </li>
            <li>
              <a>
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a>
                <FaGoogle />
              </a>
            </li>
            <li>
              <a>
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
