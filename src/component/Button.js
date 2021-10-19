import React from "react";

const Button = ({ text, color, onBtnClick }) => {
  return (
    <>
      <button
        className="btn"
        style={{ backgroundColor: color }}
        onClick={onBtnClick}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
