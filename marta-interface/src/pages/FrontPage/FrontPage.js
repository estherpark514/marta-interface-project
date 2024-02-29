import React from "react";
import { useNavigate } from "react-router";
import "./FrontPage.css";

function FrontPage() {
  const navigate = useNavigate();

  return (
    <div className="linepage-container">
      <div className="linepage-title-container">Marta</div>
      <div className="lines-container">
        <div className="schedule-title">View Routes Schedule</div>
        <div className="buttons-container">
          <button onClick={() => navigate("/linespage/gold")}>Gold Line</button>
          <button onClick={() => navigate("/linespage/red")}>Red Line</button>
          <button onClick={() => navigate("/linespage/blue")}>Blue Line</button>
          <button onClick={() => navigate("/linespage/green")}>
            Green Line
          </button>
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
