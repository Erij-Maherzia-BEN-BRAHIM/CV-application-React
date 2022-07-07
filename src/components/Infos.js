import React, { useContext } from 'react'
import { candidatCtx } from './../store/CandidatContext';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function Infos() {
let ctx=useContext(candidatCtx)
let {id}=useParams()
let selectedCand= ctx.getCandidatById(id)
let navigate=useNavigate()
function removeC(){
    ctx.removeOneCandidat(id)
    navigate('/')
}

return (
    <>

    <div className="d-flex justify-content-center">
    <div className="col-lg-8 push-lg-4">
        <div className="tab-content p-b-3">
            <div className="tab-pane active" id="profile">
                <div className="d-flex justify-content-center">
                    <img width="150px" height="150px" className="rounded-circle align-content-center"
                        src={selectedCand.avatar} alt="avatar"/>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h4 className="m-t-2"><span className="fa fa-clock-o ion-clock pull-xs-right"></span> Informations</h4>
                        <table className="table table-hover table-striped">
                            <tbody>
                                <tr>
                                    <td>
                                        <strong>Prénom</strong> {selectedCand.firstname}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Nom</strong> {selectedCand.lastname}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Age</strong> {selectedCand.age}  ans
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Profession</strong> {selectedCand.profession}
                                    </td>
                                </tr>
                            
                            </tbody>
                        </table>
                        <div className="d-flex justify-content-center">
                            <button  className="btn btn-danger" onClick={removeC}>   Delete    </button>
                          <Link className=" btn btn-primary" to={"/cv/"+id+"/edit"} >Update </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</>
  )
}
