import React, { useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import RootLayout from './RootLayout';
import Home from './Pages/Home'
import Auth from '@/Pages/Auth'
import Mytask from '@/Pages/Mytask'
import Completedtask from '@/Pages/Completedtask'
import User from './api/User';
import { AuthProvider } from './context/Authcontext';
import { useAuth } from './context/Authcontext';
import Authroutes from './Authroutes';
import Loadingspinner from './Components/Spinners/Loadingspinner';

function App() {
  const { getUser, checkingforuser, user } = useAuth()

  useEffect(() => {
    getUser()
  }, [])

  useEffect(() => {
    console.log(checkingforuser)
  }, [checkingforuser])


  useEffect(() => {
    console.log(user)
  }, [user])


  return (
    <div className=" w-screen">
      {checkingforuser === 'fullfiled'
        ?
        <Routes>
          <Route element={<RootLayout />}>
            <Route path='/' element={<Auth />} />
            <Route element={<Authroutes />}>
              <Route path='/home' element={<Home />} />
              <Route path='/mytask' element={<Mytask />} />
              <Route path='/completedtask' element={<Completedtask />} />
            </Route>
          </Route>
        </Routes>
        :
        <div className=' flex items-center justify-center w-full h-screen'>
          <Loadingspinner />
        </div>
      }

    </div >
  )
}

export default App
