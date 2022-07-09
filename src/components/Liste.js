import Item from './Item';

export default function Liste(props) {

  return (
    <div>

        <ol>
          {
            props.Liste.map((c)=>{
              return <Item showDetails={props.showDetails} candidat={c} key={c._id} ></Item>
            })
          }
        </ol>
    </div>
  )
}
