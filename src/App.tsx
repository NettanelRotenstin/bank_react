import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Login from './componnents/auth/Login'
import Home from './componnents/Pages/Home'
import AuthRouter from './componnents/auth/AuthRouter'
import PagesRouter from './componnents/Pages/PagesRouter'
import LoginGuard from './Guards/LoginGuard'

export default function App() {

  return (
    <div className='app'>
      
      <Routes>
       <Route path='' element={<Login/>}/>
        <Route path='auth/*' element={<AuthRouter />} />
        <Route path='pages/*' element={<LoginGuard><PagesRouter /></LoginGuard>} />     
      </Routes>
    </div>
  )
}
