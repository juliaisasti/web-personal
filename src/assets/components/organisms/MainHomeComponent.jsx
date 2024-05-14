/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { Link } from "react-router-dom";

const MainHomeComponent = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="MenuComponent">
        <button onClick={handleClick}>MENU</button>

        {toggle ? (
          <nav className="MenuComponentList">
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
            <button>Give me love</button>
          </nav>
        ) : (
          <></>
        )}
      </div>
      <h1>Hey! I'm Julia Isasti.</h1>
      <h1>
        Look, just because I developer no man a foot full-stack don't make it
        right for Marsellus.
      </h1>
    </>
  );
};

export default MainHomeComponent;
