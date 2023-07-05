import React from "react";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{location.state.gameName}</h5>
        <p className="card-text">{location.state.gameInfo}</p>
      </div>
    </div>
  );
};

export default Dashboard;
