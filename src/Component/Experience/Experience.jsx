import React from 'react'
import "./Experience.css"
import ExperienceCard from './ExperienceCard'
import Certificate from "../../Modules/certificate.pdf"
import LOR from "../../Modules/LOR.pdf"
export default function Experience() {
    return (
        <div id="Experience">
            <h1>Past Experience</h1>
            <div id="experience_div">
                <ExperienceCard data={{ name: "1. TwiLearn", summary: "I successfully completed a web development practice course at Twi Learn, undergoing a comprehensive training internship. This program enlightened me on fundamental concepts, with a special focus on JavaScript and various other crucial aspects of web development. The acquired knowledge and hands-on experience have significantly enhanced my proficiency in constructing dynamic and responsive websites.", link: Certificate }} />
                <ExperienceCard data={{ name: "2. Make A Mine", summary: "MakeAMine represents a freelance endeavor where i was responsible for the development of their digital marketing website using React.js. The resultant platform boasts a contemporary and dynamic interface, delivering an engaging user experience. Leveraging my proficiency in React.js, I meticulously implemented responsive design, seamless navigation, and interactive features to augment the overall functionality and aesthetics. The outcome is a visually appealing and user-friendly website meticulously crafted to align with the precise requirements of MakeAMine's digital marketing services.", link: LOR }} />
            </div>
        </div >
    )
}
