import React from "react";
import aboutpic from "../../../../public/about-pic.jpeg";

const About = () => {
  return (
    <div className="AboutContainer">
      <img
        src={aboutpic}
        alt="It's a-me!"
        className="AboutContainer__ProfilePicture"
      />
      <div className="AboutContainer__TextContainer">
      <p className="AboutContainer__Text">
        Normally, both your asses would be dead as fucking fried chicken, but
        you happen to pull this shit while in a transitional period so I dont
        wanna kill you, I wanna help you. But I cant give you this case, it don
        belong to me. Besides, ve already been through too much shit this
        morning over this case to hand it over to your dumb ass.Do you see any
        Teletubbies in here? Do you see a slender plastic tag clipped to my
        shirt with my name printed on it? Do you see a little Asian child with a
        blank expression on his face sitting outside on a mechanical helicopter
        that shakes when you put quarters in it? No? Well, thats what you see at
        a toy store. And you must think youre in a toy store, because youre here
        shopping for an infant named Jeb.
      </p>
      </div>
      
    </div>
  );
};

export default About;
