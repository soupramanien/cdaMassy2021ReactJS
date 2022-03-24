import EFGServices from '../../fetch/EFGs/EFGFetch';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EFGCard from '../../components/EFGs/EFGCard';
import './EFGStyle.css';
import EFGButton from '../../components/EFGs/EFGButton';

function EFGList() {
	const [efgs, setEfgs] = useState([]);
	const canalId = 1;
	useEffect(() => {
		EFGServices.getAllEFGs(setEfgs, canalId);
	}, [canalId]);

	console.log(efgs);
	console.log(setEfgs);

	return (
		<div id='efg-container'>
			<h1>Liste des exercices à faire en groupe</h1>
			<table className='tab-efg'>
				<thead>
					<tr>
						<th>N°</th>
						<th>Intitulé</th>
						<th>Groupes</th>
						<th>Lien de l'exercice</th>
					</tr>
				</thead>
				<tbody>
					{efgs.map((efg) => (
						<EFGCard efg={efg} key={efg.idEfg} isDisabled={false} />
					))}
				</tbody>
			</table>

			<EFGButton props={`new`} />
		</div>
	);
}

export default EFGList;
