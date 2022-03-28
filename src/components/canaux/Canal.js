import React from 'react'
import {Link} from "react-router-dom";

  function Canal (props){

    return (
      <div class="Canaux">
        <Link id="canal" to={"/membres/"+props.canal.idCanal} >{props.canal.nom} </Link>
          <br />
			  <Link to='/efgs'>Exercices à faire en groupe</Link>
      </div>
    )
}   
        
  
export default Canal;