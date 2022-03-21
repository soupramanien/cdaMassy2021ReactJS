import React, { Component } from 'react'
import {Link} from "react-router-dom";


function Canal(props){
        return (
            <div>
                <Link to="/membres">{props.canal.nom}</Link>
            </div>
        )

        }
  
export default Canal;