import { createStore } from "redux";



const initialState = {
    canal: {
        canaux: []
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
    ADD_CANAL: "addCanal",
    ADD_MEMBRE: "addMembre",
    DELETE_MEMBRE: "deleteMembre",
    LOAD_CANAUX: "loadCanaux",

}

export const actionCreators = {
    addCanal: (canal) => ({
        type: actionTypes.ADD_CANAL,
        value: canal
        }),
    addMembre: (membre) =>({
        type: actionTypes.ADD_MEMBRE,
        value: membre
    }),
    deleteMembre: (membreCanal) =>({
        type: actionTypes.DELETE_MEMBRE,
        value: membreCanal
    }),
    loadCanaux: (canaux) =>({
        type: actionTypes.LOAD_CANAUX,
        value: canaux
    })
    
}

const reducer = function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.ADD_CANAL:
            return { ...state, canal: { ...state.canal, canaux: [ ...state.canal.canaux,action.value ] }}
        case actionTypes.ADD_MEMBRE:
            return { ...state, membreCanal: {...state.membreCanal, membresCanal: [ ...state.membreCanal.membresCanal,action.value ] }}
        case actionTypes.DELETE_MEMBRE:
             return { ...state, membreCanal: {...state.membreCanal, membresCanal: [ ...state.membreCanal.membresCanal,action.value ] }}
        case actionTypes.LOAD_CANAUX:
            return { ...state, canal: { ...state.canal, canaux: action.value } }

        default:
          return state;
      }
}

export const store = createStore(reducer);