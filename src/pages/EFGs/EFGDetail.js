import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import EFGCard from '../../components/EFGs/EFGCard';
import EFGServices from '../../fetch/EFGs/EFGFetch';
import EFGNotFound from './EFGNotFound';

function EFGDetail() {
	let params = useParams();
	const idEFG = parseInt(params.idEfg);
	const initialState = useSelector((state) => state.efgs[0]);
	const [efg, setEFG] = useState(initialState);
	const [formateur,setFormateur] = useState({
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
	})
	useEffect(() => {
		EFGServices.getEFG(setEFG, idEFG);
		EFGServices.getCreator(setFormateur,idEFG);
	}, [idEFG]);

	return (
		<div id='efg-container'>
			{idEFG === efg.idEfg && (
				<>
					<EFGCard efg={efg} isDisabled={true} formateur={formateur}/>
					<div>COMPOSANT GROUPE</div>
				</>
			)}
			{idEFG !== efg.idEfg && <EFGNotFound />}
		</div>
	);
}

export default EFGDetail;
