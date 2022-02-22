import React from "react";
import "./ServiceBox.css";

export const ServiceBox = (props) => {
    return (
        <div key={props.index} className="service_box" style={{ background: props.background }}>
            <div className="jic">
                <div className="icon flex centered">
                    <img src={props.icon} alt="" />
                </div>
                <div className="title">{props.title}</div>
            </div>
            <div className="para">{props.paragraph}</div>
        </div>
    );
};
