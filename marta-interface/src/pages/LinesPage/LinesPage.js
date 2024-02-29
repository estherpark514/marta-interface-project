import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import TrainList from "../../components/TrainList/TrainList";
import { useNavigate } from "react-router";
import "./LinesPage.css";

export default function LinesPage({ color }) {
  const [direction, setDirection] = useState("");
  const [stationsdata, setStationsData] = useState(null);
  const [arrivalsdata, setArrivalsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentStation, setCurrentStation] = useState("all");
  const [newcolor, setNewColor] = useState(color);

  const stationsURL = "https://midsem-bootcamp-api.onrender.com/stations/";
  const arrivalsURL = "https://midsem-bootcamp-api.onrender.com/arrivals/";

  const navigate = useNavigate();

  async function fetchData() {
    setLoading(true);
    try {
      const result = await fetch(stationsURL + newcolor);
      const fetchedData = await result.json();
      setStationsData(fetchedData);
      const results = await fetch(arrivalsURL + newcolor);
      const fetchedDatas = await results.json();
      setArrivalsData(fetchedDatas);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
    if (color === "green" || color === "blue") {
      setDirection("E");
    } else {
      setDirection("N");
    }
  }, [newcolor]);

  return loading ? (
    <div>loading...</div>
  ) : (
    <div className="container">
      <div className="color-button">
        <button
          className="gold-button"
          onClick={() => {
            setLoading(true);
            setCurrentStation("all");
            setNewColor("gold");
            navigate("/linespage/gold");
          }}
        >
          Gold
        </button>
        <button
          className="red-button"
          onClick={() => {
            setLoading(true);
            setCurrentStation("all");
            setNewColor("red");
            navigate("/linespage/red");
          }}
        >
          Red
        </button>
        <button
          className="blue-button"
          onClick={() => {
            setLoading(true);
            setCurrentStation("all");
            setNewColor("blue");
            navigate("/linespage/blue");
          }}
        >
          Blue
        </button>
        <button
          className="green-button"
          onClick={() => {
            setLoading(true);
            setCurrentStation("all");
            setNewColor("green");
            navigate("/linespage/green");
          }}
        >
          Green
        </button>
      </div>
      <div className="color-indicator">{newcolor.toUpperCase()}</div>
      <div className="columns">
        <div className="column1">
          <Navbar
            stationsdata={stationsdata}
            loading={loading}
            setCurrentStation={setCurrentStation}
          />
        </div>
        <div className="column2">
          <TrainList
            arrivalsdata={arrivalsdata}
            direction={direction}
            loading={loading}
            color={newcolor}
            currentStation={currentStation}
          />
        </div>
      </div>
    </div>
  );
}
