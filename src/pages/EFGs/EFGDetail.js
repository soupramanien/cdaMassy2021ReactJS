import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import EFGCard from "../../components/EFGs/EFGCard";
import getEFG from "../../fetch/EFGs/EFGFetch";

function EFGDetail() {

	let params = useParams();
	const idEFG = params.idEfg;
	const initialState = useSelector((state)=>state.efgs[0]);
	const [efg,setEFG] = useState(initialState) ;


	useEffect(()=>getEFG(idEFG).then((efg)=>setEFG(efg)), [idEFG]);
	return (
		<>
			{/* <EFGCard efg={efg} key={efg}/> */}
			{efg}

			<div>COMPOSANT GROUPE</div>
		</>
	);
}

export default EFGDetail;
