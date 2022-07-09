import React, { useContext, useId, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { candidatCtx } from './../store/CandidatContext';

export default function AddCandidatForm() {
 const idGenerate=useId()
 const candCtx= useContext(candidatCtx)
 const navigate=useNavigate()
 const refFname= useRef('')
 const refLname= useRef('')
 const refAge= useRef('')
 const refProfession= useRef('')
 const refAvatar= useRef('')
 function submitHandler(e){
  e.preventDefault()
  let NewCandidat={
    id: idGenerate,
    prenom: refFname.current.value,
    nom: refLname.current.value,
    age: refAge.current.value,
    profession: refProfession.current.value,
    avatar: refAvatar.current.value,
  }
  candCtx.addNewCandidat(NewCandidat)
<<<<<<< HEAD
  navigate("/cv")
=======
  navigate("/")
>>>>>>> main
 }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="container">
          <label htmlFor="prenom">Prénom</label>
          <input className="form-control" type="text" ref={refFname} name="prenom"></input>
          <label htmlFor="nom">Nom</label>
          <input className="form-control" type="text" ref={refLname} name="nom"></input>
          <label htmlFor="age">Age</label>
          <input className="form-control" type="number" ref={refAge} name="age"></input>
          <label htmlFor="profession">Profession</label>
          <input className="form-control" type="text" ref={refProfession} name="profession"></input>
          <label htmlFor="avatar">Avatar</label>
          <input className="form-control" type="url" ref={refAvatar} name="avatar"></input>
      <button className="btn btn-success my-2" type="submit">Ajouter le Candidat</button>
        </div>
      </form>
    </div>
  );
}
