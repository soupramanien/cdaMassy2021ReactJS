import { createStore } from "redux";

const initialState = {
    question : {
        allQuestions: [
            { id: 1, libelle: 'Quelle heure est-il?', auteur: 'Romain'},
            { id: 2, libelle: 'Avez-vous fini?', auteur: 'Jacques' }
        ],
        addMode: false,
    }
}

const actionTypes = {
    ADD_QUESTION: "addQuestion"
}

export const actionCreators = {
    addQuestion: (libelle) => ({
        type: actionTypes.ADD_QUESTION,
        value: libelle
      })
}

const reducer = function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.ADD_QUESTION:
          const id = state.question.allQuestions.length > 0 ? state.question.allQuestions[state.question.allQuestions.length - 1].id+1 : 1;
          return { ...state, question: { ...state.question, allQuestions: [...state.question.allQuestions, {...action.value, id: id}] } }
        default:
          return state;
      }
}

export const store = createStore(reducer);