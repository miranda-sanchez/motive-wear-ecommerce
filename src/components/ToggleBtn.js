import React from "react";

const ToggleBtn = ({ toggled, onClick }) => {
  return (
    <button
      className={`toggle-btn ${toggled ? "toggled" : ""}`}
      onClick={onClick}
    >
      <div className="thumb"></div>
    </button>
  );
};

export default ToggleBtn;
