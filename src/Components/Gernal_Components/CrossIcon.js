import React from "react";

const CrossIcon = ({ handleClickCrossIcon }) => {
  return (
    <div className="cross_icon_box " onClick={handleClickCrossIcon}>
      <svg viewBox="0 0 60 60" class="csbbM95O hiH3WVS">
        <g
          fill="none"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="8"
        >
          <path d="m5 5 50 50"></path>
          <path d="m5 55 50-50"></path>
        </g>
      </svg>
    </div>
  );
};

export default CrossIcon;
