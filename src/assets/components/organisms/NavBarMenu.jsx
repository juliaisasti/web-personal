import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBarMenu = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <button onClick={handleClick} className="MenuContainer__MenuButton">
        MENU
      </button>

      {toggle ? (
        <div className="Menu__Opened">
          <button
            onClick={handleClick}
            className="MenuContainer__MenuButton__Close"
          >
            CLOSE
          </button>
          <nav className="Menu__Opened__MenuLinks">
            <h3>Where do you wanna go?</h3>
            <h1>
              <Link to="/">Home</Link>
            </h1>
            <h1>
              <Link to="/about">About</Link>
            </h1>
            <h1>
              <Link to="/projects">Projects</Link>
            </h1>
            <h1>
              <Link to="/contact">Contact</Link>
            </h1>
            <button className="LoveButton">Give me love</button>
          </nav>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default NavBarMenu;
