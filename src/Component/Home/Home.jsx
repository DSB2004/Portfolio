import React from "react";
import Main from "../Main/Main";
import Header from "../Header/Header";
import About from "../About/About";
import TechStack from "../TechStack/TechStack";
import Work from "../Work_/Work";
import "./Home.css";
import Experience from "../Experience/Experience";
import Contact from "../Contact/Contact";
export default function Home() {
  return (
    <>
      <div id="Home">
        <Header />
        <Main />
        <About />
        <TechStack />
        <Work />
        <Experience />
        <Contact />  
      </div>
    </>
  );
}
