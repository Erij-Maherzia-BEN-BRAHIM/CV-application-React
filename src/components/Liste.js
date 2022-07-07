import Item from './Item';

export default function Liste(props) {
//const candCTX= useContext(candidatCtx)
   //let ListeCandidats= candCTX.tabCandidats;
  return (
    <div>
      {/*   <ol className='list-group'>
{
    ListeCandidats.map((c)=>{
        return <Item key={c.id} oneCandidat={c}></Item>
    })
}

        </ol> */}
        <ol>
          {
            props.Liste.map((c)=>{
              return <Item showDetails={props.showDetails} candidat={c} key={c.id} ></Item>
            })
          }
        </ol>
    </div>
  )
}
