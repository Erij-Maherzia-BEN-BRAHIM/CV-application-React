import React, { useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { candidatCtx } from './../store/CandidatContext';
import { useRef } from 'react';

export default function Update() {
  let id=useParams()
  const candCtx= useContext(candidatCtx)
  const navigate=useNavigate()
  const refFname= useRef('')
  const refLname= useRef('')
  const refAge= useRef('')
  const refProfession= useRef('')
  const refAvatar= useRef('')
  function submitHandler(e){
   e.preventDefault()
   let CandidatUpdate={
     firstname: refFname.current.value,
     lastname: refLname.current.value,
     age: refAge.current.value,
     profession: refProfession.current.value,
     avatar: refAvatar.current.value,
   }
   candCtx.updateCandidat(CandidatUpdate)
   navigate("/")
  }
  return (
    <div>
     <div>
      <form onSubmit={submitHandler}>
        <div className="container">
          <label htmlFor="firstname">Prénom</label>
          <input className="form-control" type="text" ref={refFname} name="firstname"></input>
          <label htmlFor="lastname">Nom</label>
          <input className="form-control" type="text" ref={refLname} name="lastname"></input>
          <label htmlFor="age">Age</label>
          <input className="form-control" type="number" ref={refAge} name="age"></input>
          <label htmlFor="profession">Profession</label>
          <input className="form-control" type="text" ref={refProfession} name="profession"></input>
          <label htmlFor="avatar">Avatar</label>
          <input className="form-control" type="url" ref={refAvatar} name="avatar"></input>
      <button className="btn btn-success my-2" type="submit">Modifier le Candidat</button>
        </div>
      </form>
    </div>
    </div>
  )
}
