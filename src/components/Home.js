import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="home-myshop navbar-brand">Game Center</div>
        </div>
      </nav>
      <div className="image-wrapper">
        <img
          src={"https://images7.alphacoders.com/602/602224.jpg"}
          className={"home-page-image"}
        />
        
        <Link className="btn all-games-button" to="/games">
          All Games
        </Link>
        <div className="quotes-container">
            <div className="quote1">FAILURE</div>
        </div>
      </div>

      
    </div>
  );
};

export default Home;
