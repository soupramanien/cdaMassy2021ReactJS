import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import EFGCard from '../../components/EFGs/EFGCard';
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
			<EFGCard props={efg} />
			<div>COMPOSANT GROUPE</div>
		</>
	);
}

export default EFGDetail;
