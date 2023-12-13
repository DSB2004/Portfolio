import React from 'react'

export default function TechStackcard({ data }) {
    return (
        <div>
            <div class="e-card playing">
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>

                <div class="infotop">
                    <img src={data.pic} alt="" />
                    {data.name}
                </div>
            </div>
        </div>
    )
}
