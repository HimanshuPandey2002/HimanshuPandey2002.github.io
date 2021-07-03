import React from "react";
import Button from "./Buttons/Button";
import buttonsValues from "./ButtonValues";
import "../css/Header/Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="head">Periodic Table</h1>
      <div className="btns">
        {buttonsValues.map((btn) => (
          <Button
            changeValue={(e) => handleValue(e)}
            value={btn.value}
            color={btn.color}
            name={btn.name}
          />
        ))}
      </div>
    </header>
  );
}

export default Header;
