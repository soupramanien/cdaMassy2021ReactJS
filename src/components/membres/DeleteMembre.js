import React from 'react';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

class DeleteMembre extends React.Component {
  submit = () => {
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => alert('Le membre est supprime')
        },
        {
          label: 'No',
          onClick: () => alert('Suppression annulee')
        }
      ]
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.submit}>Supprimer</button>
      </div>
    );
  }
}
    export default DeleteMembre;
