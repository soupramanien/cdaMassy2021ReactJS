import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import EFGCard from "../../components/EFGs/EFGCard";

function EFGDetail() {
	let params = useParams();
	const idEFG = params.idEfg;
	const efg = useSelector((state)=>state.efgs[idEFG-1]);

	return (
		<>
			<EFGCard efg={efg}/>

			<div>COMPOSANT GROUPE</div>
		</>
	);
}

export default EFGDetail;
