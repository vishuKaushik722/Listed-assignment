import React from "react";
import "./ScheduleInfo.css";

const ScheduleInfo = ({bordercolor, title, time, location}) => {
    return (
        <div style={{borderLeft: `5px solid ${bordercolor}`}} className="schedule-main">
            <div className="sch-title">{title}</div>
            <div className="sch-text">{time}</div>
            <div className="sch-text">{location}</div>
        </div>
    )
}

export default ScheduleInfo;