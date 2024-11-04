import React from 'react'
import { Navigate } from 'react-router-dom'
interface childrenProp{
    children:React.ReactNode
}

export default function LoginGuard({children}:childrenProp) {
    const islogin = localStorage.getItem("isLogin")
    if(!islogin)
    {
        return <Navigate to='/'/>
    }
    return children
  return (
    <div>
      
    </div>
  )
}
