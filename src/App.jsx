import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Login from './components/Login'
import Feed from './components/Feed'
import Trending from './components/Trending'
import Sidebar from './components/Sidebar'
import Person from './components/Person'
import MovieDets from './components/MovieDets'
import TvDets from './components/TvDets'
import Tv from './components/Tv'
import Movies from './components/Movies'

const App = () => {
  const { pathname } = useLocation()
  const allowedRoutes = ['/feed', '/trending', '/movies', '/tv', '/person'];
  return (
    <div className='h-screen flex w-full'>
      {allowedRoutes.includes(pathname) && <Sidebar />}
      <div className="gradient w-[1px] h-full bg-zinc-300"></div>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/movie/:id" element={<MovieDets />} />
        <Route path="/tv/:id" element={<TvDets />} />
        <Route path="/person" element={<Person />} />
      </Routes>
    </div>
  )
}

export default App