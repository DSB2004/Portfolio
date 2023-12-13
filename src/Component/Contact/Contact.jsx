import React from 'react'
import "./Contact.css"
import { FaPhone, FaLinkedinIn, FaGithub } from "react-icons/fa"
import { BiLogoGmail } from "react-icons/bi";

export default function Contact() {
    return (
        <div id="Contact">
            <li className="Contact_list">
                <FaPhone id="contact_icon" />
                91-7827676141
            </li>
            <li className="Contact_list">
                <BiLogoGmail id="contact_icon" />
                damanjeetsingh434@gmail.com</li>
            <a href="https://www.linkedin.com/in/damanjeet-singh-8b879b295/" rel="noreferrer"  target="_blank"
                className="Contact_list">
                < FaLinkedinIn id="contact_icon" />
                LinkedIn</a>
            <a className="Contact_list" href="https://github.com/DSB2004" rel="noreferrer"  target='_blank'>
                <FaGithub id="contact_icon" />
                Github</a>

        </div>

    )
}
