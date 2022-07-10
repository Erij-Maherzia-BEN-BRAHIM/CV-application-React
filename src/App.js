import { useEffect, useState } from 'react';
import { Route, Routes, useParams } from "react-router-dom";
import "./App.css";
import AddCandidatForm from "./components/AddCandidatForm";
import Cv from './components/Cv';
import Home from './components/Home';
import Infos from "./components/Infos";
import Login from "./components/Login";
import Logout from './components/Logout';
import Navbar from "./components/Navbar";
import Recrutes from './components/Recrutes';
import Register from "./components/Register";
import Update from './components/Update';

function App() {
  let {id} = useParams();
  const[auth, setAuth]=useState(false)
const isLoggedIn= async()=>{
  try{
    const res=await fetch('/isAuth',{
      method:"GET",
      headers:{
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials :"include"
    })
    if(res.status===200){
      setAuth(true)
     
    }
    if(res.status===401){
      setAuth(false)
     
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
      <Navbar auth={auth} ></Navbar>
      <Routes>
        <Route path="/home"element={<Home></Home>} ></Route>
        <Route path="/cv"element={<Cv></Cv>} ></Route>
        <Route path="/"  element={<Login></Login>} />
        <Route path="/recrues" element={<Recrutes></Recrutes>} />
      
          <Route exact path="/cv/:_id" element={<Infos></Infos>} />
          <Route exact path="/cv/:_id/edit" element={<Update></Update>} /> 
        <Route
          path="/addNew"
          element={<AddCandidatForm></AddCandidatForm>} 
        ></Route>
        <Route path="/register" element={<Register></Register>} ></Route>
        <Route path="/logout" element={<Logout></Logout>}></Route>
      </Routes>
    </>
  );
}

export default App;
