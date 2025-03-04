import React from "react";
import tvali from "../assets/Shape.png";
import "./tvali.css";
const Tvali = ({isVisible}) => {
  return (
    <div>
     <img src={tvali} className="abdi1" style={{ display: isVisible ? "block" : "none" }} alt="" />
    </div>
  );
};

export default Tvali;
