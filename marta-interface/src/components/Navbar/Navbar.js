import React from "react";
import "./Navbar.css";

function Navbar({ stationsdata, loading, setCurrentStation }) {
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : stationsdata ? (
        <div className="navbar-container">
          <button
            className="all-stations-button"
            onClick={() => setCurrentStation("")}
          >
            All Stations
          </button>
          {stationsdata.map((station) => (
            <div key={station}>
              <button onClick={() => setCurrentStation(station)}>
                {station}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div>Error fetching data</div>
      )}
    </>
  );
}

export default Navbar;
