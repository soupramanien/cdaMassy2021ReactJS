import EFGServices from '../../fetch/EFGs/EFGFetch';
import { useState, useEffect } from 'react';
import EFGCard from '../../components/EFGs/EFGCard';
import './EFGStyle.css';
import EFGButton from '../../components/EFGs/EFGButton';

function EFGList() {
	const [efgs, setEfgs] = useState([]);
	const [members, setMembers] = useState();

	const canalId = 1;
	useEffect(() => {
		EFGServices.getAllEFGs(setEfgs, canalId);
		EFGServices.getNombreMembres(setMembers, canalId);
	}, [canalId]);

	return (
		<div id='efg-container'>
			{efgs.length >= 1 && (
				<>
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
				</>
			)}
			{efgs.length === 0 && <p>Il n'y a aucun exercice dans ce canal.</p>}

			{(members < 5 || members === undefined || members === null) && (
				<p>
					Veuillez rajouter des élèves dans votre canal pour pouvoir créer un
					exercice.
				</p>
			)}
			{members >= 5 && <EFGButton props={'new'} />}
		</div>
	);
}

export default EFGList;
