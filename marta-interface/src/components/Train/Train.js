import React from "react";
import "./Train.css";

function Train({ arrival }) {
  return (
    <div className="info-container">
      <div className="station-info">
        <p>
          {arrival.STATION} {">>"} {arrival.DESTINATION}
        </p>
        <div className="section-details">
          <p>{arrival.DELAY === "T0S" ? "Delayed" : "On Time"}</p>
          <div>{arrival.WAITING_TIME}</div>
        </div>
      </div>
    </div>
  );
}

export default Train;
