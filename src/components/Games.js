import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Games = () => {
  return (
    <div className='container'>
      <h1>Gaming Categories</h1>
      <p className='lead'>
        Explore the vast categories of games qurated just for you.
      </p>
      <Link className='btn btn-primary me-2' to="/games/all-games">MOBA Games</Link>
      <Link className='btn btn-danger' to="/games/story-games">Story Mode Games</Link>
      <Outlet />
    </div>
  )
}

export default Games
