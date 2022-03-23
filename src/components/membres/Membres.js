import React from "react";
import Membre from "./Membre";
import {useSelector} from "react-redux";
import DeleteMembre from "./DeleteMembre";

function Membres({membreCanal}){
    const membres = useSelector(state => state.membre.personnes)
    return (
        <div>
            {membres.map((membre) => {
                if(membreCanal.idMembre == membre.idpersonne){
                    return  <Membre key={membre.idpersonne} membre={membre}/>
                }
               

            })
            }
            <DeleteMembre/>
            
            
        </div>
    )
}
export default Membres;

