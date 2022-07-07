import { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { candidatCtx } from './../store/CandidatContext';

export default function Update() {
  let {id}=useParams()
  const candCtx= useContext(candidatCtx)
let selectedCand= candCtx.getCandidatById(id)
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
        candCtx.updateCandidat(id,candidat)
     navigate('/') }
      }>
        <div className="container">
          <label htmlFor="firstname">Prénom</label>
          <input className="form-control" type="text" name="firstname" value={candidat.firstname} onChange={handleInputChange} ></input>
          <label htmlFor="lastname">Nom</label>
          <input className="form-control" type="text"  name="lastname" value={candidat.lastname} onChange={handleInputChange}></input>
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
