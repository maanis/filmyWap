import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Feed from './components/Feed'
import Trending from './components/Trending'
import Sidebar from './components/Sidebar'

const App = () => {

  return (
    <div className='h-screen flex w-full'>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/feed/*" element={<Feed />} />
        <Route path="/trending" element={<Trending />} />
      </Routes>
    </div>
  )
}

export default App