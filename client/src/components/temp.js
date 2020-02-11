import React, { Fragment } from "react";
import "../css/menu.css";

const menu = () => {
  return (
    <Fragment>
      <ul className="menu-left">
        <li className="menu-item-left">
          Home
          <img className="icon" src={require("../images/home-icon.svg")}></img>
        </li>
        <li className="menu-item-left">About</li>
        <li className="menu-item-left">Showcase</li>
        <li className="menu-item-left">Search</li>
        <li className="menu-line"></li>
        <li className="menu-item-left">Profile</li>
        <li className="menu-item-left">Works</li>
        <li className="menu-item-left">Log out</li>
      </ul>

      <ul className="menu-right">
        <li className="menu-item-right"></li>
        <li className="menu-item-right">
          <img className="icon" src={require("../images/about-icon.png")}></img>
        </li>
        <li className="menu-item-right">
          <img
            className="icon"
            src={require("../images/showcase-icon.svg")}></img>
        </li>
        <li className="menu-item-right">
          <img
            className="icon"
            src={require("../images/search-icon.png")}></img>
        </li>
        <li className="menu-line"></li>
        <li className="menu-item-right">
          <img className="icon" src={require("../images/user-icon.png")}></img>
        </li>
        <li className="menu-item-right">
          <img
            className="icon"
            src={require("../images/works-icon-bright.png")}></img>
        </li>
        <li className="menu-item-right">
          <img
            className="icon"
            src={require("../images/logout-icon.png")}></img>
        </li>
      </ul>
    </Fragment>
  );
};

export default menu;
