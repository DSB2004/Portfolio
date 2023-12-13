import React from "react";
import "./TechStack.css";
import TechStackCard from "./TechStackCard";
import C from "../../Media/c++.png";
import C1 from "../../Media/c.png";
import JS from "../../Media/js.png";
import Reacticon from "../../Media/react.png";
export default function TechStack() {
  return (
    <div id="TechStack">
      <div id="Tech_info">
        <h1>Tech Palette</h1>
        <p>
          My technical skills and proficiency are the foundation of my ability
          to create exceptional web solutions. With a strong foundation in
          computer science, I am well-versed in a range of technologies and
          tools that empower me to bring your digital vision to life. Below,
          you'll find an overview of my technical stack, demonstrating my
          capabilities in web development.
        </p>
      </div>
      <div id="techlist">
        <TechStackCard data={{ pic: C1, name: "C programming" }} />
        <TechStackCard data={{ pic: C, name: "C++ programming" }} />
        <TechStackCard data={{ pic: Reacticon, name: "React Development" }} />
        <TechStackCard data={{ pic: JS, name: "NodeJS Development" }} />
      </div>
    </div>
  );
}
