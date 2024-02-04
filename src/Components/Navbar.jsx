import React from "react";
import "../styles/navbar.css";
import { Link, NavLink } from "react-router-dom";
import homeIcon from "../assets/icons/home.svg";
import bellIcon from "../assets/icons/bell.svg";
import bookmarkIcon from "../assets/icons/bookmark.svg";
import userIcon from "../assets/icons/user.svg";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <h1>TravelMedia.in</h1>
      </div>
      <ul className="navOptions">
        
        <li className="active">
          <NavLink to="/">
            <img src={homeIcon} alt="home" />
          </NavLink>
        </li>
        <li>
          <img src={bellIcon} alt="bell" />
        </li>
        <li>
          <img src={bookmarkIcon} alt="bookmark" />
        </li>
        <li>
          <img src={userIcon} alt="user" />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
{
  /* <li>
    <img src={homeIcon} alt="home" />   
</li>
<li>
    <img src={bellIcon} alt="bell" />
</li>
<li>
    <img src={bookmarkIcon} alt="bookmark" /> 
</li>
<li>
    <img src={userIcon} alt="user" />
</li>  */
}
