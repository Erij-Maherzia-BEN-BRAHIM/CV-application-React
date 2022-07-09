import { useEffect, useState } from 'react';
import { Route, Routes, useParams } from "react-router-dom";
import "./App.css";
import AddCandidatForm from "./components/AddCandidatForm";
import Cv from './components/Cv';
import Infos from "./components/Infos";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Update from './components/Update';
import Logout from './components/Logout';

function App() {
  let {id} = useParams();
  const[auth, setAuth]=  useState(false)
const[auth1, setAuth1]=  useState(true)
  const isLoggedIn= async()=>{
    try{
        const res = await fetch('/isAuth',{
          method:"GET",
          headers:{
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          credentials :"include"
        })
        if(res.status===200){
          setAuth(true)
          setAuth1(false)
        }
        if(res.status===401){
          setAuth(false)
          setAuth1(true)
        }
    }
    catch(error) {
  console.log(error)
    }
  }
  useEffect(()=>{
    isLoggedIn()
  },[])
  return (
    <>
      <Navbar auth={auth1} ></Navbar>
      <Routes>
        <Route path="/cv"element={<Cv></Cv>}auth={auth1} ></Route>
        <Route path="/" element={<Login></Login>} auth={auth}>
        </Route>
          <Route exact path="/cv/:_id" element={<Infos></Infos>} auth={auth1}/>
          <Route exact path="/cv/:_id/edit" element={<Update></Update>}auth={auth1} /> 
        <Route
          path="/addNew"
          element={<AddCandidatForm></AddCandidatForm>} auth={auth1}
        ></Route>
        <Route path="/register" element={<Register></Register>} auth={auth}></Route>
        <Route path="/logout" element={<Logout></Logout>} auth={auth}></Route>
      </Routes>
    </>
  );
}

export default App;
