import EFGServices from '../../fetch/EFGs/EFGFetch';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function EFGList() {
	// const efgs = useSelector((state) => state.efgs);
	const [efgs, setEfgs] = useState([]);
	const canalId = 1;
	useEffect(() => {
		EFGServices.getAllEFGs(setEfgs, canalId);
	}, [canalId]);

	return (
		<>
			<h1>Voici la liste des EFG</h1>
			{efgs.map((ef) => (
				<Link to={`efgs/${ef.idEfg}`} key={ef.idEfg}>
					Exo n°{ef.idEfg}
				</Link>
			))}
		</>
	);
}

export default EFGList;
