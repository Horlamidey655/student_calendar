import React from "react";
import logo from "./assets/Logo.svg";
import { NavLink } from "react-router-dom";

const RegisterEvent = () => {
  return (
    <div>
      <header className="form-header">
        <div className="header-logo">
          <figure>
            <img src={logo} alt="" />
          </figure>
          <h1>University Calendar</h1>
        </div>
        <div className="form-nav">
          <ul className="form-links">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/Events"}>Event</NavLink>
          </ul>
        </div>
      </header>
      <main className="register-body">
        <h2>Register for an Event</h2>
        <button className="back-btn">Back to List</button>
        <div className="event">
          <div className="event-date">
            <time dateTime="23/05/2027">September 15, 2025</time>
            <span className="event-cat">Social</span>
          </div>
          <div className="event-content">
            <h3>IAS 3.0. learn the basis of accounting</h3>
            <p className="event-content-desc">
              Let the count down begin its going to be loud and clear when i
              become the best guy in react. I can't wait to be there. Trust me,
              you are going to enjoy me
            </p>
            <p className="event-content-location">
              Location: university avenue, old bodija road
            </p>
          </div>

          <div className="event-btn">
            <p>Thursday, May 5, 2022. 4: 00pm</p>
          </div>
        </div>
        <h3>Spaces Remaining</h3>
        <div className="progress">
          <p>8/20 people left</p>
          <div className="progress-bar-container">
            <div className="progress-bar"></div>
          </div>
          <p>20 people are attending</p>
          <form action="" className="register-event-form">
            <input
              type="text"
              placeholder="Enter your Email"
              className="register-event-input"
            />
            <button className="register-btn">Register</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default RegisterEvent;
