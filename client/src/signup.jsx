import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const PORT = 5001

function SignUp() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:${PORT}/register`, { name, email, password })
            .then(result => {
                console.log(result)
                navigate("/login")
            })
            .catch(error => console.log(error))
    }


    return (
        <div class='d-flex justify-content-center align-items-center bg-secondary vh-100'>
            <div class="container mt-5">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div class="mb-3">
                        <label for="name" class="form-label">Your Name</label>
                        <input type="text" class="form-control" id="name" placeholder="Enter your name" required
                            onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Your Email</label>
                        <input type="email" class="form-control" id="email" placeholder="Enter your email" required
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" placeholder="Enter your password" required
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <button type="submit" class="btn btn-primary">Register</button>
                    </div>
                    <div class="mb-3">
                        <p>Already have an account?</p>
                        <Link to="/login" class="btn btn-default border w-100 bg-light">Login</Link>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default SignUp;