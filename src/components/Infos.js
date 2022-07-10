import React, { useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { candidatCtx } from './../store/CandidatContext';
import fileDownload from 'js-file-download'
import axios from 'axios'
export default function Infos() {
let ctx=useContext(candidatCtx)
let {_id}=useParams()
let selectedCand= ctx.getCandidatById(_id)
let cvCandidat=selectedCand.cv
let navigate=useNavigate()
function removeC(){
    ctx.removeOneCandidat(_id)
    navigate('/cv')
}
const download=(e)=>{
e.preventDefault()
axios({
    url:"/",
    method:"GET",
    responseType:"blob"
}).then((res)=>{
    console.log(res);
    fileDownload(res.data,cvCandidat+".pdf")
})
}
console.log("received ", selectedCand)
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
                                        <strong>Prénom</strong> {selectedCand.prenom}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Nom</strong> {selectedCand.nom}
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
                                <tr>
                                    <td>
                                        <strong><button className='btn btn-dark' onClick={(e)=>download(e)}>Téléchager le CV  </button></strong>
                                    </td>
                                </tr>
                            
                            </tbody>
                        </table>
                        <div className="d-flex justify-content-center">
                            <button  className="btn btn-danger" onClick={removeC}>   Delete    </button>
                          <Link className=" btn btn-primary" to={"/cv/"+_id+"/edit"} >Update </Link>
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
