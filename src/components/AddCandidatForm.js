import React, { useContext, useId, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { candidatCtx } from '../store/CandidatContext';
export default function AddCandidatForm() {
 const idGenerate=useId()
/*   const [formInput, setFormInput] = useState({
  _id:idGenerate,  
  prenom: '',
  nom: '',
  profession: '',
  age: '',
  avatar: '',
  cv: '',

})
function prenomHandler(e) {
  e.preventDefault();
  console.log(e.target.value);
  setFormInput(prev => {
      return {
          ...prev,
          prenom: e.target.value
      }
  }
  );
}
function nomHandler(e) {
  e.preventDefault();
  console.log(e.target.value);
  setFormInput(prev => {
      return {
          ...prev,
          nom: e.target.value
      }
  }
  );
}
function ageHandler(e) {
  e.preventDefault();
  console.log(e.target.value);
  setFormInput(prev => {
      return {
          ...prev,
          age: e.target.value
      }
  }
  );
}
function professionHandler(e) {
  e.preventDefault();
  console.log(e.target.value);
  setFormInput(prev => {
      return {
          ...prev,
          profession: e.target.value
      }
  }
  );
}
function avatarHandler(e) {
  e.preventDefault();
  console.log(e.target.value);
  setFormInput(prev => {
      return {
          ...prev,
          avatar: e.target.value
      }
  }
  );
} 
function cvHandler(e) {
  e.preventDefault();
  console.log(e.target.value);
  setFormInput(prev => {
      return {
          ...prev,
          cv: e.target.value
      }
  }
  );
}  */
 const candCtx= useContext(candidatCtx)
 const navigate=useNavigate()
  const refFname= useRef('')
 const refLname= useRef('')
 const refAge= useRef('')
 const refProfession= useRef('')
 const refAvatar= useRef('')
 const refCv= useRef('') 
 function submitHandler(e){
  e.preventDefault()
  let NewCandidat={
    id: idGenerate,
    prenom: refFname.current.value,
    nom: refLname.current.value,
    age: refAge.current.value,
    profession: refProfession.current.value,
    avatar: refAvatar.current.value,
    cv: refCv.current.files[0]
    
  } 

  candCtx.addNewCandidat(NewCandidat)
  navigate("/cv")
 }
  return (
    <div className="container shadow p-3">
      <h3 className="display-3" style={{color:"green"}}>Candidature spontannée</h3>
      <form onSubmit={submitHandler} method="post" encType="multipart/form-data">
        <div >
          <label htmlFor="prenom">Prénom</label>
          <input className="form-control mb-4" type="text" ref={refFname} name="prenom"></input>
          <label htmlFor="nom">Nom</label>
          <input className="form-control mb-4" type="text" ref={refLname}  name="nom"></input>
          <label htmlFor="age">Age</label>
          <input className="form-control mb-4" type="number"ref={refAge}  name="age"></input>
          <label htmlFor="profession">Profession</label>
          <input className="form-control mb-4" type="text"ref={refProfession} name="profession"></input>
          <label htmlFor="avatar">Avatar</label>
          <input className="form-control mb-4" type="url" ref={refAvatar} name="avatar"></input>
          <label htmlFor="cv">Joindre le CV</label>
          <input className="form-control mb-4" type="file" ref={refCv} name="cv"accept=".pdf" ></input>
      <button className="btn btn-outline-success form-control rounded-pill" type="submit">Postuler</button>
        </div>
      </form> 
     {/*  <form onSubmit={submitHandler} action="/cvs" method="post" encType="multipart/form-data">
        <div className="container">
          <label htmlFor="prenom">Prénom</label>
          <input className="form-control" type="text" onChange={prenomHandler} name="prenom"></input>
          <label htmlFor="nom">Nom</label>
          <input className="form-control" type="text" onChange={nomHandler} name="nom"></input>
          <label htmlFor="age">Age</label>
          <input className="form-control" type="number" onChange={ageHandler} name="age"></input>
          <label htmlFor="profession">Profession</label>
          <input className="form-control" type="text" onChange={professionHandler} name="profession"></input>
          <label htmlFor="avatar">Avatar</label>
          <input className="form-control" type="url" onChange={avatarHandler} name="avatar"></input>
          <label htmlFor="cv">Joindre le CV</label>
          <input className="form-control" type="file" name="cv"accept=".pdf" onChange={e=>{const cv =e.target.files[0];
          setFormInput(cv)}}></input>
      <button className="btn btn-success my-2" type="submit">Ajouter le Candidat</button>
        </div>
      </form> */}
    </div>
  );
}
