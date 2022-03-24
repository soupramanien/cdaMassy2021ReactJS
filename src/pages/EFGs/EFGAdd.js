import EFGServices from '../../fetch/EFGs/EFGFetch';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function EFGAdd() {
	const { register, handleSubmit } = useForm();
	const [data, setData] = useState('');
	const membresCanal = 7 - 1;

	return (
		<form onSubmit={handleSubmit((data) => {
				setData(JSON.stringify(data));
				let efg = {
					"createur": {
						"idCanal": 1,
						"idPersonne": 3
					},
					"intitule": data.intitule,
					"groupes": "2,2",
					"idCanal": 1,
					"idCreateur": 3
				}
				EFGServices.postEFG((res)=>console.log(res),efg);
			})}>
			<label>Intitulé de l'exercice</label>
			<input {...register('intitule')} placeholder="Initulé de l'exercice" />
			<br />

			<label>Nombre d'élèves par groupe</label>
			<select {...register('nbMembersPerGroup')}>
				<option value='1'>1</option>
				<option value='2'>2</option>
				{membresCanal >= 6 && <option value='3'>3</option>}
				{membresCanal >= 8 && <option value='4'>4</option>}
				{membresCanal >= 10 && <option value='5'>5</option>}
			</select>
			<p>{data}</p>
			<input type='submit' />
		</form>
	);
}

export default EFGAdd;
