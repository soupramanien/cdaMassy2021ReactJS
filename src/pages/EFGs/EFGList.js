import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function EFGList() {
	console.log('tededest');
	const efgs = useSelector((state)=>state.efgs);
	return (
		<>
			<h1>Voici la liste des EFG</h1>
			{efgs.map((efg)=>(
				<Link 
					to={`/efgs/${efg.idEfg}`} 
					key={efg.idEfg}
				>EFG {efg.idEfg}</Link>
			))}
		</>
	);
}

export default EFGList;
