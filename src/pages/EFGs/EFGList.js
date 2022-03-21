import { Link } from 'react-router-dom';

function EFGList() {
	console.log('tededest');
	return (
		<>
			<h1>Voici la liste des EFG</h1>

			<Link to='/efgs/1'>EFG 1</Link>
		</>
	);
}

export default EFGList;
