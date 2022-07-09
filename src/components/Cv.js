import React, { useContext, useEffect, useState } from "react";
import { candidatCtx } from './../store/CandidatContext';
import Details from "./Details";
import Liste from "./Liste";

export default function Cv() {
const candCTX=useContext(candidatCtx)
const [isSelected, setIsSelected]=useState(false)
const [selectedCandidat, setSelectedCandidat]=useState({})
function showDetails(c){
  console.log(c);
  setIsSelected(true)
  setSelectedCandidat(c)

}
 useEffect(()=>{
  candCTX.getAllCandidats()
  console.log("usefecct declenche ", candCTX.tabCandidats);
}
, [])
console.log('tc = ',candCTX.tabCandidats);
if (candCTX.tabCandidats.length===0){

  return <div className="container"><h1> Your list of candidats is empty</h1></div>
}else{
  console.log("usefecct declenche ", candCTX.tabCandidats);

  return (
    <div className="container">
     <div className="row">
      <div className="col-md-5">
      <Liste showDetails={showDetails} Liste={candCTX.tabCandidats}></Liste>
      
      </div>
      <div className="col-md-7">
      <Details selectedCandidat={selectedCandidat} isSelected={isSelected} ></Details>
      </div>
  
      </div>
    </div>
  );
}
}