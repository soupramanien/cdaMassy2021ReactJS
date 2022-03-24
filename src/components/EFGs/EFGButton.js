import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
const EFGButton = ({ props }) => {
	let css = '';
	let message = '';

	const history = useHistory();
	if (isNaN(props)) {
		css = 'btn-creation';
		message = 'Créer un exercice';
	} else {
		css = 'efg-link';
		message = "Lien de l'exercice";
	}

	return (
		<>
			<Link to={'efgs/' + props} className={css}>
				{message}
			</Link>
		</>
	);
};

export default EFGButton;
