import React from "react";
import "./Header.css";
export default function Header() {
  // const [menu_status, set_status] = React.useState(false)
  // function menu() {
  //   const target_container = document.querySelector("#DropMenu")
  //   if (menu_status === false) {
  //     target_container.style.display = "flex"
  //     set_status(true)
  //   }
  //   else {
  //     target_container.style.display = "none"
  //     set_status(false)
  //   }
  // }
  function scroll_to(id) {
    var element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    }
  }
  return (
    <>
      <div id="Header">
        <h1 id="header_h1" onClick={() => { scroll_to("#Main") }}>Portfolio</h1>
        <ul id="header_list">
          <li className="header_list_item" onClick={() => { scroll_to("#About") }}>About Me <span id="link_under"></span></li>
          <li className="header_list_item" onClick={() => { scroll_to("#TechStack") }}>Tech Stack <span id="link_under"></span></li>
          <li className="header_list_item" onClick={() => { scroll_to("#Work") }}>Work Sample <span id="link_under"></span></li>
          <li className="header_list_item" onClick={() => { scroll_to("#Experience") }}>Past Experience<span id="link_under"></span></li>
        </ul>
        <button className="shadow__btn" onClick={() => { scroll_to("#Contact") }}>Contact Me</button>
        {/* <RiMenu2Fill id="Menu_btn" onClick={() => { menu() }} /> */}
      </div >
      {/* <div id="DropMenu" >

        <li className="header_dropmenu_list_item">About Me </li>
        <li className="header_dropmenu_list_item">Tech Stack </li>
        <li className="header_dropmenu_list_item">Work Sample </li>
        <li className="header_dropmenu_list_item">Past Experience</li>
        <button className="shadow_dropmenu_btn">Contact Me</button>

      </div> */}

    </>
  );
}
