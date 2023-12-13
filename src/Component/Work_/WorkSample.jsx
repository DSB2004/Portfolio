import React from 'react'

export default function WorkSample({ data }) {
    const [name, set_name] = React.useState()
    const [summary, set_summary] = React.useState()
    const [Link1, setLink1] = React.useState()
    const [Link2, setLink2] = React.useState()
    React.useEffect(() => {
        set_name(data.name)
        set_summary(data.summary)
        setLink1(data.link1)
        setLink2(data.link2)
    }
        , [data])
    return (
        <div id="work_sample_container">
            <h2>{name}</h2>
            <div id="work_sample_text_container">
                <p id='work_sample_summary'>
                    {summary}
                </p>
                <div id='work_sample_link'>
                    <a href={Link1} target="_blank" rel="noreferrer">Github</a>
                    <a href={Link2} target="_blank" rel="noreferrer" >
                        Link
                    </a>

                </div >

            </div>
        </div>
    )
}
