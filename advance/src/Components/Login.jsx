import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom';
function Login() {
  return (
    <div>
    <div className="login-container">
  <form className="login-form">
    <h1>Welcome Back</h1>
    <p>Please login to your account</p>
    <div className="input-group">
      <input
        type="text"
        id="username"
        name="username"
        placeholder="Username"
        required=""
      />
    </div>
    <div className="input-group">
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        required=""
      />
    </div>
    <button type="submit">Login</button>
    <div className="bottom-text">
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
      <p>
        <a href="#">Forgot password?</a>
      </p>
    </div>
  </form>
</div>

    </div>
  )
}

export default Login