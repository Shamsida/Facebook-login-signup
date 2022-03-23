import React from 'react'
import './Signup.css';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className="signup">
        <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" className="signup_logo" />
        <div className="signup_container">
            <h1>Create a new account</h1>
            <p>It’s quick and easy.</p>
            < div className="hr3"/>
                <form>
                    <div className="row">
                        <input type="name" className="signup_name" placeholder="First Name" />
                        <input type="name" className="signup_name" placeholder="Last Name" />
                    </div>
                    <center>
                        <input type="email" placeholder="Mobile number or email" />
                    </center>
                    <center>
                        <input type="password" placeholder="New password" />
                    </center>

                    <h5 className="signup_date">Birthday</h5>
                    <div className="row">
                        <select className="month">
                            <option value="day">Month</option>
                            <option value="1">Jan</option>
                            <option value="2">Feb</option>
                            <option value="3">Mar</option>
                        </select>
                        <select className="date">
                            <option value="day">Date</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        <select className="year">
                            <option value="day">Year</option>
                            <option value="1">2022</option>
                            <option value="2">2021</option>
                            <option value="3">2020</option>
                        </select>
                    </div>

                    <h5 className="signup_gender">Gender</h5>
                    <div className="radiocontainer">
                        <div className="content">
                            <label>Female</label>
                            <input type="radio" name="gender" value="female" />
                        </div>
                        <div className="content">
                            <label>Male</label>
                            <input type="radio" name="gender" value="male" />
                        </div>
                        <div className="content">
                            <label>Custom</label>
                            <input type="radio" name="gender" value="custom" />
                        </div>
                    </div>

                    <p className="register_policy">
                    By clicking Sign Up, you agree to our {""} <span> Terms, Data Policy </span> and <span>Cookies Policy </span>. 
                    You may receive SMS Notifications from us and can opt out any time.
                    </p>
                    <center>
                        <button type="submit" className="register_register">
                            Sign Up
                        </button>
                    </center>
                    <center>
                         <Link to="/login"> 
                            <p className="signup_login">Already have an account?</p>
                         </Link> 
                    </center>
                </form>


        </div>
    </div>
  )
}

export default Signup