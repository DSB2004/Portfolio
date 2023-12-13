import React from 'react'
export default function ExperienceCard({ data }) {
    const [name, set_name] = React.useState("")
    const [summary, set_summary] = React.useState("")
    const [link, set_link] = React.useState("")
    React.useEffect(() => {
        set_name(data.name)
        set_summary(data.summary)
        set_link(data.link)
    }, [data])
    return (

        <div id="Experience_container">
            <h2>{name}</h2>
            <p>{summary}</p>

            < div id="experience_link">
                <a href={link} download={link}>Certificate / Letter of Recommendation</a>
            </div>

        </div>
    )
}
