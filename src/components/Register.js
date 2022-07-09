<<<<<<< HEAD
import React, { useContext, useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { userCtx } from './../store/UserContext';

export default function Register() {
    const navigate = useNavigate();
    //let uCtx=useContext(userCtx)
=======
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();
>>>>>>> main

    const [user, setUser] = useState({
      email: "",
      password: "",
    });
    //handleInputs
    const handleInput = (event) => {
      let name = event.target.name;
      let value = event.target.value;
  
      setUser({ ...user, [name]: value });
    };
    //handleSubmit
    const handleSubmit = async (event) => {
      event.preventDefault();
      const { email, password } = user;
      try {
        const res = await fetch("/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
<<<<<<< HEAD
            email,    password
          }),
        });
        if (res.status === 404 || !res) {
          alert("Already used details, please use another email!");
          window.location.reload();

        } else {
          alert("Registration Successfully!!");
          navigate("/");
=======
            email,    password,
          }),
        });
        if (res.status === 400 || !res) {
          alert("Already used details");
        } else {
          alert("Registration Successfully!!");
          navigate("/login");
>>>>>>> main
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
              <h1 className="display-6 fw-bolder mb-5">REGISTER</h1>
              <form onSubmit={handleSubmit} method="POST">
            
                <div className="form-group">
                  <label htmlFor="email"  >Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={user.email}
                    onChange={handleInput}
                    placeholder="Enter email..."
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
                    onChange={handleInput}
                    placeholder="Password"
                  />
                </div>
               
                <button
                  type="submit"
                  className="btn btn-outline-primary w-100 mt-4 rounded-pill"
                >
                  Register
                </button>
              </form>
<<<<<<< HEAD
              <p>You already have an account? <Link to="/">Login</Link> </p> 
=======
>>>>>>> main
            </div>
          </div>
        </div>
      </div>
    );
  }
  