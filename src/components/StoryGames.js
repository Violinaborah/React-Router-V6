import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Sdata from '../assets/Sdata';
import _ from 'lodash'
const StoryGames = () => {
    const storylist = _.keys(Sdata)
    return (
    <div className='container'>
        <h2>story-games</h2>
        <ul className="list-group mb-2">
        {storylist.map(Sgames=> (
           <NavLink
           key={Sgames}
           to={`/games/story-games/${Sgames}`}
           className="list-group-item list-group-item-action"
         >
           <li className="list-group-item">{Sgames}</li>
         </NavLink>
         
        ))}
      </ul>
      <Outlet />
      
    </div>
  )
}

export default StoryGames
