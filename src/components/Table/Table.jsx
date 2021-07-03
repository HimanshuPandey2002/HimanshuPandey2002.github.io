import React from "react";
import Row from "./Row";
import "../css/Table/Table.css";

function Table() {
  return (
    <div className="table">
      <Row left1={1} left2={2} right1={1} right2={2} />
      <Row left1={3} left2={5} right1={4} right2={10} />
      <Row left1={11} left2={13} right1={12} right2={18} />
      <Row left1={19} left2={28} right1={27} right2={36} />
      <Row left1={37} left2={46} right1={45} right2={54} />
      <Row left1={55} left2={72} right1={56} right2={86} />
      <Row left1={87} left2={104} right1={88} right2={118} />

      <div className="sub-table">
        <Row left1={57} left2={64} right1={63} right2={71} />
        <Row left1={89} left2={90} right1={91} right2={103} />
      </div>
    </div>
  );
}

export default Table;
