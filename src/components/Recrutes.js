import React, { useContext } from 'react'
import { RecrutementContext } from './../store/RecrutementContext';
import Liste from './Liste';

export default function Recrutes() {
    const rCtx= useContext(RecrutementContext)
  return (
    <div>
{rCtx.nbEmbauches?<Liste Liste={rCtx.recrutes}></Liste>:
<h3 className='container'>You didn't recrute any candidat yet</h3> }
    </div>
  )
}
