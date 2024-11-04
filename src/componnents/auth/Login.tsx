import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate()
    const [userName, setuserName] = useState<string>('')
    const [password, setpassword] = useState<string>('')
    const handleLogin = () => {
        if (userName && password && localStorage.getItem("userName")== userName && localStorage.getItem("password")== password){
        navigate('/pages')
        }else{
            alert("check your username/password")
        }
    }
  return (
    <div className='register'>
        <h1>Login</h1>
        <div className='form'>
            <input type="text" placeholder='user name' onChange={e => setuserName(e.target.value)}/>
            <input type="password" placeholder='password' onChange={e => setpassword(e.target.value)}/>
            <button onClick={handleLogin} type="submit">Submit</button>
        </div>
        <p>Don't have an account? <Link to={'/auth/register'}>register</Link></p>
    </div>
  )
}
