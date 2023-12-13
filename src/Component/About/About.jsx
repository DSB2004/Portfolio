import React from "react";
import "./About.css";
import { AiOutlineGithub as Github } from "react-icons/ai";
import { BiLogoLinkedin as LinkedIn } from "react-icons/bi";
export default function About() {
  return (
    <>
      <div id="About">
 
          <h1>
            About Me
            <div id="about_under"></div>
          </h1>
          <p>
            I'm Damanjeet Singh, an intermediate web developer currently in my
            pursuing my Bachelors in Technology (B.Tech) in Computer Science.
            This academic journey has equipped me with a strong foundation in
            computer science principles and coding expertise. With a deep
            passion for web development, I'm dedicated to designing and building
            stable, user-friendly websites. I'm excited about the endless
            possibilities in this dynamic field and am committed to applying my
            education and skills to create innovative digital experiences. Let's
            collaborate to transform your ideas into impressive web solutions.
          </p>
          <div id="about_icon_div">
            <a href="https://github.com/DSB2004" rel="noreferrer" target='_blank' >
              <div className="about_icon" id="github">
                <Github id="about_icon_symbol" />
              </div>
            </a>
            <a href="https://www.linkedin.com/in/damanjeet-singh-8b879b295/" rel="noreferrer" target="_blank">
              <div className="about_icon" id="linkedin">
                <LinkedIn id="about_icon_symbol" />
              </div>
            </a>
          </div>
        </div>

    </>
  );
}
