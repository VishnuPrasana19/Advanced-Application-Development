import React from 'react'
import "./Signup.css"
import { Link } from 'react-router-dom';
function Signup() {
  return (
    <div>
    <>
  <div className="content-wrapper">
    <div className="content">
      <div className="signup-wrapper shadow-box">
        <div className="company-details ">
          <div className="shadow" />
          <div className="wrapper-1">
            <div className="logo">
              <div className="icon-food"></div>
            </div>
            <h1 className="title">birthday bash co.</h1>
            <div className="slogan">Make your birthday a memorable one.</div>
          </div>
        </div>
        <div className="signup-form ">
          <div className="wrapper-2">
            <div className="form-title">Sign up today!</div>
            <div className="form">
              <form>
                <p className="content-item">
                  <label>
                    role
                    <input type="text" placeholder="admin or user" required="" />
                  </label>
                </p>
                <p className="content-item">
                  <label>
                    name
                    <input type="text" placeholder="Lorem ipsum" required="" />
                  </label>
                </p>
                <p className="content-item">
                  <label>
                    email address
                    <input
                      type="text"
                      placeholder="lorem@loremipsum.com"
                      name="email"
                      required=""
                    />
                  </label>
                </p>
                <p className="content-item">
                  <label>
                    password
                    <input
                      type="password"
                      placeholder="*****"
                      name="psw"
                      required=""
                    />
                  </label>
                </p>
                <p className="content-item">
                  <label>
                    Confirm-password
                    <input
                      type="password"
                      placeholder="*****"
                      name="psw"
                      required=""
                    />
                  </label>
                </p>
                <Link to="/home">
                <button type="submit" className="signup">
                  Signup{" "}
                </button>
                </Link>
                <Link to="/" className="login">
                  login
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <link
    href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
    rel="stylesheet"
  />
</>

    </div>
  )
}

export default Signup