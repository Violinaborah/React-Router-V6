import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import _ from "lodash";
import Data from "../assets/Data";

const AllGames = () => {
  const gamesList = _.keys(Data);
  return (
    <div className="container">
      <hr />
      <h2>MOBA</h2>
      <p>
        Multiplayer online battle arena (MOBA) is a subgenre of strategy video
        games in which two teams of players compete against each other on a
        predefined battlefield.
      </p>
      <ul className="list-group mb-2">
        {gamesList.map((game) => (
          <NavLink
            key={game}
            to={`/games/all-games/${game}`}
            className="list-group-item list-group-item-action"
          >
            <li className="list-group-item">{game}</li>
          </NavLink>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};

export default AllGames;
