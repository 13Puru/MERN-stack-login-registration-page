import { useState } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5001/login', {email, password})
        .then(result => {
            console.log(result)
            if (result.data === 'Success') {
                navigate('/home')
            }
            
        })
        .catch(err => console.log(err))
    }

    return (
        <div class='d-flex justify-content-center align-items-center bg-secondary vh-100'>
            <div class="container mt-5">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <div class="mb-3">
                        <label for="email" class="form-label">Your Email</label>
                        <input type="email" class="form-control" id="email" placeholder="Enter your email" required 
                        onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" placeholder="Enter your password" required 
                        onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div class="mb-3">
                        <button type="submit" class="btn btn-primary">Login</button>
                    </div>
                    <div class="mb-3">
                        <p>Dont have an account?</p>
                        <Link to="/register" class="btn btn-default border w-100 bg-light">Register</Link>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default Login