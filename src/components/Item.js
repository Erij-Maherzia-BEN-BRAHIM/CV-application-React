
export default function Item(props) {
    /*let avatar= props.oneCandidat.avatar
    let firstname =props.oneCandidat.firstname
    let lastname= props.oneCandidat.lastname
    let candCTX= useContext(candidatCtx) */

  return (
    
    <div>
    
        <li className='list-group-item' onClick={(e)=>props.showDetails(props.candidat)}>
            <img src={props.candidat.avatar} alt="avatar" style={{width:"50px"}}/> {props.candidat.firstname} {props.candidat.lastname}
        </li>
       
       
    </div>
  )
}
