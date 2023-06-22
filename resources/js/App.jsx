import React from 'react'
import { Routes, Route } from "react-router-dom";
import RootLayout from './RootLayout';
import Home from './Pages/Home'
import Auth from '@/Pages/Auth'
import Mytask from '@/Pages/Mytask'
import Completedtask from '@/Pages/Completedtask'


function App() {
  return (
    <div className=" w-screen">
      <Routes>
        <Route element={<RootLayout />}>
          <Route path='/' element={<Auth />} />
          <Route path='/home' element={<Home />} />
          <Route path='/mytask' element={<Mytask />} />
          <Route path='/completedtask' element={<Completedtask />} />
        </Route>
      </Routes>
    </div >
  )
}

export default App
