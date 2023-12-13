import React from "react";
import "./Main.css";
import Pic from "../../Media/Main-bg.png";

export default function Main() {
  const [text, setText] = React.useState("");
  const content = ["Frontend Developer", "Backend Developer", "Programmer"]
  const [index, set_i] = React.useState(0);
  function typewriter(banner, i) {
    let bannerLength = banner.length;
    let currentElement = banner[i];

    if (index < bannerLength) {
      let j = 0;

      const adding = setInterval(() => {
        if (j <= currentElement.length) {
          setText(currentElement.slice(0, j));
          j++;
        } else {
          clearInterval(adding)

          setTimeout(() => {
            const remove = setInterval(() => {
              if (currentElement.length > 0) {
                currentElement = currentElement.slice(0, -1);
                setText(currentElement);
              } else {
                clearInterval(remove);
                set_i(i + 1)
                // typewriter(banner, i + 1);
              }
            }, 30);
          }, 1000);
        }
      }, 30);
    } else {
      set_i(0)
      // typewriter(banner, 0);
    }
  }
  React.useEffect(() => {
    typewriter(content, index)
  }, [index]);

  return (
    <>
      <div id="Main">
        <div id="Main_info">
          <h3>Hello I am...</h3>
          <h1>Damanjeet Singh</h1>
          <h2>
            {text}
            <div id="blinking_icon"></div>
          </h2>
          <p>
            "Intermediate Programmer and Web Developer proficient in multiple
            programming languages, including JavaScript, C++, and Python, and
            experienced in utilizing frameworks like React and Express.
            Dedicated to building versatile web applications that provide an
            enhanced digital experience and continually expanding my expertise."
          </p>
          <button className="shadow__btn" id="cv_btn">
            Download CV
          </button>
        </div>
        <img src={Pic} alt="" id="main_img" />
      </div>
    </>
  );
}
