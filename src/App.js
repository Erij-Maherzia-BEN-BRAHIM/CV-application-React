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
