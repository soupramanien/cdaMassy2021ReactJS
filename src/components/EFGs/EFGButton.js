import { Link } from 'react-router-dom';

const EFGButton = ({ props }) => {
	let css = '';
	let message = '';

	if (!isNaN(props)) {
		css = 'efg-link';
		message = "Lien de l'exercice";
	} else {
		css = 'btn-creation';
		message = 'Créer un exercice';
	}

	return (
		<Link to={`efgs/` + props} className={css}>
			{message}
		</Link>
	);
};

export default EFGButton;
