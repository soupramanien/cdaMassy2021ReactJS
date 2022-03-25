import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import EFGServices from '../../fetch/EFGs/EFGFetch';

function EFGAdd() {
	const { register, handleSubmit } = useForm();
	const [data, setData] = useState('');
	const [members, setMembers] = useState('');
	let groupes = '';
	const canalId = 1;

	useEffect(() => {
		EFGServices.getNombreMembres(setMembers, canalId);
	}, [canalId]);

	const reliquat = (e) => {
		let arrGroupes = [];
		let students = members - 1;
		const select = document.getElementById('select');
		let nbGroupes;
		if (select === null) nbGroupes = 2;
		else nbGroupes = select.value;

		let modulo = students % nbGroupes;
		let minMembres = Math.floor(students / nbGroupes);
		let maxMembres = minMembres;

		for (let i = 0; i < nbGroupes; i++) {
			arrGroupes.push(minMembres);
		}

		if (modulo !== 0) maxMembres++;
		while (modulo !== 0) {
			arrGroupes[modulo - 1] = maxMembres;
			modulo--;
		}
		return (groupes = arrGroupes.toString());
	};

	return (
		<div id='efg-container'>
			<h1>Création d'un exercice</h1>
			<form
				id='efg-form'
				onSubmit={handleSubmit((data) => {
					setData(JSON.stringify(data));
					console.log(data);
					let efg = {
						createur: {
							idCanal: 1,
							idPersonne: 3,
						},
						intitule: data.intitule,
						groupes: groupes,
						idCanal: 1,
						idCreateur: 3,
					};
					EFGServices.postEFG((res) => console.log(res), efg);			
				})}>
				<label>Intitulé de l'exercice</label>
				<input
					className='form-input'
					{...register('intitule')}
					placeholder="Initulé de l'exercice"
					required
				/>
				<br />
				<br />

				<label>Nombre d'élèves par groupe</label>

				<select id='select' onChange={() => reliquat()} required>
				<option value='2'>Select...</option><option value='2'>2</option>
					{members >= 6 && <option value='3'>3</option>}
					{members >= 8 && <option value='4'>4</option>}
					{members >= 10 && <option value='5'>5</option>}
				</select>
				<br />
				<br />
				<input type='submit' className='btn-creation' />
			</form>
		</div>
	);
}

export default EFGAdd;
