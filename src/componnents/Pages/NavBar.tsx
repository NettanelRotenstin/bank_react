import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export default function NavBar() {
    const navigate = useNavigate()
    const logOut = () => {
        if(window.confirm(`${localStorage.getItem("userName")} you sure you want to log out?`))
        {
        localStorage.clear()
        alert('you will forward to register')
        navigate('/auth/register')
        }
    }
    return (
        <div className='nav'>
            <NavLink to={"/pages"} end>Home</NavLink>
            <NavLink to={"/pages/credit"}>Credit</NavLink>
            <NavLink to={"/pages/transactions"}>Transactions</NavLink>
            <p onClick={logOut}>Log Out</p>
        </div>
    )
}
