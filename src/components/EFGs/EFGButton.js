import { Link } from 'react-router-dom';

const EFGButton = ({ props }) => {
	let css = '';
	let message = '';
	let url = '';

	if (isNaN(props)) {
		switch (props) {
			case 'efgs':
				url = '/';
				css = 'efg-link';
				message = 'Retour à la liste des exercices';
				break;
			default:
				url = 'efgs/';
				css = 'btn-creation';
				message = 'Créer un exercice';
				break;
		}
	} else {
		url = 'efgs/';
		css = 'efg-link';
		message = "Lien de l'exercice";
	}

	return (
		<Link to={url + props} className={css}>
			{message}
		</Link>
	);
};

export default EFGButton;
