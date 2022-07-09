<<<<<<< HEAD
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
import Recrutes from './components/Recrutes';

function App() {
  let {id} = useParams();

  return (
    <>
      <Navbar  ></Navbar>
      <Routes>
        <Route path="/cv"element={<Cv></Cv>} ></Route>
        <Route path="/" element={<Login></Login>} />
        <Route path="/recrues" element={<Recrutes></Recrutes>} />
      
=======
import { Route, Routes, useParams } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import AddCandidatForm from "./components/AddCandidatForm";
import Infos from "./components/Infos";
import Cv from './components/Cv';
import Update from './components/Update';
import Register from "./components/Register";

function App() {
  let {id} = useParams();
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Cv></Cv>}>
        </Route>
>>>>>>> main
          <Route exact path="/cv/:_id" element={<Infos></Infos>} />
          <Route exact path="/cv/:_id/edit" element={<Update></Update>} /> 
        <Route
          path="/addNew"
<<<<<<< HEAD
          element={<AddCandidatForm></AddCandidatForm>} 
        ></Route>
        <Route path="/register" element={<Register></Register>} ></Route>
        <Route path="/logout" element={<Logout></Logout>}></Route>
=======
          element={<AddCandidatForm></AddCandidatForm>}
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
>>>>>>> main
      </Routes>
    </>
  );
}

export default App;
