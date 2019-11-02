import React from "react";
import "./header.css";

const Header = props => (
  <div className="header">
    <div className="title">{props.children}</div>
    <div className="scores">
      Your Current Score: {props.score} Your Highest Score: {props.highscore}
    </div>
  </div>
);

export default Header;