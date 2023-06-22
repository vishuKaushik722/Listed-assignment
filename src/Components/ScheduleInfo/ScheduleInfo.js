import React from "react";
import "./ScheduleInfo.css";

const ScheduleInfo = ({bordercolor}) => {
    return (
        <div style={{borderLeft: `5px solid ${bordercolor}`}} className="schedule-main">
            <div className="sch-title">Meeting with suppliers from Saharanpur</div>
            <div className="sch-time">14.00 to 15.00</div>
            <div className="sch-loc">At Saharanpur</div>
        </div>
    )
}

export default ScheduleInfo;