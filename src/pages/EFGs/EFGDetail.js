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

	useEffect(() => {
		EFGServices.getEFG(setEFG, idEFG);
	}, [idEFG]);

	return (
		<div id='efg-container'>
			{idEFG === efg.idEfg && (
				<>
					<EFGCard efg={efg} isDisabled={true} />
					<div>COMPOSANT GROUPE</div>
				</>
			)}
			{idEFG !== efg.idEfg && <EFGNotFound />}
		</div>
	);
}

export default EFGDetail;
