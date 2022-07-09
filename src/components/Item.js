export default function Item(props) {

  return (
    
    <div>
    
        <li className='list-group-item' onClick={(e)=>props.showDetails(props.candidat)}>
            <img src={props.candidat.avatar} alt="avatar" style={{width:"50px", height:"50px"}}/> {props.candidat.prenom} {props.candidat.nom}
        </li>
       
       
    </div>
  )
}
