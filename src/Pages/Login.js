import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login">
        <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" className="login_logo" />
        <div className="login_container">
            <h3>Login In To Facebook</h3>
            <form>
                <center>
                    <input type="email" placeholder="Email or Phone number" />
                </center>
                <center>
                    <input type="password" placeholder="password" />
                </center>
                <center>
                    <button type="submit" className="login_btn">
                        Log In
                    </button>
                </center>
                <center>
                    <div className="sideinfo">
                        <h5>Forgot password ?</h5>
                        <h5 className="dot">.</h5>
                        <Link to="/signup" style={{ textDecoration: "none"}}> 
                            <h5 className="signup">Sign Up For Facebook</h5>
                        </Link> 
                    </div>
                </center>
            </form>
        </div>
    </div>
  )
}

export default Login