import styles from "./Item.module.css"
export default function Item(props) {

  return (
    
    <div className={styles.c}>
    
        <li className='list-group-item my-4' onClick={(e)=>props.showDetails(props.candidat)}>
            <img src={props.candidat.avatar} alt="avatar" style={{width:"50px", height:"50px"}}/> {props.candidat.prenom} {props.candidat.nom}
        </li>
       
       
    </div>
  )
}
