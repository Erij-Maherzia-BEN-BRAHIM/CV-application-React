import React from 'react'
import { useContext } from 'react';
import { candidatCtx } from './../store/CandidatContext';
import Item from './Item';

export default function Liste() {
    const candCTX= useContext(candidatCtx)
    let ListeCandidats= candCTX.tabCandidats;
    console.log(ListeCandidats);
  return (
    <div>
        <ol className='list-group'>
{
    ListeCandidats.map((c)=>{
        return <Item key={c.id} oneCandidat={c}></Item>
    })
}

        </ol>
    </div>
  )
}
