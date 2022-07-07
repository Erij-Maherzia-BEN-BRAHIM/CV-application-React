import React, { useContext } from "react";
import Details from "./Details";
import Liste from "./Liste";
import { candidatCtx } from './../store/CandidatContext';

export default function Cv() {
const candCTX=useContext(candidatCtx)
if (candCTX.tabCandidats.length===0){
  return <div className="container"><h1> Your list of candidats is empty</h1></div>
}else{
  return (
    <div className="container">
     <div className="row">
      <div className="col-md-5">
        <Liste></Liste>
      </div>
      <div className="col-md-7">
{
  candCTX.tabCandidats.map((c)=>{
    return  <Details candSelected={c} key={c.id}></Details>
  })
}

</div>
      </div>
    </div>
  );
}
}