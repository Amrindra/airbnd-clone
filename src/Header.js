import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LanguageIcon from "@mui/icons-material/Language";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  return (
    <div className="header-container">
      <div className="header">
        <Link to="/">
          <img
            className="header__icon"
            src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
            alt=""
          />
        </Link>

        <ul className="header-ul">
          <li>Palce to stay</li>
          <li>Experiences</li>
          <li>Online Experiences</li>
        </ul>

        <div className="header__right">
          <p>Become a Host</p>
          <LanguageIcon />
          <div className="avatar-menu-icon">
            <MenuIcon />
            <Avatar />
          </div>
        </div>
      </div>

      <div className="header__center">
        {/* <input type="text" /> */}

        <div className="search-items">
          <h3>Location</h3>
          <p>Where are you going?</p>
        </div>

        <div className="search-items">
          <h3>Check in</h3>
          <p>Add dates</p>
        </div>

        <div className="search-items">
          <h3>Check out</h3>
          <p>Add dates</p>
        </div>

        <div className="search-items search-items-guest">
          <h3>Guests</h3>
          <p>Add guests</p>
        </div>

        <div className="search-icon ">
          <SearchIcon />
        </div>
      </div>
    </div>
  );
}

export default Header;
