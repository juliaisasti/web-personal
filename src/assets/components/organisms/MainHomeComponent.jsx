/* eslint-disable react/no-unescaped-entities */
import React from "react";

const MainHomeComponent = () => {
  return (
    <>
      <div className="HomeContent">
        <div className="HomeContent__HomeDescription">
          <h1 className="HomeContent__HomeDescription__big-fkn-title">
            <span className="home-title">Hey!</span> I'm Julia Isasti.
          </h1>
          <h1 className="HomeContent__HomeDescription__big-fkn-title">
            Look, just because I <span className="home-title">developer </span>
            no man a foot <span className="home-title">full-stack</span> don't
            make it right for Marsellus.
          </h1>
        </div>
      </div>
    </>
  );
};

export default MainHomeComponent;
