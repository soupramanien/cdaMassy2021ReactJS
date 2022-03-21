import React, { Component } from 'react'

function Membre(props){
    return (
        <div>
            <h2>{props.membre.prenom} {props.membre.nom}</h2>  
        </div>
    )
}

export default Membre;