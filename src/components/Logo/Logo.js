import React from "react";
import Tilt from "react-parallax-tilt";
import "./Logo.css";
import brain from "./brain.png";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt className="logo br2 shadow-2 pa1">
        <div>
          <h1>
            <img alt="logo " src={brain} />
          </h1>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
