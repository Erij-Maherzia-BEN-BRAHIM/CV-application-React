<<<<<<< HEAD
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userCtx } from './../store/UserContext';

export default function Login() {
  const navigate = useNavigate();
  //let uCtx=useContext(userCtx)
   const [user, setUser] = useState({
=======
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
>>>>>>> main
    email: "",
    password: "",
  });

  // Handle Input
  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setUser({ ...user, [name]: value });
  };
<<<<<<< HEAD
 
  // Handle Login
  const handleSubmit = async (event) => {
    event.preventDefault();
    const {email, password}=user
   
     try {
=======

  // Handle Login
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = user;
    try {
>>>>>>> main
      const res = await fetch("/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
<<<<<<< HEAD
        body: JSON.stringify({  email, password }),
      });

      if (res.status === 404 || !res) {
        alert("Invalid Credentials");
        window.location.reload();

      } else {
        alert("Login Successfull");
        navigate("/cv");

      }
    } catch (error) {
      console.log(error);
    } 
  
=======
        body: JSON.stringify({     email, password   }),
      });

      if (res.status === 400 || !res) {
        alert("Invalid Credentials");
      } else {
        alert("Login Successfull");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
>>>>>>> main
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
<<<<<<< HEAD
            id="email"
            aria-describedby="emailHelp"
            name="email"
            value={user.email}
             onChange={handleChange}
=======
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={user.email}
            onChange={handleChange}
>>>>>>> main
          />
        
        </div>
        <div className="form-group">
                  <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
<<<<<<< HEAD
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}

=======
            id="exampleInputPassword1"
            name="password"
            value={user.password}
            onChange={handleChange}
>>>>>>> main
          />
        </div>
        <button
                  type="submit"
                  className="btn btn-outline-primary w-100 mt-4 rounded-pill"
                >
                  Login
                </button>
              </form>
<<<<<<< HEAD
              <p>You don't have an account? <Link to="/register">Register</Link> </p> 
=======
>>>>>>> main
            </div>
          </div>
        </div>
      </div>
    );
  }
  