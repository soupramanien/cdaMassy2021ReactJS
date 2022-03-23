import React from 'react'
import {Link} from "react-router-dom";

    class Canal extends React.Component{
        constructor(props){
          super(props);
          this.state={
          };

        }

          render(){
              return (
            <div>
                <Link to={"/membres/"+this.props.canal.idCanal} >{this.props.canal.nom} </Link>
            </div>
        )
    }
        }



export default Canal;