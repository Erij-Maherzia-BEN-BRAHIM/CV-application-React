import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
   const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // Handle Input
  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setUser({ ...user, [name]: value });
  };
 
  // Handle Login
  const handleSubmit = async (event) => {
    event.preventDefault();
    const {email, password}=user
   
     try {
      const res = await fetch("/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({  email, password }),
      });

      if (res.status === 404 || !res) {
        alert("Invalid Credentials");
        window.location.reload();

      } else {
        alert("Login Successfull");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    } 
 
  };
  return (
    <div>
    <div className="container shadow my-5">
      <div className="row justify-content-end">
      
        <div className=" p-5">
          <h1 className="display-6 fw-bolder mb-5">LOGIN</h1>
      <form onSubmit={handleSubmit }  method="POST">
      <div className="form-group">
                  <label htmlFor="email"  >Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            name="email"
            value={user.email}
             onChange={handleChange}
          />
        
        </div>
        <div className="form-group">
                  <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}

          />
        </div>
        <button
                  type="submit"
                  className="btn btn-outline-primary w-100 mt-4 rounded-pill"
                >
                  Login
                </button>
              </form>
              <p>You don't have an account? <Link to="/register">Register</Link> </p> 
            </div>
          </div>
        </div>
      </div>
    );
  }
  