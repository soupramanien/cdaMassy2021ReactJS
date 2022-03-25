import { createStore } from "redux";

const initialState = {

    questionnaires : [
        {
            "idQuestionnaire":1,
            "libelle":"Bases de Java",
            "idCanal":1,
            "idCreateur":1, 
            "dateAjout": "2022-02-14 09:46:14"
        },

        {
            "idQuestionnaire":2,
            "libelle":"Bases de ReactJS",
            "idCanal":1,
            "idCreateur":1, 
            "dateAjout": "2022-03-14 09:46:14"
        },
        
        {
            "idQuestionnaire":3,
            "libelle":"Bases de HTML",
            "idCanal":1,
            "idCreateur":1, 
            "dateAjout":"2022-04-14 09:46:14"
        }
    ]

}

const actionTypes = {
}

export const actionCreators = {

}

const reducer = function (state = initialState, action) {
    switch (action.type) {

        default:
          return state;
      }
}

export const store = createStore(reducer);