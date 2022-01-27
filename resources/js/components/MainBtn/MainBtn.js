import React from "react";
// import { Link } from "react-router-dom";
import "./MainBtn.css";

export const MainBtn = ({ text }) => {
  return (
    <a href="/" style={{ width: "fit-content" }}>
      <div className="main_btn">
        <button>
          <span>{text}</span>
        </button>
        <div className="plus flex centered ">+</div>
      </div>
    </a>
  );
};
