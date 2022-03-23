import EFGServices from '../../fetch/EFGs/EFGFetch';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EFGCard from '../../components/EFGs/EFGCard';
import { isDisabled } from '@testing-library/user-event/dist/utils';

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
			{efgs.map((efg) => (
				<>
					<EFGCard efg={efg} key={efg.idEfg} isDisabled={false} />
					<br />
				</>
			))}
			{/* <EFGAdd/> */}
		</>
	);
}

export default EFGList;
