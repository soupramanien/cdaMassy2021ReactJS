import EFGServices from '../../fetch/EFGs/EFGFetch';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EFGCard from '../../components/EFGs/EFGCard';

function EFGList() {
	// const efgs = useSelector((state) => state.efgs);
	const [efgs, setEfgs] = useState([]);
	const canalId = 1;
	useEffect(() => {
		EFGServices.getAllEFGs(setEfgs, canalId);
	}, [canalId]);

	console.log(efgs);
	console.log(setEfgs);

	return (
		<>
			<h1>Voici la liste des EFG</h1>
			{efgs.map((element) => (
				<>
					<EFGCard props={element} key={element.idEfg} />
					<Link to={`efgs/${element.idEfg}`} key={element.idEfg}>
						Lien de l'exercice
					</Link>
					<br />
				</>
			))}
		</>
	);
}

export default EFGList;
