import React from 'react'
import '../assets/rotating-card.css'
import cover from '../assets/rotating_card_thumb2.png'
import { Link } from 'react-router-dom';
export default function Details(props) {
  let avatar= props.candSelected.avatar
  let firstname =props.candSelected.firstname
  let lastname= props.candSelected.lastname
  let age= props.candSelected.age
  let profession= props.candSelected.profession
 
  return (
    <div>
        <div className="card-container">
    <div className="card">
        <div className="front">
            <div className="cover">
              
                <img src={cover}alt='cover' />
            </div>
            <div className="user">
                <img className="img-circle" src={avatar} alt="avatar"/>
            </div>
            <div className="content">
                <div className="main">
                    <h3 className="name">{firstname} {lastname} </h3>
                    <p className="profession">{age} ans</p>

                    <p className="text-center"> {profession} </p>
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
                    <button  className="btn btn-success m-2">Recruter</button>
                    <Link className="btn btn-info m-2" to={"/cv/"+props.candSelected.id}>+ Details</Link> 
                </div>
            </div>
        </div>
    </div> 
</div>
    </div>
    
  )
}
