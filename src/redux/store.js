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
		{
			idEfg: 2,
			createur: {
				idCanal: 1,
				idPersonne: 2,
			},
			intitule: 'TP définir but',
			groupes: '2,2,3',
			idCanal: 1,
			idCreateur: 2,
		}
	],
	formateur : {
		"idPersonne": 0,
		"prenom": "",
		"nom": "",
		"email": "",
		"tel": "",
		"pwd": "",
		"est_formateur": 0,
		"est_gestionnaire": 0,
		"est_administrateur": 0,
		"allCanauxMembre": null
	},

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
			{ idpersonne: 1, nom: 'Tournesol Tryphon'},
			{ idpersonne: 2, nom: 'Castafiore Bianca'},
			{ idpersonne: 3, nom: ' Rivière Manuel'},
			{ idpersonne: 4, nom: ' Moulin Marguerite'},
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
	LOAD_MEMBRE: "loadMembreCanal",

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
	})

	}

	const reducer = function (state = initialState, action) {
	switch (action.type) {
		case actionTypes.ADD_CANAL:
			return { ...state, canal: { ...state.canal, canaux: [ ...state.canal.canaux,action.value ] }}
		case actionTypes.ADD_MEMBRE:
			return { ...state, membreCanal: {...state.membreCanal, membresCanal: [ ...state.membreCanal.membresCanal,action.value ] }}
		case actionTypes.DELETE_MEMBRE:
			return { ...state, membreCanal: {...state.membreCanal, membresCanal: [...state.membreCanal.membresCanal.filter((mc) =>{ return !(mc.idMembre===action.value.idMembre && mc.idCanal === action.value.idCanal) })] } }
		default:
		return state;
	}
	}

	export const store = createStore(reducer);
