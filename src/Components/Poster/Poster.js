import React from "react";
import "./Poster.css"

const Poster = ({theme, icon, count, text}) => {
    return (
        <div style={{backgroundColor: `${theme}`}} className="poster-container">
            <img className="poster-icon" src={`${icon}.png`} />
            <div className="poster-heading">{text}</div>
            <div className="poster-count">{count}</div>
        </div>
    )
}

export default Poster;