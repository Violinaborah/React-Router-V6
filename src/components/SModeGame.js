import React from "react";
import { Link, useParams } from "react-router-dom";
import _ from "lodash";
import Sdata from "../assets/Sdata";

const SModeGame = () => {
  const { Sid } = useParams();
  console.log({ Sid });
  const SgameData = _.get(Sdata, Sid);

  return (
    <div>
      <hr />
      <h2 className="card-title">Game Name</h2>
      <div className="card-text">{SgameData.game_name}</div>
      <div className="genre-data">{SgameData.genre}</div>
      <div className="game-details card-body">
        <img src={SgameData.img_src} width={300} height={400} />
        <div className="download-and-moreinfo">
          <a
            href={SgameData.download_link}
            target="_blank"
            className="btn btn-danger card-link download-button"
          >
            Download Game
          </a>
          <Link
            to="/dashboard"
            state={{
              gameName: SgameData.game_name,
              gameInfo: SgameData.info,
            }}
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

export default SModeGame;
