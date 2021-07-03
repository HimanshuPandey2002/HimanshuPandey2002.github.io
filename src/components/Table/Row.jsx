import React from "react";

function Row({ left1, right1, left2, right2 }) {
  return (
    <div className="row">
      <div className="left">{getElements(left1, right1)}</div>
      <div className="right">{getElements(left2, right2)}</div>
    </div>
  );
}

export default Row;
