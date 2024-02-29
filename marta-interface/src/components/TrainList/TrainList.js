import React, { useEffect, useState } from "react";
import Train from "../Train/Train";
import "./TrainList.css";
export default function TrainList({
  currentStation,
  arrivalsdata,
  direction,
  loading,
  color,
}) {
  const [arriving, setArriving] = useState(false);
  const [scheduled, setScheduled] = useState(false);
  const [eastbound, setEastBound] = useState(false);
  const [westbound, setWestBound] = useState(false);
  const [southbound, setSouthBound] = useState(false);
  const [northbound, setNorthBound] = useState(false);

  function EastWest() {
    return (
      <div className="status-container">
        <button
          onClick={(e) => {
            buttonClicked(e);
            setArriving(!arriving ? true : false);
          }}
        >
          Arriving
        </button>
        <button
          onClick={(e) => {
            buttonClicked(e);
            setScheduled(!scheduled ? true : false);
          }}
        >
          Scheduled
        </button>
        <button
          id="east"
          onClick={(e) => {
            buttonClicked(e);
            setEastBound(!eastbound ? true : false);
          }}
        >
          Eastbound
        </button>
        <button
          id="west"
          onClick={(e) => {
            buttonClicked(e);
            setWestBound(!westbound ? true : false);
          }}
        >
          Westbound
        </button>
      </div>
    );
  }

  function buttonClicked(e) {
    if (e.target.classList.contains("selected")) {
      e.target.classList.remove("selected");
    } else {
      e.target.classList.add("selected");
    }
  }

  function NorthSouth() {
    return (
      <div className="status-container">
        <button
          onClick={(e) => {
            buttonClicked(e);
            setArriving(!arriving ? true : false);
          }}
        >
          Arriving
        </button>
        <button
          onClick={(e) => {
            buttonClicked(e);
            setScheduled(!scheduled ? true : false);
          }}
        >
          Scheduled
        </button>
        <button
          id="north"
          onClick={(e) => {
            buttonClicked(e);
            setNorthBound(!northbound ? true : false);
          }}
        >
          Northbound
        </button>
        <button
          id="south"
          onClick={(e) => {
            buttonClicked(e);
            setSouthBound(!southbound ? true : false);
          }}
        >
          Southbound
        </button>
      </div>
    );
  }

  return (
    <div className="trains">
      {direction === "E" ? EastWest() : NorthSouth()}
      {loading ? (
        <div>Loading...</div>
      ) : arrivalsdata ? (
        arrivalsdata
          .filter((arrival) => {
            return (
              (!arriving || scheduled || arrival.WAITING_TIME === "Arriving") &&
              (!scheduled || arriving || arrival.WAITING_TIME !== "Arriving") &&
              (!eastbound || westbound || arrival.DIRECTION === "E") &&
              (!westbound || eastbound || arrival.DIRECTION === "W") &&
              (!northbound || southbound || arrival.DIRECTION === "N") &&
              (!southbound || northbound || arrival.DIRECTION === "S")
            );
          })
          .filter((arrival) => {
            if (currentStation !== "all") {
              return arrival.STATION.includes(currentStation.toUpperCase());
            } else {
              return true;
            }
          })
          .map((arrival) => {
            return <Train arrival={arrival} color={color} />;
          })
      ) : (
        <div>Error fetching data</div>
      )}
    </div>
  );
}
