import React from 'react'
import '../styles/Signup.css'
import { Link } from 'react-router-dom'
import Swal from "sweetalert2";


export default function Login() {
  function handleSubmit(e){
    e.preventDefault()
     Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success"
    });
  }
  return (
   <div className="signup-container">
      {/* Left Form */}
      <form className="signup-left mt-4" onSubmit={handleSubmit}>
        <div className="text-center">
          <h1 className="fw-bold">Login to your account</h1>
          <p className="subtitle">
            its easy! just take a minute and provide the details
          </p>
        </div>
        <input type="text" placeholder="Email or Phone" />
        <input type="password" placeholder="Password" />

        <button>Login</button>
        <p className="login-text">
          Didn't Have An Account?
          <Link to="/signup" className="login-link"> Signup</Link>
        </p>
      </form>
    </div>
  )
}
