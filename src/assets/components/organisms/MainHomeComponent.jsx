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
      <div className="HomeContent">
        <button onClick={handleClick} className="MenuButton">
          MENU
        </button>

        <div className="HomeDescription">
          <h1>
            <span className="home-title">Hey!</span> I'm Julia Isasti.
          </h1>
          <h1>
            Look, just because I <span className="home-title">developer</span>{" "}
            no man a foot <span className="home-title">full-stack</span> don't
            make it right for Marsellus.
          </h1>
        </div>
      </div>

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
          <button className="LoveButton">Give me love</button>
        </nav>
      ) : (
        <></>
      )}
    </>
  );
};

export default MainHomeComponent;
