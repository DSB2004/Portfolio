import React from "react";
import "./Work.css"
import WorkSample from "./WorkSample";
export default function Work() {
  return (
    <>
      <div id="Work">
        <div id="work_intro">
          <h1>Work Sample</h1>
          <p>Embark on a journey through my projects, where I've transformed knowledge into action. These samples embody the fusion of theory and practice, showcasing my ability to translate ideas into impactful solutions. Each creation reflects my dedication to leveraging expertise in Web development. Dive in and witness the tangible results of applying knowledge to innovate and build. Welcome to a testament of my skills in action.</p>
        </div>
        <div id="Work_Sample_div">
          <WorkSample data={{ name: "1. WebChat", summary: "Web-based messaging platform that seamlessly blends the robust capabilities of React.js for the frontend and Express.js for the backend. This dynamic fusion facilitates a sophisticated user experience by harnessing the power of WebSocket and Server-Sent Events (SSE) to guarantee not just real-time, but near-instantaneous communication.", link1: "https://github.com/DSB2004/WebChat", link2: "https://github.com/DSB2004/WebChat" }}></WorkSample>
          <WorkSample data={{ name: "2. Trade Wizard", summary: "Introducing Trade Wizard, your go-to platform for a comprehensive stock trading experience. By tapping into cutting-edge stock APIs, Trade Wizard delivers near real-time data, featuring live quotes, in-depth yearly graphical analytics, and curated market news.", link1: "https://github.com/DSB2004/Trade-Wizard", link2: "https://github.com/DSB2004/Trade-Wizard" }}> </WorkSample>
          <WorkSample data={{ name: "3. Fitness Freak", summary: "Welcome to Fitness Freak, your go-to destination for a comprehensive fitness journey. Leveraging engaging YouTube videos, Fitness Freak brings you expert-guided workouts, including yoga sessions and daily diet guides. Tailor your fitness routine by selecting from various categories, fostering a personalized and dynamic approach to well-being. ", link1: "https://github.com/DSB2004/Fitness-Freak-2.0", link2: "https://github.com/DSB2004/Fitness-Freak-2.0" }}></WorkSample>
          <WorkSample data={{
            name: "4. MakeAMine", summary:
              "Guided the end-to-end development of MakeAMine's digital marketing website using React.js. Engineered a contemporary and dynamic interface, implementing responsive design, seamless navigation, and interactive features. The result is a captivating user experience that seamlessly blends functionality and aesthetics on this engaging platform."
            , link1: "https://github.com/DSB2004/MakeAMine", link2: "https://makeamine.com/"
          }}></WorkSample>
        </div>
      </div>
    </>
  );
}
