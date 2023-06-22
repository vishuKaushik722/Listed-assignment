import React from "react";
import "./PieDetails.css"

const PieDetails = ({pointcolor, title, percentage}) => {
    const circleStyle = {
        width: '11px',
        height: '11px',
        borderRadius: '50%',
        backgroundColor: `${pointcolor}`,
      };
    return (
        <div className="pie-det-container">
            <div className="pie-first-details">
                <div style={circleStyle}></div>
                <div className="pie-li">{title}</div>
            </div>
            <div className="percentage">
               {percentage}%
            </div>
        </div>
    )
}

export default PieDetails;