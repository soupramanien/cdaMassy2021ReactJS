import { createStore } from 'redux';

const initialState = {
	efgs: [
		{
			idEfg: 1,
			createur: {
				idCanal: 1,
				idPersonne: 1,
			},
			intitule: 'TP définir objectif',
			groupes: '2,3',
			idCanal: 1,
			idCreateur: 1,
		},
	],
};

const actionTypes = {};

export const actionCreators = {};

const reducer = function (state = initialState, action) {
	switch (action.type) {
		default:
			return state;
	}
};

export const store = createStore(reducer);
