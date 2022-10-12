import React from "react";
import { image } from "../data/data";

function About() {
  return (<div id="about">
      <h2>About Me</h2>
      <p>Hi, my name is Ryan Pierce and I am a student at Flatiron School</p>
      <img src={image} alt="I made this" />
    </div>
  )
}

export default About;
