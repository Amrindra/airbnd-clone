import React, { useState } from "react";
import "../styles/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Login from "./Login";
import Search from "./Search";

function Header() {
  const [showSearch, setShowSearch] = useState(true);
  const [showLogin, setShowLogIn] = useState(false);
  const [showDate, setShowDate] = useState(false);

  const handleClick = () => {
    setShowLogIn(!showLogin);
  };

  const handleShowDate = () => {
    setShowDate(!showDate);
  };

  return (
    <div className="header-container">
      <div className="header-body-wrapper">
        <div className="header-on-mobile">
          <SearchIcon className="header-on-mobile-icon" />
          {/* <input type="text" placeholder="Where are you going?" /> */}
          <p>Where are you going?</p>
        </div>

        <div className="header">
          <Link to="/">
            <img
              className="header-icon"
              src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
              alt=""
            />
          </Link>

          <ul className="header-center-ul">
            <li>Places to stay</li>
            <li>Experiences</li>
            <li>Online Experiences</li>
          </ul>

          <div className="header-right">
            <p>Become a Host</p>
            <LanguageIcon />

            <div className="avatar-menu-icons" onClick={handleClick}>
              <MenuIcon className="menu-icon" />
              <Avatar className="avatar-icon" />
            </div>

            {showLogin && <Login />}
          </div>
        </div>

        <div className="header-search">
          {/* <input type="text" /> */}

          <div className="search-items">
            <h3>Location</h3>
            <p>Where are you going?</p>
          </div>

          <div className="line"></div>

          <div className="search-items" onClick={handleShowDate}>
            <h3>Check in</h3>
            <p>Add dates</p>
          </div>

          <div className="line"></div>

          <div className="search-items" onClick={handleShowDate}>
            <h3>Check out</h3>
            <p>Add dates</p>
          </div>
          {showDate && <Search />}

          <div className="line"></div>

          <div className="search-items search-items-guest">
            <div className="search-items-h-p">
              <h3>Guests</h3>
              <p>Add guests</p>
            </div>

            <div onClick={() => setShowSearch(!showSearch)}>
              {showSearch ? (
                <div className="default-search">
                  <SearchIcon className="search-icon" />
                </div>
              ) : (
                <div className="show-search">
                  <SearchIcon className="search-icon" /> <h3>Search</h3>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
