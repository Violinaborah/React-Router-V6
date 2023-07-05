import React from "react";
import { Link, useParams } from "react-router-dom";
import Data from "../assets/Data";
import _ from "lodash";

const SingleCourse = () => {
  const { id } = useParams();
  const gameData = _.get(Data, id);
  return (
    <div>
      <hr />
      <h2 className="card-title">Game Name</h2>
      <div className="card-text">{gameData.full_name}</div>
      <div className="game-details card-body">
        <img src={gameData.img_src} width={500} height={300} />
        <div className="download-and-moreinfo">
          <a
            href={gameData.download_link}
            target="_blank"
            className="btn btn-danger card-link download-button"
          >
            Download Game
          </a>
          <Link
            to="/dashboard"
            state={{ gameName: gameData.full_name, gameInfo: gameData.info }}
            className="card-link"
          >
            More Info
          </Link>
        </div>
        {/* <p>{gameData.info}</p> */}
      </div>
    </div>
  );
};

export default SingleCourse;
