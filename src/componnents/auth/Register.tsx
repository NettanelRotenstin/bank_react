import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Register() {
    const navigate = useNavigate()
    const [userName, setuserName] = useState<string>('')
    const [password, setpassword] = useState<string>('')
    const handleRegister = () => {
        if (!userName || !password) return
        localStorage.setItem("userName", userName)
        localStorage.setItem("password", password)
        localStorage.setItem("isLogin","true")
        alert(`${userName} registered soccessfully`)
        navigate('/pages')
    }
    return (
        <div className='register'>
            <h1>Register</h1>
            <div className='form'>
                <input type="text" placeholder='user name' value={userName} onChange={e => setuserName(e.target.value)} />
                <input type="password" placeholder='password' value={password} onChange={e => setpassword(e.target.value)} />
                <button disabled={!userName || !password} onClick={handleRegister} type="submit">Submit</button>
            </div>
            <p>already have an account? <Link to={'/'}>sign in</Link></p>
        </div>
    )
}

