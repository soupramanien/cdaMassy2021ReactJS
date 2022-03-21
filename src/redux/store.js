import { createStore } from "redux";

const initialState = {
    canal: {
        canaux: [
            { idCanal: 1, nom: 'CANAL N°1'},
            { idCanal: 2, nom: 'CANAL N°2'},
            { idCanal: 3, nom: 'CANAL N°3'},
            { idCanal: 4, nom: 'CANAL N°4'}
        ]
    },
    membre: {
        personnes:[
            { idpersonne: 1, nom: 'Tournesol', prenom:'Tryphon'},
            { idpersonne: 2, nom: 'Castafiore', prenom:'Bianca'},
            { idpersonne: 3, nom: ' Rivière', prenom:'Manuel'},
            { idpersonne: 4, nom: ' Moulin',prenom:'Marguerite'},
        ]
    },
    membreCanal: {
        membresCanal:[
            {idCanal: 1, idMembre: 1},
            {idCanal: 1, idMembre: 2},
            {idCanal: 1, idMembre: 4},
            {idCanal: 2, idMembre: 2},
            {idCanal: 2, idMembre: 3},
            {idCanal: 3, idMembre: 3},
            {idCanal: 3, idMembre: 4},
            {idCanal: 4, idMembre: 1},

        ]
    }

}

const actionTypes = {
    ADD_CANAL: "addCanal"
}

export const actionCreators = {
    addCanal: (canal) => ({
        type: actionTypes.ADD_CANAL,
        value: canal
        })
}

const reducer = function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.ADD_CANAL:
            return { ...state, canal: { ...state.canal, canaux: [ ...state.canal.canaux,action.value ] }}

        default:
          return state;
      }
}

export const store = createStore(reducer);