import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='container shadow p-5 ' style={{textAlign:"center"}}>
      
           
               
      <div className='h4'> Vous êtes chercheurs d'emplois? <Link to="/addNew" className='text-danger'> Postulez sur notre site!</Link> </div> <br/>
<img src="https://www.armateam.org/wp-content/uploads/2017/10/1495051775-3.jpg"></img> <br/>
       Nous reviendrons vers vous dès que possible ! 
        </div>
      


  )
}
