import React from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../../redux/store';


class AddMembre extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      const dispatch = useDispatch;
      const idpersonne ={
          idCanal: 2,
          idpersonne: 2
      }
      dispatch(actionCreators.addMembre(idpersonne))

      
      alert('Le membre a été soumis : ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Nom:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>

          <input type="submit" value="Envoyer" />

        </form>
      );
    }
    
  }
    export default AddMembre;
    
