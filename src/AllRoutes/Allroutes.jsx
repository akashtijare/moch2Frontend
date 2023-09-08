import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login  from '../Pages/Login'
import Signup from '../Pages/SignUp'
import { Dashboard } from '../Pages/Dashboard'

export const Allroutes = () => {
  return (
    <div>
      <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/' element={<Dashboard/>} />
                
      </Routes>
    </div>
  )
}
