import React, { useContext, useState } from "react";

import Axios from "axios";
import { candidatCtx } from '../store/CandidatContext';
import { useNavigate } from 'react-router-dom';

function AddCandidatForm() {
  let candCtx=useContext(candidatCtx) 
  let navigate=useNavigate()
  const [prenom, setPrenom] = useState();
  const [nom, setNom] = useState();
  const [profession, setProfession] = useState();
  const [age, setAge] = useState();
  const [avatar, setAvatar] = useState();
  const [cv, setCv] = useState();
  const send = event => {
    const data = new FormData();
    data.append("prenom", prenom);
    data.append("nom", nom);
    data.append("profession", profession);
    data.append("age", age);
    data.append("avatar", avatar);
    data.append("cv", cv);

    Axios.post("/cv/persons", data)
      .then(res => console.log(res))
      .catch(err => console.log(err));
candCtx.addNewCandidat(data)
navigate('/cv')
  };
  return (
    <div className="App">
      <header className="App-header">
        <form action="#"  enctype="multipart/form-data" method="POST">
          <div className="flex">
            <label htmlFor="prenom">prenom</label>
            <input
              type="text"
              id="prenom"
              onChange={event => {
                const { value } = event.target;
                setPrenom(value);
                
              }}
            />
          </div>
          <div className="flex">
            <label htmlFor="nom">nom</label>
            <input
              type="text"
              id="nom"
              onChange={event => {
                const { value } = event.target;
                setNom(value);
              }}
            />
          </div>
          <div className="flex">
            <label htmlFor="profession">profession</label>
            <input
              type="text"
              id="profession"
              onChange={event => {
                const { value } = event.target;
                setProfession(value);
              }}
            />
          </div>
          <div className="flex">
            <label htmlFor="age">age</label>
            <input
              type="text"
              id="age"
              onChange={event => {
                const { value } = event.target;
                setAge(value);
              }}
            />
          </div>
          <div className="flex">
            <label htmlFor="avatar">Avatar</label>
            <input
              type="text"
              id="avatar"
              onChange={event => {
                const { value } = event.target;
                setAvatar(value);
              }}
            />
          </div>
          <div className="flex">
            <label htmlFor="cv">Joindre le CV</label>
            <input
              type="file"
              id="cv"
              accept=".pdf"
              onChange={event => {
                const cv = event.target.files[0];
                setCv(cv);
              }}
            />
          </div>
        </form>
        <button onClick={send}>Send</button>
      </header>
    </div>
  );
}

export default AddCandidatForm;