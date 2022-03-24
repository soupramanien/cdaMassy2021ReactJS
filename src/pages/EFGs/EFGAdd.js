import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import EFGServices from '../../fetch/EFGs/EFGFetch';

function EFGAdd() {
	const { register, handleSubmit } = useForm();
	const [data, setData] = useState('');
	const [members, setMembers] = useState('');
	const [groupes, setGroupes] = useState('');
	let num = 0;

	const canalId = 1;
	useEffect(() => {
		EFGServices.getNombreMembres(setMembers, canalId);
	}, [canalId]);

	return (
		<div id='efg-container'>
			<form
				onSubmit={handleSubmit((data) => {
					setData(JSON.stringify(data));
					console.log(data);
				})}>
				<label>Intitulé de l'exercice</label>
				<input {...register('intitule')} placeholder="Initulé de l'exercice" />
				<br />

				<label>Nombre d'élèves par groupe</label>
				<select
					id='select'
					{...register('nbMembersPerGroup')}
					onChange={() => {
						num = document.getElementById('select').value;
						let change = document.getElementById('num');
						change.innerHtml += num;
					}}>
					<option value='1'>1</option>
					<option value='2'>2</option>
					{members >= 6 && <option value='3'>3</option>}
					{members >= 8 && <option value='4'>4</option>}
					{members >= 10 && <option value='5'>5</option>}
				</select>
				<p>Nombres de membres dans le canal : {members}</p>
				<p id='num'>{num}</p>
				<p>{data}</p>
				<input type='submit' />
			</form>
		</div>
	);
}

export default EFGAdd;
