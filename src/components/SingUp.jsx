import React from "react";
import "../styles/Signup.css";
import { Link } from "react-router-dom";


export default function Signup() {
  function handleSubmit(e){
    e.preventDefault()
  }
  return (
    <div className="signup-container">
      {/* Left Form */}
      <form className="signup-left mt-4" onSubmit={handleSubmit}>
        <div className="text-center">
          <h1 className="fw-bold">Create an account</h1>
          <p className="subtitle">
            its easy! just take a minute and provide the details
          </p>
        </div>
        <input type="text" placeholder="Email or Phone" />
        <input type="text" placeholder="Full Name" />
        <input type="password" placeholder="Create Password" />
        <input type="password" placeholder="Confirm Password" />

        <button>Signup</button>
        <p className="login-text">
          Already Have An Account?
          <Link to="/login" className="login-link"> Login</Link>
        </p>
      </form>
    </div>
  );
}
