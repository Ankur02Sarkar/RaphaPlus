import React from "react";

const Frame = ({ image, text, para, button }) => {
  return (
    <div className="mainFrames">
      <div className="frame">
        <div className="logo"> {image}</div>
        <div className="text"> {text} </div>
        <div className="para"> {para}</div>
        <div>{button}</div>
      </div>
    </div>
  );
};

export default Frame;
