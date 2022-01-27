import React from "react";
import "./PageHead.css";

export const PageHead = (props) => {
  return (
    <div className="pageHead">
      <div className="wrapper flex">
        <h2>{props.title}</h2>
        <div className="path">
          {props.prev}
          <span>
            <img src="/img/icons/news/double-arrow.svg" alt="" />
          </span>
          {props.active}
        </div>
      </div>
    </div>
  );
};
