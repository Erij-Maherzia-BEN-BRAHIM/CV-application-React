import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../assets/rotating-card.css';
import cover from '../assets/rotating_card_thumb2.png';
import { RecrutementContext } from './../store/RecrutementContext';
export default function Details(props) {
    let rCtx=useContext(RecrutementContext)
    function recrutmentHandler(){
        if(!rCtx.isEmbauche(props.selectedCandidat._id)){
            rCtx.addToEmbauches(props.selectedCandidat)
        }else{
            rCtx.removeFromEmbauches(props.selectedCandidat._id)
        }
    }
 if(props.isSelected)
  return (

    <div>
        <div className="card-container">
    <div className="card">
        <div className="front">
            <div className="cover">
              
                <img src={cover}alt='cover' />
            </div>
            <div className="user">
                <img className="img-circle" src={props.selectedCandidat.avatar} alt="avatar"/>
            </div>
            <div className="content">
                <div className="main">
                    <h3 className="name">{props.selectedCandidat.prenom} {props.selectedCandidat.nom} </h3>
                    <p className="profession">{props.selectedCandidat.age} ans</p>

                    <p className="text-center"> {props.selectedCandidat.profession} </p>
                </div>
                <div className="footer">
                    <div className="rating">
                        <i className="fa fa-mail-forward" ></i> Auto Rotation
                    </div>
                </div>
            </div>
        </div>
        <div className="back">
            <div className="header">
                <h5 className="motto">"To be or not to be, this is my awesome motto!"</h5>
            </div>
            <div className="content">
                <div className="main">
                    <h4 className="text-center">Job Description</h4>
                    <p className="text-center">Web design, Adobe Photoshop, HTML5, CSS3, Corel and many others...</p>

                    <div className="stats-container">
                        <div className="stats">
                            <h4>235</h4>
                            <p>
                                Followers
                            </p>
                        </div>
                        <div className="stats">
                            <h4>114</h4>
                            <p>
                                Following
                            </p>
                        </div>
                        <div className="stats">
                            <h4>35</h4>
                            <p>
                                Projects
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="footer">
                <div className="social-links text-center">
                    <button  className="btn btn-success m-2" onClick={recrutmentHandler}>{rCtx.isEmbauche(props.selectedCandidat._id)?'Retirer de la liste des recrutés ':'Recruter'} </button>
                    <Link className="btn btn-info m-2" to={"/cv/"+props.selectedCandidat._id}>+ Details</Link>  
                </div>
            </div>
        </div>
    </div> 
</div>
    </div>
    
  )
  else {
    return <div>Please select the candidat that you want to see its details</div>
  }
}
