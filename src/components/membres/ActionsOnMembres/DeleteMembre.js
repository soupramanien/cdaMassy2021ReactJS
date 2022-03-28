import React from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import {useDispatch, useSelector} from "react-redux";
import { actionCreators } from "../../../redux/store";



function DeleteMembre(props) {
  const membreCanal = useSelector(state => state.membreCanal.membresCanal)
  const dispatch = useDispatch();
  let mCanal= {
    idCanal: props.idCanal,
    idMembre:props.idpersonne
  }

  const submit = () => {
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () =>{ 


            dispatch(actionCreators.deleteMembre(mCanal))
            
            
              
          }
          },
        
        
        {
          label: 'No',
          onClick: () => alert('Suppression annulee')
        }
      ]
    });
  };

  
  
   

  return (
    <div>
      <button onClick={submit}>Supprimer</button>
    </div>
  );
  
}
export default DeleteMembre;