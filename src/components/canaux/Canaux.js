import React from "react";
import Canal from "./Canal";
import {useSelector} from "react-redux";
function Canaux(){
    let idPersonneConnecter =1;
    const canaux = useSelector(state => state.canal.canaux)
    return (
        <div class="navbar-nav">
            <h1> Liste des canaux </h1>
            {canaux.map((canal) => {
                    return <Canal key={canal.idCanal} canal={canal} idPersonneConnecter={idPersonneConnecter}/>
                })}
        </div>
    )
}
export default Canaux;