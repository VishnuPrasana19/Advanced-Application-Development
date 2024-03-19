import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  const handleLogin = () => {
    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if email and password match the credentials
    if (email === 'admin@gmail.com' && password === '12345') {
      window.location.href = '/side'; // Navigate to adminhome if credentials are correct
    } else {
      window.location.href = '/home'; // Navigate to home if credentials are incorrect
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={(e) => e.preventDefault()}>
        <h1>Welcome Back</h1>
        <p>Please login to your account</p>
        <div className="input-group">
          <input
            type="text"
            id="username"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <button type="button" onClick={handleLogin}>Login</button>
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
  );
}

export default Login;
