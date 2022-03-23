import { Link } from 'react-router-dom';

const EFGButton = ({ props }) => {
	return (
		<Link to={`efgs/${props.idEfg}`} key={props.idEfg}>
			Lien de l'exercice
		</Link>
	);
};

export default EFGButton;
