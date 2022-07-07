import React, { useContext } from 'react'
import { candidatCtx } from './../store/CandidatContext';

export default function Item(props) {
    let avatar= props.oneCandidat.avatar
    let firstname =props.oneCandidat.firstname
    let lastname= props.oneCandidat.lastname
    let candCTX= useContext(candidatCtx)
    let candSelected=candCTX.getCandidatById()
    function handleClick(c){
      candSelected(c.id)
    }
  return (
    
    <div>
    
        <li className='list-group-item' onClick={handleClick}>
            <img src={avatar} alt="avatar" style={{width:"50px"}}/> {firstname} {lastname}
        </li>
       
       
    </div>
  )
}
