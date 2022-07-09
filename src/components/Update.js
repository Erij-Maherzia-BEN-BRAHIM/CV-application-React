import { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { candidatCtx } from './../store/CandidatContext';

export default function Update() {
  let {_id}=useParams()
  const candCtx= useContext(candidatCtx)
let selectedCand= candCtx.getCandidatById(_id)
const [candidat, setCandidat]=useState(selectedCand)
function handleInputChange ( event) {
  const { name, value } = event.target

  setCandidat({ ...candidat, [name]: value })
}
  let navigate=useNavigate()
  return (
    <div>
     <div>
      <form onSubmit={event => {
        event.preventDefault()
console.log('hi');
        candCtx.updateCandidat(_id,candidat);
       
     navigate('/') }
      }>
        <div className="container">
          <label htmlFor="prenom">Prénom</label>
          <input className="form-control" type="text" name="prenom" value={candidat.prenom} onChange={handleInputChange} ></input>
          <label htmlFor="nom">Nom</label>
          <input className="form-control" type="text"  name="nom" value={candidat.nom} onChange={handleInputChange}></input>
          <label htmlFor="age">Age</label>
          <input className="form-control" type="number"  name="age" value={candidat.age} onChange={handleInputChange}></input>
          <label htmlFor="profession">Profession</label>
          <input className="form-control" type="text" name="profession"value={candidat.profession} onChange={handleInputChange}></input>
          <label htmlFor="avatar">Avatar</label>
          <input className="form-control" type="url" name="avatar"value={candidat.avatar}onChange={handleInputChange} ></input>
      <button className="btn btn-success my-2" type="submit">Modifier le Candidat</button>
        </div>
      </form>
    </div>
    </div>
  )
}
