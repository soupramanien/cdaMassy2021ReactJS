import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import EFGServices from '../../fetch/EFGs/EFGFetch';

function EFGDetail() {
	let params = useParams();
	const idEFG = params.idEfg;
	const initialState = useSelector((state) => state.efgs[0]);
	const [efg, setEFG] = useState(initialState);

	useEffect(() => {
		EFGServices.getEFG(setEFG, idEFG);
	}, [idEFG]);

	return (
		<>
			{efg.intitule}

			<div>COMPOSANT GROUPE</div>
		</>
	);
}

export default EFGDetail;
